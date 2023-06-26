<?php

namespace App\Http\Controllers\Favorites;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\FavPlanet;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class FavPlanetController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function favoritesPlanet(Request $request, $userId)
    {
        try {
            $favoritesUser = DB::select("SELECT favoriteplanets.id AS 'favIdPlanet', users.id, planets.* FROM favoriteplanets 
            JOIN users on users.id = favoriteplanets.userId
            JOIN planets ON planets.planetId = favoriteplanets.planetId
            WHERE users.id = ?", [$userId]);

            return response()->json([
                "message" => "Successfully Fetched Favorite Planet",
                "data" => $favoritesUser
            ], Response::HTTP_OK);
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json([
                "message" => "Failed to Fetch User's Favorite Planet"
            ], Response::HTTP_NOT_FOUND);
        }   
    }


    public function index()
    {
        //
        $favPlanet = FavPlanet::all();

        return response()->json([
            "message" => "Sucessfully Fetched User Favorite Planet",
            "data" => $favPlanet
        ], Response::HTTP_OK);

        if ($favPlanet == null) {
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
                "planetId" => "required|Integer"
            ]
        );

        if ($validasi->fails()) {
            return response()->json([
                "message" => "Failed creating a new Favorite Planet",
                "error" => $validasi->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        } else {
            $validated = $validasi->validated();
            try {
                $createdFavPlanet = FavPlanet::create($validated);
                return response()->json([
                    "message" => "Sucessfully created a Favorite Planet",
                    "data" => $createdFavPlanet
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    "message" => "Failed creating a new Favorite Planet",
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
            $favPlanet = FavPlanet::findOrFail($id);

            return response()->json([
                "message" => "Sucessfully fetched Favorite Planet",
                "data" => $favPlanet
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                "message" => "Failed fetched Favorite Planet",
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
            $favPlanet = FavPlanet::findOrFail($id);
            $favPlanet->delete();

            return response()->json([
                "message" => "Sucessfully deleted Favorite Planet with id {$id}",
                "data" => $favPlanet
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                "message" => "Failed delete Favorite Planet",
                "error" => $e->getMessage()
            ]);

        }
    }
}
