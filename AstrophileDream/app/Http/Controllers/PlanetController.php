<?php

namespace App\Http\Controllers;

use App\Models\Planet;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class PlanetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $planet = Planet::all();

        return response()->json([
            "message" => "Sucessfully fetched Planet",
            "data" => $planet
        ], Response::HTTP_OK);

        if ($astronaut == null) {
            return response()->json([
                "message" => "Failed Fetched Planet"
            ], Response::HTTP_NOT_FOUND);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // untuk validasi sesuai type data
        $validasi = Validator::make($request->all(), [
            "planetName" => "required|string",
            "planetAlternativeName" => "required|string",
            "planetSurfaceArea" => "required|string",
            "planetVolume" => "required|string",
            "planetMass" => "required|string",
            "planetGravity" => "required|string",
            "planetImage" => "required|image",
            "planetDescription" => "required|string"
        ]);
    
        if ($validasi->fails()) {
            return response()->json([
                "message" => "Failed creating a new Planet",
                "error" => $validasi->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        } else {
            $validated = $validasi->validated();
            try {
                // Simpan gambar ke direktori penyimpanan
                $image = $request->file('planetImage');
                $imageName = "foto-" . time() . '.' . $image->getClientOriginalExtension();
                $image->storeAs('public/planets', $imageName);
    
                // Buat data Planet baru
                $createdPlanet = Planet::create([
                    "planetName" => $validated['planetName'],
                    "planetAlternativeName" => $validated['planetAlternativeName'],
                    "planetSurfaceArea" => $validated['planetSurfaceArea'],
                    "planetVolume" => $validated['planetVolume'],
                    "planetMass" => $validated['planetMass'],
                    "planetGravity" => $validated['planetGravity'],
                    "planetImage" => $imageName,
                    "planetDescription" => $validated['planetDescription'],
                ]);
    
                return response()->json([
                    "message" => "Successfully created a new Planet",
                    "data" => $createdPlanet
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    "message" => "Failed creating a new Planet",
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
        try
        {
            $planet = Planet::findOrFail($id);

            return response()->json([
                "message" => "Sucessfully fetched Planet",
                "data" => $planet
            ]);
        }
        catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e)
        {
            return response()->json([
                "message" => "Failed fetched Planet",
                "error" => $e->getMessage()
            ]);
        }
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validasi =  Validator::make($request->all(), [
            "planetName" => "String",
            "planetAlternativeName" => "String",
            "planetSurfaceArea" => "String",
            "planetVolume" => "String",
            "planetMass" => "String",
            "planetGravity" => "String",
            "planetImage" => "nullable|max:5000",
            "planetDescription" => "String"
        ]);

        if ($validasi->fails()) {
            return response()->json([
                "message" => "Failed to update Planet",
                "error" => $validasi->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        } 

        try 
        {
            $planet = Planet::findOrFail($id);

            $planet->fill($request->only([
                "planetName",
                "planetAlternativeName",
                "planetSurfaceArea",
                "planetVolume",
                "planetMass",
                "planetGravity",
                "planetDescription"
            ]));

            if ($request->hasFile('planetImage')) 
            {
                $image = $request->file('planetImage');
                $ext = $image->getClientOriginalExtension();
                $nama_file = "foto-" . time() . "." . $ext;
                $path = $image->storeAs("public/planets", $nama_file);

                if ($planet->planetImage && Storage::exists("public/planets/" . $planet->planetImage)) 
                {
                    Storage::delete("public/planets/" . $planet->planetImage);
                }
                $planet->planetImage = $nama_file;
            }
            $planet->save();

            return response()->json([
                "message" => "Successfully updated Planet",
                "data" => $planet
            ]);
        } 
        catch (\Exception $e) 
        {
            return response()->json([
                "message" => "Failed to update Planet",
                "error" => $e->getMessage()
            ]);
        }
     }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try
        {
            $planet = Planet::findOrFail($id);
            $planet->delete();

            return response()->json([
                "message" => "Sucessfully deleted Planet with id {$id}",
                "data" => $planet
            ]);
        }
        catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e)
        {
            return response()->json([
                "message" => "Failed delete Planet",
                "error" => $e->getMessage()
            ]);

        }
    }
}
