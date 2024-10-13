<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    // Veritabanı tablosu adı
    protected $table = 'posts';

    // Doldurulabilir alanlar
    protected $fillable = ['title', 'content', 'user_id'];

    // İlişkiler
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
