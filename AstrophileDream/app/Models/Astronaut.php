<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\FavAstronaut;

class Astronaut extends Model
{
    use HasFactory;
    protected $table = "astronauts";

    protected $fillable = [
        'firstName',
        'lastName',
        'position',
        'password',
        'rank',
        'timeInSpace',
        'numberOfMissions',
        'missions',
        'education',
        'yearsActive',
        'status',
        'astronautImage',
        'astronautDescription',
    ];
    protected $primaryKey = 'astronautId';

    // public function search($searchValue)
    // {
    //     return $this->where('astronauts', 'LIKE', "%$searchValue%")->get();
    // }


    public function favoriteUser(){
        return $this ->belongsToMany(FavAstronaut::class, 'favoriteastronauts');
    }
}
