<?php

namespace App\Http\Controllers;

use App\Models\Astronaut;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class AstronautController extends Controller
{
    // Done
    public function index()
    {
        $astronaut = Astronaut::all();

        return response()->json([
            "message" => "Sucessfully fetched Astronaut",
            "data" => $astronaut
        ], Response::HTTP_OK);

        if($astronaut == null){
            return response()->json([
                "message"=> "Failed Fetched Astronaut"
            ],Response::HTTP_NOT_FOUND);
        }
    }

    // Done
    public function store(Request $request)
    {
        // Validasi data input
        $validasi = Validator::make($request->all(), [
            "firstName" => "required|string",
            "lastName" => "required|string",
            "position" => "required|string",
            "rank" => "required|string",
            "timeInSpace" => "required|string",
            "numberOfMissions" => "required|integer",
            "missions" => "required|string",
            "education" => "required|string",
            "yearsActive" => "required|integer",
            "status" => "required|string",
            "astronautImage" => "file|image|max:5000",
            "astronautDescription" => "required|string",
        ]);

        if ($validasi->fails()) {
            return response()->json([
                "message" => "Failed creating a new Astronaut",
                "error" => $validasi->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        } else {
            $validated = $validasi->validated();

            try {
                // Simpan gambar ke direktori penyimpanan
                $image = $request->file('astronautImage');
                $imageName = "foto-".time().'.'.$image->getClientOriginalExtension();
                $image->storeAs('public/astronauts', $imageName);


                // Buat data Astronaut baru
                $createdAstronaut = Astronaut::create([
                    "firstName" => $validated['firstName'],
                    "lastName" => $validated['lastName'],
                    "position" => $validated['position'],
                    "rank" => $validated['rank'],
                    "timeInSpace" => $validated['timeInSpace'],
                    "numberOfMissions" => $validated['numberOfMissions'],
                    "missions" => $validated['missions'],
                    "education" => $validated['education'],
                    "yearsActive" => $validated['yearsActive'],
                    "status" => $validated['status'],
                    "astronautImage" => $imageName,
                    "astronautDescription" => $validated['astronautDescription'],
                ]);

                return response()->json([
                    "message" => "Successfully created a new Astronaut",
                    "data" => $createdAstronaut
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    "message" => "Failed creating a new Astronaut 2",
                    "error" => $e->getMessage()
                ]);
            }
        }
    }
    
    // DONE
    public function show($id)
    {
        try
        {
            $astronaut = Astronaut::findOrFail($id);

            return response()->json([
                "message" => "Sucessfully fetched Astronaut",
                "data" => $astronaut
            ]);
        }
        catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e)
        {
            return response()->json([
                "message" => "Failed fetched Astronaut",
                "error" => $e->getMessage()
            ]);
        }
    }

    public function update(Request $request, string $id)
    {
        $validasi = Validator::make($request->all(), [
            "firstName" => "string",
            "lastName" => "string",
            "position" => "string",
            "rank" => "string",
            "timeInSpace" => "string",
            "numberOfMissions" => "integer",
            "missions" => "string",
            "education" => "string",
            "yearsActive" => "integer",
            "status" => "string",
            "astronautImage" => "nullable|max:5000",
            "astronautDescription" => "string",
        ]);

        if ($validasi->fails()) {
            return response()->json([
                "message" => "Failed to update Astronaut",
                "error" => $validasi->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        try {
            $astronaut = Astronaut::findOrFail($id);

            $astronaut->fill($request->only([
                "firstName",
                "lastName",
                "position",
                "rank",
                "timeInSpace",
                "numberOfMissions",
                "missions",
                "education",
                "yearsActive",
                "status",
                "astronautDescription",
            ]));

            if ($request->hasFile('astronautImage')) {
                $image = $request->file('astronautImage');
                $ext = $image->getClientOriginalExtension();
                $nama_file = "foto-" . time() . "." . $ext;
                $path = $image->storeAs("public/astronauts", $nama_file);

                if ($astronaut->astronautImage && Storage::exists("public/astronauts/" . $astronaut->astronautImage)) {
                    Storage::delete("public/astronauts/" . $astronaut->astronautImage);
                }

                $astronaut->astronautImage = $nama_file;
            }

            $astronaut->save();

            return response()->json([
                "message" => "Successfully updated Astronaut",
                "data" => $astronaut
            ]);
        } catch (\Exception $e) {
            return response()->json([
                "message" => "Failed to update Astronaut",
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
            $astronaut = Astronaut::findOrFail($id);
            $astronaut->delete();

            return response()->json([
                "message" => "Sucessfully deleted Astronaut with id {$id}",
                "data" => $astronaut
            ]);
        }
        catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e)
        {
            return response()->json([
                "message" => "Failed delete Astronaut",
                "error" => $e->getMessage()
            ]);

        }
    }


}
