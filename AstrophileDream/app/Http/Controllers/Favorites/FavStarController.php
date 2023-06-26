<?php

namespace App\Http\Controllers\Favorites;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\FavStar;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class FavStarController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function favoritesStar(Request $request, $userId)
    {
        try 
        {
            $favoritesUser = DB::SELECT("SELECT favoritestars.id AS 'favIdStar', users.id, stars.* FROM favoritestars
            JOIN users on users.id = favoritestars.userId
            JOIN stars  ON stars.starId = favoritestars.starId
            WHERE users.id = ?", [$userId]);

            return response()->json([
                "message" => "Successfully Fetched Favorite Star",
                "data" => $favoritesUser
            ], Response::HTTP_OK);
        } catch (\Illuminate\Database\QueryException $e) 
        {
            return response()->json([
                "message" => "Failed to Fetch User's Favorite Star"
            ], Response::HTTP_NOT_FOUND);
        }   
    }

    public function index()
    {
        //
        $favStar = FavStar::all();

        return response()->json([
            "message" => "Sucessfully Fetched User Favorite Planet",
            "data" => $favStar
        ], Response::HTTP_OK);

        if ($favStar == null) {
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
                "starId" => "required|Integer"
            ]
        );

        if ($validasi->fails()) {
            return response()->json([
                "message" => "Failed creating a new Favorite Star",
                "error" => $validasi->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        } else {
            $validated = $validasi->validated();
            try {
                $createdFavStar = FavStar::create($validated);
                return response()->json([
                    "message" => "Sucessfully created a new Favorite Star",
                    "data" => $createdFavStar
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    "message" => "Failed creating a new Favorite Star",
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
            $favStar = FavStar::findOrFail($id);

            return response()->json([
                "message" => "Sucessfully fetched Favorite Star",
                "data" => $favStar
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                "message" => "Failed fetched Favorite Star",
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
            $favStar = FavStar::findOrFail($id);
            $favStar->delete();

            return response()->json([
                "message" => "Sucessfully deleted Favorite Star with id {$id}",
                "data" => $favStar
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                "message" => "Failed delete Favorite Star",
                "error" => $e->getMessage()
            ]);

        }
    }
}
