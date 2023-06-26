<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\FavStar;

class Star extends Model
{
    use HasFactory;

    protected $table = "stars";

    protected $fillable = [
        'starName',
        'starConstellation',
        'starDeclination',
        'starArea',
        'starDegreeVisible',
        'starDateVisible',
        'starTimeVisible',
        'starImage',
        'starDescription',
    ];
    
    protected $primaryKey = 'starId';

    public function favoriteUser(){
        return $this ->belongsToMany(FavStar::class, 'favoritestars');
    }
}
