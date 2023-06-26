<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\FavRocket;

class Rocket extends Model
{
    use HasFactory;

    protected $table = "rockets";
    protected $fillable = [
        'rocketName',
        'type',
        'placeOfOrigin',
        'rocketMissions',
        'usedBy',
        'manufracture',
        'launchSites',
        'totalLaunch',
        'firstFlight',
        'lastFlight',
        'status',
        'rocketImage',
        'rocketDescription',
    ];
    protected $primaryKey = 'rocketId';

    public function favoriteUser(){
        return $this ->belongsToMany(FavRocket::class, 'favoriterockets');
    }
}
