<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mamul extends Model
{
    use HasFactory;

    protected $connection = 'sqlAkyazi';
    
    // Veritabanı tablosu adı
    protected $table = 'mamuller';
}