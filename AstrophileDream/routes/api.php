<?php

use App\Http\Controllers\AstronautController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Favorites\FavAstronautController;
use App\Http\Controllers\Favorites\FavPlanetController;
use App\Http\Controllers\Favorites\FavRocketController;
use App\Http\Controllers\Favorites\FavStarController;
use App\Http\Controllers\PlanetController;
use App\Http\Controllers\RocketController;
use App\Http\Controllers\StarController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/uploadastronaut',[UploadController::class,'uploadAstronaut']);

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
});

// Astronaut
Route::get('/astronaut', [AstronautController::class, 'index']);
Route::post('/addastronaut', [AstronautController::class, 'store']);
Route::get('/showastronaut/{id}', [AstronautController::class, 'show']);
Route::post('/updateastronaut/{id}', [AstronautController::class, 'update']);
Route::delete('/deleteastronaut/{id}', [AstronautController::class, 'destroy']);
Route::get('/searchastronaut/{searchValue}', [AstronautController::class, 'search']);


// Rocket
Route::get('/rocket', [RocketController::class, 'index']);
Route::post('/addrocket', [RocketController::class, 'store']);
Route::get('/showrocket/{id}', [RocketController::class, 'show']);
Route::post('/updaterocket/{id}', [RocketController::class, 'update']);
Route::delete('/deleterocket/{id}', [RocketController::class, 'destroy']);


// Planet
Route::get('/planet', [PlanetController::class, 'index']);
Route::post('/addplanet', [PlanetController::class, 'store']);
Route::post('/updateplanet/{id}', [PlanetController::class, 'update']);
Route::get('/showplanet/{id}', [PlanetController::class, 'show']);
Route::delete('/deleteplanet/{id}', [PlanetController::class, 'destroy']);

// Star
Route::get('/star', [StarController::class, 'index']);
Route::post('/addstar', [StarController::class, 'store']);
Route::get('/showstar/{id}', [StarController::class, 'show']);
Route::post('/updatestar/{id}',[StarController::class, 'update']);
Route::delete('/deletestar/{id}', [StarController::class, 'destroy']);

// User Controller
Route::get('/users', [UserController::class, 'index']);
Route::post('/adduser', [UserController::class, 'store']);
Route::get('/showuser/{id}', [UserController::class, 'show']);
Route::post('/comparepassworduser/{id}', [UserController::class, 'comparePassword']);
Route::post('/updateuser/{id}', [UserController::class, 'update']);
Route::delete('/deleteuser/{id}', [UserController::class, 'destroy']);


// Favorite User
// Astronaut
Route::get('/userastronaut/{userId}',[FavAstronautController::class,'favoritesAstronaut']);
Route::get('/favastronaut', [FavAstronautController::class, 'index']);
Route::get('/showfavastronaut/{id}', [FavAstronautController::class, 'show']);
Route::post('/addfavastronaut', [FavAstronautController::class, 'store']);
Route::delete('/deletefavastronaut/{id}', [FavAstronautController::class, 'destroy']);

// Rocket
Route::get('/userrocket/{userId}',[FavRocketController::class,'favoritesRocket']);
Route::get('/favrocket', [FavRocketController::class, 'index']);
Route::get('/showfavrocket/{id}', [FavRocketController::class, 'show']);
Route::post('/addfavrocket', [FavRocketController::class, 'store']);
Route::delete('/deletefavrocket/{id}', [FavRocketController::class, 'destroy']);

// Planet
Route::get('/userplanet/{userId}',[FavPlanetController::class,'favoritesPlanet']);
Route::get('/favplanet', [FavPlanetController::class, 'index']);
Route::get('/showfavplanet/{id}', [FavPlanetController::class, 'show']);
Route::post('/addfavplanet', [FavPlanetController::class, 'store']);
Route::delete('/deletefavplanet/{id}', [FavPlanetController::class, 'destroy']);

// Star
Route::get('/userstar/{userId}',[FavStarController::class,'favoritesStar']);
Route::get('/favstar', [FavStarController::class, 'index']);
Route::get('/showfavstar/{id}', [FavStarController::class, 'show']);
Route::post('/addfavstar', [FavStarController::class, 'store']);
Route::delete('/deletefavstar/{id}', [FavStarController::class, 'destroy']);