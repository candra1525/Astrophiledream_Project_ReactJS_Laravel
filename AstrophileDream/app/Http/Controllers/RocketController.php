<?php

namespace App\Http\Controllers;

use App\Models\Rocket;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class RocketController extends Controller
{
    public function index()
    {
        $rocket = Rocket::all();

        return response()->json([
            "message" => "Sucessfully fetched User",
            "data" => $rocket
        ], Response::HTTP_OK);

        if ($astronaut == null) {
            return response()->json([
                "message" => "Failed Fetched Rocket"
            ], Response::HTTP_NOT_FOUND);
        }
    }

    public function store(Request $request)
    {
        // untuk validasi sesuai type data
        $validasi = Validator::make($request->all(), [
            "rocketName" => "required|string",
            "type" => "required|string",
            "placeOfOrigin" => "required|string",
            "rocketMissions" => "required|string",
            "usedBy" => "required|string",
            "manufracture" => "required|string",
            "launchSites" => "required|string",
            "totalLaunch" => "required|integer",
            "firstFlight" => "required|date",
            "lastFlight" => "required|date",
            "status" => "required|string",
            "rocketImage" => "required|file|image|max:5000",
            "rocketDescription" => "required|string",
        ]);

        if ($validasi->fails()) {
            return response()->json([
                "message" => "Failed creating a new Rocket",
                "error" => $validasi->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        } else {
            $validated = $validasi->validated();
            
            try {
                // Simpan gambar ke direktori penyimpanan
                $image = $request->file('rocketImage');
                $imageName = "foto-".time().'.'.$image->getClientOriginalExtension();
                $image->storeAs('public/rockets', $imageName);


                // Buat data Rocket baru
                $createdRocket = Rocket::create([
                    "rocketName" => $validated['rocketName'],
                    "type" => $validated['type'],
                    "placeOfOrigin" => $validated['placeOfOrigin'],
                    "rocketMissions" => $validated['rocketMissions'],
                    "usedBy" => $validated['usedBy'],
                    "manufracture" => $validated['manufracture'],
                    "launchSites" => $validated['launchSites'],
                    "totalLaunch" => $validated['totalLaunch'],
                    "firstFlight" => $validated['firstFlight'],
                    "lastFlight" => $validated['lastFlight'],
                    "status" => $validated['status'],
                    "rocketImage" => $imageName,
                    "rocketDescription" => $validated['rocketDescription'],
                ]);

                return response()->json([
                    "message" => "Successfully created a new Rocket",
                    "data" => $createdRocket
                ]);
            } catch (\Exception $e) {
                return response()->json([
                    "message" => "Failed creating a new Rocket 2",
                    "error" => $e->getMessage()
                ]);
            }
        }
    }

    public function show($id)
    {
        try
        {
            $rocket = Rocket::findOrFail($id);

            return response()->json([
                "message" => "Sucessfully fetched Rocket",
                "data" => $rocket
            ]);
        }
        catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e)
        {
            return response()->json([
                "message" => "Failed fetched Rocket",
                "error" => $e->getMessage()
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        $validasi =  Validator::make($request->all(), [
            "rocketName" => "String",
            "type" => "String",
            "placeOfOrigin" => "String",
            "rocketMissions" => "String",
            "usedBy" => "String",
            "manufracture" => "String",
            "launchSites" => "String",
            "totalLaunch" => "integer",
            "firstFlight" => "date",
            "lastFlight" => "date",
            "status" => "string",
            "rocketImage" => "nullable|max:5000",
            "rocketDescription" => "string",
        ]);

        if ($validasi->fails()) {
            return response()->json([
                "message" => "Failed to update Rocket",
                "error" => $validasi->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        } 

        try 
        {
            $rocket = Rocket::findOrFail($id);
            $rocket->fill($request->only([
                "rocketName",
                "type",
                "placeOfOrigin",
                "rocketMissions",
                "usedBy",
                "manufracture",
                "launchSites",
                "totalLaunch",
                "firstFlight",
                "lastFlight",
                "status",
                "rocketDescription",
            ]));

            if ($request->hasFile('rocketImage')) 
            {
                $image = $request->file('rocketImage');
                $ext = $image->getClientOriginalExtension();
                $nama_file = "foto-" . time() . "." . $ext;
                $path = $image->storeAs("public/rockets", $nama_file);

                if ($rocket->rocketImage && Storage::exists("public/rockets/" . $rocket->rocketImage))
                {                        
                    Storage::delete("public/rockets/" . $rocket->rocketImage);
                }

                $rocket->rocketImage = $nama_file;
            }

            $rocket->save();

            return response()->json([
                "message" => "Successfully updated Rocket",
                "data" => $rocket
            ]);
        } 
        catch (\Exception $e) 
        {
            return response()->json([
                "message" => "Failed to update Rocket",
                "error" => $e->getMessage()
            ]);
        }
    }

    public function destroy($id)
    {
        try
        {
            $rocket = Rocket::findOrFail($id);
            $rocket->delete();

            return response()->json([
                "message" => "Sucessfully deleted Rocket with id {$id}",
                "data" => $rocket
            ]);
        }
        catch(\Illuminate\Database\Eloquent\ModelNotFoundException $e)
        {
            return response()->json([
                "message" => "Failed delete Rocket",
                "error" => $e->getMessage()
            ]);

        }
    }
}
