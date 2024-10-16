<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mamul extends Model
{
  use HasFactory;

  protected $table = 'OFTT_01_MAMULLER'; // Tablo ismini belirtiyoruz

  protected $primaryKey = 'ID'; // Eğer birincil anahtar 'ID' değilse, bunu belirtmelisiniz.

  protected $fillable = [
    'KOD',
    'TANIM',
    'STGRPKOD',
    'MMLGRPKOD',
    'AKTIF',
    'DUZENLEYENID',
    'SINIF',
    'SONDRMTARIH',
    'OLUSTURMATARIH',
    'MIKTAR',
    'OZELLIKKOD1',
    'OZELLIKKOD2',
    'OZELLIKKOD3',
    'ISTASYONID',
    'GIREN',
    'CIKAN',
    'SILINDI',
    'SILENID',
    'SILINMETARIH',
  ];

  public $timestamps = false; // Eğer tablonuzda created_at, updated_at gibi timestamp alanları yoksa bunu false yapmalısınız.

}
