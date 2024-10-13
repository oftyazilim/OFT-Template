<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Post;

class PostPolicy
{
    public function view(User
    $user, Post $post)
    {
        return $user->hasRole('Admin');
    }

    public function update(User $user, Post $post)
    {
        return $user->hasPermission('edit-post');
    }
}
