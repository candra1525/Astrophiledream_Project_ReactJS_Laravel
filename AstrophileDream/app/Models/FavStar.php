<?php

namespace App\Models;

use App\Models\Star;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FavStar extends Model
{
    use HasFactory;

    protected $table = 'favoritestars';

    protected $fillable = ['userId','starId'];

    function FavoriteStar()
    {
        return $this->belongsToMany(User::class,Star::class);
    }
}
