<?php

namespace App\Models;

use App\Models\Astronaut;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FavAstronaut extends Model
{
    use HasFactory;

    protected $table='favoriteastronauts';
    protected $fillable = ['userId','astronautId'];

    function FavoriteAstronaut()
    {
        return $this->belongsToMany(User::class,Astronaut::class);
    }
}
