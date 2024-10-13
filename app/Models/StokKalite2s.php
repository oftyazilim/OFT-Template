<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StokKalite2s extends Model
{
  protected $connection = 'sqlSekerpinar';

  protected $table = 'mamulstok2';
  protected $primaryKey = 'id';

  // protected $casts = [
  //     'tarih' => 'date',
  // ];

  // Doldurulabilir alanlar
  protected $fillable = [
    'mamul',
    'boy',
    'kantarkg',
    'adet2',
    'adet',
    'kg',
    'nevi',
    'pkno',
    'hat',
    'tarih',
    'saat',
    'operator',
    'mamulkodu',
    'basildi',
    'kalinlik',
    'silindi',
    'silindi_at',
    'silen'
  ];
}