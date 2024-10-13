<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
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
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function getAbilityRules()
    {
        // Kullanıcının yetki kurallarını alacağınız bir yapı kurabilirsiniz
        // Örneğin, yetkileri bir roles tablosundan alıyorsanız, aşağıdaki gibi olabilir:

        // Varsayılan olarak boş bir array döndürüyoruz
        $abilities = [];

        // Eğer kullanıcıya atanmış roller varsa, bu rollerin yetkilerini çekebilirsiniz
        if ($this->roles()->exists()) {
            $abilities = $this->roles->flatMap(function ($role) {
                return $role->permissions->pluck('name'); // `permissions` bir many-to-many ilişki olabilir
            })->unique()->toArray();
        }

        return $abilities;
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class, 'role_user');
    }

    public function hasPermission($permission)
    {
        return $this->roles->flatMap(function ($role) {
            return $role->permissions;
        })->contains('name', $permission);
    }

    public function viewPost(User $user)
    {
        return $user->hasRole('Admin');
    }
}
