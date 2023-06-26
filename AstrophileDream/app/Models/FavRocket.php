<?php

namespace App\Models;

use App\Models\Rocket;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FavRocket extends Model
{
    use HasFactory;

    protected $table = 'favoriterockets';
    protected $fillable=['userId','rocketId'];
    function FavoriteRocket()
    {
        return $this->belongsToMany(User::class,Rocket::class);
    }
}
