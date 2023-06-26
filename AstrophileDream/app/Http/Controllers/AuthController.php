<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    // register
    public function register()
    {
        $validator = Validator::make(request()->all(), [
            'name' => 'required|String',
            'email' => 'required|String|email:rfc,dns|unique:users,email',
            'image' => 'String',
            'gender' => 'required|String',
            'phoneNumber' => 'required|numeric',
            'role' => 'required|String',
            'password' => 'required|confirmed',
        ]);

        if($validator->fails())
        {
            return response()->json($validator->messages(), 422);
        }

        $user = User::create([
            'name' => request('name'), 
            'email' => request('email'), 
            'image' => request('image'), 
            'gender' => request('gender'), 
            'phoneNumber' => request('phoneNumber'), 
            'role' => request('role'), 
            'password' => Hash::make(request('password')), 
        ]);

        if($user)
        {
            return response()->json(['message' => 'Pendaftaran User Berhasil']);
        }
        else
        {
            return response()->json(['message' => 'Pendaftaran User gagal']);
        }

    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $validator = Validator::make(request()->all(), [
            'email' => 'String|required|email',
            'password' => 'required'
        ]);

        if($validator->fails())
        {
            return response()->json($validator->messages(), 422);
        }

        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Email or password wrong !'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 3600
        ]);
    }
}


// 10.27