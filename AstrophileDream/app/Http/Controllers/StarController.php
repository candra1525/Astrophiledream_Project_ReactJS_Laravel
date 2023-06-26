<?php

namespace App\Http\Controllers;

use App\Models\Star;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class StarController extends Controller
{
    public function index()
    {
        $star = Star::all();

        return response()->json([
            "message" => "Sucessfully fetched Star",
            "data" => $star
        ], Response::HTTP_OK);

        if ($astronaut == null) {
            return response()->json([
                "message" => "Failed Fetched Star"
            ], Response::HTTP_NOT_FOUND);
        }
    }

    public function store(Request $request)
    {
        $validasi = Validator::make(
            $request->all(),
            [
                "starName" => "required|String",
                "starConstellation" => "required|String",
                "starDeclination" => "required|String",
                "starArea" => "required|String",
                "starDegreeVisible" => "required|String",
                "starDateVisible" => "required|date",
                "starTimeVisible" => "required|String",
                "starImage" => "file|image|max:5000",
                "starDescription" => "required|string",
            ]
        );

        if ($validasi->fails()) {
            return response()->json([
                "message" => "Failed creating a new Star",
                "error" => $validasi->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        } else {
            $validated = $validasi->validated();
            try 
            {
                $image = $request->file('starImage');
                $imageName = "foto-" . time() . '.' . $image->getClientOriginalExtension();
                $image->storeAs('public/stars', $imageName);
    
                // Buat data Planet baru
                $createdStar = Star::create([
                    "starName" => $validated['starName'],
                    "starConstellation" => $validated['starConstellation'],
                    "starDeclination" => $validated['starDeclination'],
                    "starArea" => $validated['starArea'],
                    "starDegreeVisible" => $validated['starDegreeVisible'],
                    "starDateVisible" => $validated['starDateVisible'],
                    "starTimeVisible" => $validated['starTimeVisible'],
                    "starImage" => $imageName,
                    "starDescription" => $validated['starDescription'],
                ]);
    
                return response()->json([
                    "message" => "Successfully created a new Star",
                    "data" => $createdStar
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    "message" => "Failed creating a new Star",
                    "error" => $e->getMessage()
                ]);
            }
        }
    }
 
    public function show($id)
    {
        try {
            $star = Star::findOrFail($id);

            return response()->json([
                "message" => "Sucessfully fetched Star",
                "data" => $star
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                "message" => "Failed fetched Star",
                "error" => $e->getMessage()
            ]);
        }
    }

    public function update(Request $request, $id)
    {
       $validasi = Validator::make($request->all(), [
            "starName" => "String",
            "starConstellation" => "String",
            "starDeclination" => "String",
            "starArea" => "String",
            "starDegreeVisible" => "String",
            "starDateVisible" => "date",
            "starTimeVisible" => "String",
            "starImage" => "nullable|max:5000",
            "starDescription" => "string",
       ]);

       if($validasi->fails())
       {
            return response()->json([
                "message" => "Failed to Update Star",
                "error" => $validasi->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
       }
       
        try
        {
            $star = Star::findOrFail($id);

            $star->fill($request->only([
                "starName",
                "starConstellation",
                "starDeclination",
                "starArea",
                "starDegreeVisible",
                "starDateVisible",
                "starTimeVisible" ,
                "starDescription",
            ]));

            if($request->hasFile('starImage'))
            {
                $image = $request->file('starImage');
                $ext = $image->getClientOriginalExtension();
                $nama_file = "foto-" . time() . "." . $ext;
                $path = $image->storeAs("public/stars", $nama_file);

                if ($star->starImage && Storage::exists("public/astronauts/" . $star->starImage)) 
                {
                    Storage::delete("public/astronauts/" . $star->starImage);
                }

                $star->starImage = $nama_file;
            }

            $star->save();

            return response()->json([
                "message" => "Successfully updated Star",
                "data" => $star
            ]);
        } catch (\Exception $e) 
        {
            return response()->json([
                "message" => "Failed to update Star",
                "error" => $e->getMessage()
            ]);
        }
       
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            $star = Star::findOrFail($id);
            $star->delete();

            return response()->json([
                "message" => "Sucessfully deleted Star with id {$id}",
                "data" => $star
            ]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json([
                "message" => "Failed delete Star",
                "error" => $e->getMessage()
            ]);

        }
    }
}