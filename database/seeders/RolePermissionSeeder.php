<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Role;
use App\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    public function run()
    {
        // Tam yetkili rolü oluştur
        $adminRole = Role::create(['name' => 'Admin']);

        // Örnek izinleri oluştur
        $permissions = [
            'edit-post',
            'delete-post',
            'create-post',
            'view-post',
        ];

        foreach ($permissions as $permissionName) {
            $permission = Permission::create(['name' => $permissionName]);
            $adminRole->permissions()->attach($permission); // Rol ile izni ilişkilendir
        }

        // Ömer kullanıcısını bul
        $user = User::where('email', 'omer@gmail.com')->first();

        if ($user) {
            // Kullanıcıya Admin rolünü ata
            $user->roles()->attach($adminRole);
        } else {
            // Eğer Ömer kullanıcısı yoksa, yeni kullanıcı oluştur ve rol ata
            $user = User::create([
                'name' => 'Omer',
                'email' => 'omer@gmail.com',
                'password' => bcrypt('passomer'), // Şifreyi şifreleyin
            ]);

            $user->roles()->attach($adminRole);
        }
    }
}
