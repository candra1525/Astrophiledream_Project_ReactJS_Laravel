<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

// Validasi
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::all();

        return response()->json([
            "message" => "Sucessfully fetched User",
            "data" => $user
        ], Response::HTTP_OK);

        if ($astronaut == null) {
            return response()->json([
                "message" => "Failed Fetched User"
            ], Response::HTTP_NOT_FOUND);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validasi data input
        $validasi = Validator::make(
            $request->all(),
            [
                "name" => "required|string",
                "email" => "required|string|email:rfc,dns|unique:users,email",
                "gender" => "required|string",
                "phoneNumber" => "required|string",
                "role" => "required|string",
                "image" => "required|file|image|max:5000",
                "password" => "required|string"
            ]
        );

        if ($validasi->fails()) {
            return response()->json([
                "message" => "Failed creating a new User",
                "error" => $validasi->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        } else {
            $validated = $validasi->validated();
            // Hashing password
            $validated["password"] = bcrypt($validated["password"]);
            try {
                // Simpan file gambar
                $image = $request->file('image');
                $ext = $image->getClientOriginalExtension();
                $nama_file = "foto-" . time() . "." . $ext;
                $path = $image->storeAs("public/user", $nama_file);

                // Tambahkan nama file gambar ke data yang divalidasi
                $validated["image"] = $nama_file;

                $createdUser = User::create($validated);
                return response()->json([
                    "message" => "Successfully created a new User",
                    "data" => $createdUser
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    "message" => "Failed creating a new User",
                    "error" => $e->getMessage()
                ]);
            }
        }
    }


    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        try {
            $user = User::findOrFail($id);

            return response()->json([
                "message" => "Sucessfully fetched User",
                "data" => $user
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                "message" => "Failed fetched User",
                "error" => $e->getMessage()
            ]);
        }
    }

    public function comparePassword(Request $request, string $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        if (Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Match'], 200);
        } else {
            return response()->json(['message' => 'Not match'], 400);
        }
    }

    public function update(Request $request, string $id)
{
    // Validasi data input
    $validasi = Validator::make(
        $request->all(),
        [
            "name" => "string",
            "email" => "string|email|unique:users,email,".$id,
            "gender" => "string",
            "phoneNumber" => "string",
            "role" => "string",
            "image" => "nullable|max:5000",
            "password" => "nullable|string"
        ]
    );

    if ($validasi->fails()) {
        return response()->json([
            "message" => "Failed updating the User",
            "error" => $validasi->errors()
        ], Response::HTTP_NOT_ACCEPTABLE);
    } else {
        $validated = $validasi->validated();

        try {
            $user = User::findOrFail($id);

            // Update atribut-atribut pengguna
            $user->name = $validated['name'];
            $user->email = $validated['email'];
            $user->gender = $validated['gender'];
            $user->phoneNumber = $validated['phoneNumber'];
            $user->role = $validated['role'];

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $ext = $image->getClientOriginalExtension();
                $nama_file = "foto-" . time() . "." . $ext;
                $path = $image->storeAs("public/user", $nama_file);

                if (Storage::exists("public/user/" . $user->image)) {
                    Storage::delete("public/user/" . $user->image);
                }

                $user->image = $nama_file;
            }

            if (!empty($validated['password'])) {
                $user->password = bcrypt($validated['password']);
            }

            $user->save();

            return response()->json([
                "message" => "Successfully updated the User",
                "data" => $user
            ]);
        } catch (\Exception $e) {
            return response()->json([
                "message" => "Failed updating the User",
                "error" => $e->getMessage()
            ]);
        }
    }
}

    public function destroy($id)
    {
        try {
            $user = User::findOrFail($id);
            $user->delete();

            return response()->json([
                "message" => "Sucessfully deleted User with id {$id}",
                "data" => $user
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                "message" => "Failed delete User",
                "error" => $e->getMessage()
            ]);

        }
    }
}
