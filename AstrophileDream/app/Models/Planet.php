<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\FavPlanet;

class Planet extends Model
{
    use HasFactory;
    protected $table = "planets";

    protected $fillable = [
        'planetName',
        'planetAlternativeName',
        'planetSurfaceArea',
        'planetVolume',
        'planetMass',
        'planetGravity',
        'planetImage',
        'planetDescription',
    ];

    protected $guarded = [
        "id",
        "created_at",
        "update_at"
    ];
    protected $primaryKey = 'planetId';

    public function favoriteUser(){
        return $this ->belongsToMany(FavPlanet::class, 'favoriteplanets');
    }
}
