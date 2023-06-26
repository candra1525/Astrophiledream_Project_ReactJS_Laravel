<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'gender',
        'phoneNumber',
        'role',
        'image',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    protected $table = "users";

    public function favoriteAstronaut()
    {
        return $this->belongsToMany(FavAstronaut::class, 'favoriteastronauts');
    }
    public function favoritePlanet()
    {
        return $this->belongsToMany(FavPlanet::class, 'favoriteplanets');
    }
    public function favoriteRocket()
    {
        return $this->belongsToMany(FavRocket::class, 'favoriterockets');
    }
    public function favoriteStar()
    {
        return $this->belongsToMany(FavStar::class, 'favoritestars');
    }



}
