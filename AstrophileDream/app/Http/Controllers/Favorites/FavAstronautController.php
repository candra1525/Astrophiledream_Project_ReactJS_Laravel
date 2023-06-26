<?php

namespace App\Http\Controllers\Favorites;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\FavAstronaut;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class FavAstronautController extends Controller
{  public function favoritesAstronaut(Request $request, $userId)
    {
        try {
            $favoritesUser = DB::select("SELECT favoriteastronauts.id AS 'favid' , users.id, astronauts.* FROM favoriteastronauts 
            JOIN users ON users.id = favoriteastronauts.userId
            JOIN astronauts ON astronauts.astronautId = favoriteastronauts.astronautId 
            WHERE users.id = ?", [$userId]);

            return response()->json([
                "message" => "Successfully Fetched Favorite Astronaut",
                "data" => $favoritesUser
            ], Response::HTTP_OK);
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json([
                "message" => "Failed to Fetch User's Favorite Astronaut"
            ], Response::HTTP_NOT_FOUND);
        }   
    }

    // Done
    public function index($id)
    {
        $favAstronaut = FavAstronaut::all();
        return response()->json([
            "message" => "Sucessfully Fetched User Favorite Astronaut",
            "data" => $favAstronaut
        ], Response::HTTP_OK);

        if ($favAstronaut == null) {
            return response()->json([
                "message" => "Failed Fetched User Favorite Astronaut"
            ], Response::HTTP_NOT_FOUND);
        }
    }

    // Done
    public function store(Request $request)
    {
        $validasi = Validator::make(
            $request->all(),
            [
                "userId" => "required|integer",
                "astronautId" => "required|integer"
            ]
        );
        if ($validasi->fails()) {
            return response()->json([
                "message" => "Failed creating a new Astronaut",
                "error" => $validasi->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        } else {
            $validated = $validasi->validated();
            try {
                $createFavAstronaut = FavAstronaut::create($validated);
                return response()->json([
                    "message" => "Successfully created a new Astronaut",
                    "data" => $createFavAstronaut
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    "message" => "Data astronaut telah ada di favorite !",
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
            $favAstronaut = FavAstronaut::findOrFail($id);

            return response()->json([
                "message" => "Sucessfully fetched Favorite Astronaut",
                "data" => $favAstronaut
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                "message" => "Failed fetched Favorite Astronaut",
                "error" => $e->getMessage()
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        try {
            $favAstronaut = FavAstronaut::findOrFail($id);
            $favAstronaut->delete();

            return response()->json([
                "message" => "Sucessfully deleted Favorite Astronaut with id {$id}",
                "data" => $favAstronaut
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                "message" => "Failed delete Favorite Astronaut",
                "error" => $e->getMessage()
            ]);

        }
    }
}
