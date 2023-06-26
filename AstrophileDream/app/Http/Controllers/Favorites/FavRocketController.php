<?php

namespace App\Http\Controllers\Favorites;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\FavRocket;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class FavRocketController extends Controller
{
    /**
     * Display a listing of the resource.
     */


    public function favoritesRocket(Request $request, $userId)
    {
        try {
            $favoritesUser = DB::SELECT("SELECT favoriterockets.id AS 'favIdRocket', users.id, rockets.* FROM favoriterockets
            JOIN users on users.id = favoriterockets.userId
            JOIN rockets ON rockets.rocketId = favoriterockets.rocketId
            WHERE users.id = ?", [$userId]);

            return response()->json([
                "message" => "Successfully Fetched Favorite Rocket",
                "data" => $favoritesUser
            ], Response::HTTP_OK);
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json([
                "message" => "Failed to Fetch User's Favorite Rocket"
            ], Response::HTTP_NOT_FOUND);
        }   
    }


    public function index()
    {
        //
        $favRocket = FavRocket::all();

        return response()->json([
            "message" => "Sucessfully Fetched User Favorite Planet",
            "data" => $favRocket
        ], Response::HTTP_OK);

        if ($favRocket == null) {
            return response()->json([
                "message" => "Failed Fetched User Favorite Planet"
            ], Response::HTTP_NOT_FOUND);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $validasi = Validator::make(
            $request->all(),
            [
                "userId" => "required|Integer",
                "rocketId" => "required|Integer"
            ]
        );

        if ($validasi->fails()) {
            return response()->json([
                "message" => "Failed creating a new Favorite Rocket",
                "error" => $validasi->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        } else {
            $validated = $validasi->validated();
            try {
                $createdFavRocket = FavRocket::create($validated);
                return response()->json([
                    "message" => "Sucessfully created a new Favorite Rocket",
                    "data" => $createdFavRocket
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    "message" => "Failed creating a new Favorite Rocket",
                    "code" => "0",
                    "error" => $e->getMessage()
                ]);
            }
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        try {
            $favRocket = FavRocket::findOrFail($id);

            return response()->json([
                "message" => "Sucessfully fetched Favorite Rocket",
                "data" => $favRocket
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                "message" => "Failed fetched Favorite Rocket",
                "error" => $e->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        try {
            $favRocket = FavRocket::findOrFail($id);
            $favRocket->delete();

            return response()->json([
                "message" => "Sucessfully deleted Favorite Rocket with id {$id}",
                "data" => $favRocket
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                "message" => "Failed delete Favorite Rocket",
                "error" => $e->getMessage()
            ]);

        }
    }
}
