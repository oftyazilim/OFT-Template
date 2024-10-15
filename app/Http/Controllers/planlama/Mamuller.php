<?php

namespace App\Http\Controllers\planlama;

use App\Http\Controllers\Controller;
use App\Models\Mamul;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class Mamuller extends Controller
{
  public function getData()
  {
    $data = Mamul::where('SILINDI', false)->get();
    $toplam = $data->count('ID');

    return response()->json([
      'data' => $data,
      'toplam' => $toplam
    ], 200);
  }

  public function getVeri()
  {
    $istasyon = DB::table('OFTT_01_ISTASYONLAR')->select('ID', 'TANIM')->distinct()->get();
    $mamulOz1 = DB::table('OFTT_01_MAMULLER')->select('OZELLIKKOD1')->distinct()->get();
    $mamulGrup = DB::table('OFTT_01_MAMULLER')->select('MMLGRPKOD')->distinct()->get();
    $mamulSinif = DB::table('OFTT_01_MAMULLER')->select('SINIF')->distinct()->get();
    $mamulOz2 = DB::table('OFTT_01_MAMULLER')->select('OZELLIKKOD2')->distinct()->get();
    $mamulOz3 = DB::table('OFTT_01_MAMULLER')->select('OZELLIKKOD3')->distinct()->get();

    return response()->json([
      'istasyon' => $istasyon,
      'mamulGrup' => $mamulGrup,
      'mamulSinif' => $mamulSinif,
      'mamulOz1' => $mamulOz1,
      'mamulOz2' => $mamulOz2,
      'mamulOz3' => $mamulOz3,
      'message' => 'Veriler başarıyla alındı',
      'success' => true,
    ]);
  }










  public function store(Request $request)
  {
    Log::info($request);
    $kayitid = (int)$request->ID;
    $isAktif = $request->AKTIF;
    $operatorID = $request->header('userID');
    $istasyonID = DB::table('OFTT_01_ISTASYONLAR')->where('TANIM', $request->STGRPKOD)->select('ID')->first();
    $mamul = Mamul::updateOrCreate(
      ['ID' => $kayitid], // Güncelleme için eşleştirilecek koşul
      [
        'KOD' => $request->KOD,
        'TANIM' => $request->TANIM,
        'STGRPKOD' => $request->STGRPKOD,
        'MMLGRPKOD' => $request->MMLGRPKOD,
        'SINIF' => $request->SINIF,
        'OZELLIKKOD1' => $request->OZELLIKKOD1,
        'OZELLIKKOD2' => $request->OZELLIKKOD2,
        'OZELLIKKOD3' => $request->OZELLIKKOD3,
        'ISTASYONID' => $istasyonID->ID,
        'AKTIF' => $isAktif,
        'DUZENLEYENID' => $operatorID, // Örnek olarak operatör ID burada sabit
        'SONDRMTARIH' => now()
      ]
    );

    return response()->json($mamul->wasRecentlyCreated ? 'Created' : 'Updated');
  }

  public function edit(string $id)
  {
    $yMamuller = Mamul::distinct()->where('ID', $id)->get();
    return response()->json($yMamuller);
  }

  public function kayitSil(Request $request, string $id)
  {
    $kayitid = (int)$id;
    $operatorID = $request->header('userID');
    $mamul = Mamul::updateOrCreate(
      ['ID' => $kayitid],
      [
        'SILINDI' => 1,
        'SILENID' => $operatorID,
        'SILINMETARIH' => now(),
      ]
    );

    return response()->json($kayitid);
  }

  public function exportExcel(Request $request)
  {
    $search = $request->input('search');
    if (empty($search)) {
      $mamulVeriler = Mamul::where('SILINDI', false)->get();
    } else {
      $mamulVeriler = Mamul::where('SILINDI', false)
        ->where('KOD', 'LIKE', "%{$search}%")
        ->orWhere('TANIM', 'LIKE', "%{$search}%")
        ->orWhere('STGRPKOD', 'LIKE', "%{$search}%")
        ->orWhere('MMLGRPKOD', 'LIKE', "%{$search}%")
        ->orWhere('SINIF', 'LIKE', "%{$search}%")
        ->get();
    }

    // JSON formatında döndürün
    return response()->json($mamulVeriler);
  }
}
