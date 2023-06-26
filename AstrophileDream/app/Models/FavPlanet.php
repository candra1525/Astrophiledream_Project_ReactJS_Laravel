<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Planet;
use App\Models\User;

class FavPlanet extends Model
{
    Use HasFactory;

    protected $table = 'favoriteplanets';

    protected $fillable = ['userId','planetId'];
    
    function FavoritePlanet(){
        return $this->belongsToMany(User::class,Planet::class);
    }
}
