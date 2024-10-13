<?php

namespace App\Http\Controllers;

use App\Models\StokKalite2;
use Illuminate\Support\Facades\Auth;
use App\Models\Mamul;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

class VeriCekController extends Controller
{
  public function getData(Request $request)
  {
    $data = DB::table('OFTV_01_EMIRLERIS')->orderBy('URETIMSIRA', 'asc')->get();
    $toplam = $data->count('ID');

    return response()->json([
      'data' => $data,
      'toplam' => $toplam
    ], 200);
  }

  public function sayimSifirla($conn)
  {
    DB::connection($conn)
      ->table('mamulstok2')
      ->where('silindi', false)
      ->where('sevk_edildi', false)
      ->update(['sayildi' => 0]);

    return response()->json(['message' => 'Veri başarıyla güncellendi'], 200);
  }

  public function sayilmayanlariSil(Request $request, $conn)
  {
    $userName = $request->query('userName');
    
    DB::connection($conn)
      ->table('mamulstok2')
      ->where('silindi', false)
      ->where('sevk_edildi', false)
      ->where('sayildi', false)
      ->update([
        'silen' => $userName.' (s)',
        'silindi' => 1,
        'silindi_at' => now(),
      ]);
         
    return response()->json(['message' => 'Veri başarıyla güncellendi'], 200);
  }

  public function update(Request $request, $id)
  {
    $conn = $request->header('conn');

    $data = DB::connection($conn)
      ->table('mamulstok2')
      ->where('id', $id)
      ->first();

    if (!$data) {
      return response()->json(['message' => $data . 'Veri bulunamadı'], 404);
    }

    $userName = $request->header('X-User-Name');

    if (!$userName) {
      return response()->json(['message' => 'Kullanıcı bilgisi eksik'], 400);
    }

    $isBasildi = $request->input('basildi') ? 1 : 0;
    $operatorName = $userName;

    DB::connection($conn)
      ->table('mamulstok2')
      ->where('id', $id)
      ->update([
        'mamul' => $request->input('mamul'),
        'nevi' => $request->input('nevi'),
        'hat' => $request->input('hat'),
        'boy' => $request->input('boy'),
        'adet2' => $request->input('adet2'),
        'kantarkg' => $request->input('kantarkg'),
        'basildi' => $isBasildi,
        'operator' => $operatorName,
      ]);

    return response()->json(['message' => 'Veri başarıyla güncellendi'], 200);
  }

  // Yeni veri ekleme
  public function store(Request $request)
  {
    $conn = $request->header('conn');

    $validatedData = $request->validate([
      'mamul' => 'required|string|max:255',
      'boy' => 'required|integer',
      'kantarkg' => 'required|numeric',
      'adet2' => 'required|integer',
      'hat' => 'required|string',
      'nevi' => 'required|string',
    ]);

    $userName = $request->header('X-User-Name');

    if (!$userName) {
      return response()->json(['message' => 'Kullanıcı bilgisi eksik'], 400);
    }

    $isBasildi = $request->input('basildi') ? 1 : 0;

    $currentDate = Carbon::now()->format('Y-m-d');
    $currentTime = Carbon::now()->format('H:i:s');
    $operatorName = $userName;
    $paketno = $this->paketNoAl($request->hat, $conn);

    $mamul = DB::connection($conn)
      ->table('mamuller')
      ->select('mamulkodu', 'minkg', 'kalinlik')
      ->where('mamul', $request->mamul)
      ->where('nevi', $request->nevi)
      ->first();

    DB::connection($conn)
      ->table('mamulstok2')
      ->insert(array_merge($validatedData, [
        'basildi' => $isBasildi,
        'tarih' => $currentDate,
        'saat' => $currentTime,
        'operator' => $operatorName,
        'pkno' => $paketno,
        'adet' => $request->adet2,
        'mamulkodu' => $mamul->mamulkodu,
        'kg' => $request->kantarkg,
        'kalinlik' => $mamul->kalinlik,
        'created_at' => now(),
        'updated_at' => now(),
      ]));

    return response()->json([
      'message' => 'Veri başarıyla eklendi',
    ], 201);
  }

  public function sayimKayit(Request $request)
  {
    $conn = $request->con;
    $barkod = $request->barkod;
    
    $data = DB::connection($conn)
      ->table('mamulstok2')
      ->where('pkno', $barkod)
      ->first();

    if (!$data) {
      return response()->json(['message' => $data . 'Veri bulunamadı'], 404);
    }

    DB::connection($conn)
      ->table('mamulstok2')
      ->where('pkno', $barkod)
      ->update([
        'sayildi' => 1,
      ]);

    return response()->json(['message' => 'Veri başarıyla güncellendi'], 200);

  }

  public function KayitSil(Request $request, $id)
  {
    try {
      $userName = $request->header('X-User-Name');

      if (!$userName) {
        return response()->json(['message' => 'Kullanıcı bilgisi eksik'], 400);
      }

      $data = StokKalite2::find($id);

      if (!$data) {
        return response()->json(['message' => 'Kayıt bulunamadı'], 404);
      }

      $data->update([
        'silen' => $userName,
        'silindi' => 1,
        'silindi_at' => now(),
      ]);

      return response()->json(['message' => 'Kayıt başarıyla silindi'], 200);
    } catch (\Exception $e) {
      return response()->json(['message' => 'Sunucuda bir hata oluştu'], 500);
    }
  }

  public function veriAl($conn)
  {
    $mamul = DB::connection($conn)
      ->table('mamuller')
      ->distinct('mamul')
      ->select('mamul')
      ->where('tip', 'Boru')
      ->orWhere('tip', 'Profil')
      ->orderBy('mamul')
      ->get();
    $hat = DB::connection($conn)
      ->table('caldurum')
      ->select('hat')
      ->distinct('hat')
      ->orderBy('hat')
      ->get();

    $nevi = DB::connection($conn)
      ->table('mamuller')
      ->distinct('nevi')
      ->select('nevi')
      ->where('tip', 'Boru')
      ->orWhere('tip', 'Profil')
      ->orderBy('nevi')
      ->get();


    return response()->json([
      'mamul' => $mamul,
      'hat' => $hat,
      'nevi' => $nevi,
      'message' => 'Veriler başarıyla alındı',
      'success' => true,
    ]);
  }
  
  public function sayimAl($con)
  {
    Log::info($con);
    
    $sayilanlar = DB::connection($con)
    ->table('mamulstok2')
    ->where('silindi', false)
    ->where('sevk_edildi', false)
    ->where('sayildi', true)
    ->count('id');
      
    $sayilmayanlar = DB::connection($con)
    ->table('mamulstok2')
    ->where('silindi', false)
    ->where('sevk_edildi', false)
    ->where('sayildi', false)
    ->count('id');

    return response()->json([
      'sayilanlar' => $sayilanlar,
      'sayilmayanlar' => $sayilmayanlar,
    ]);
  }

  public function paketNoAl(string $hat, string $conn)
  {
    $pkno = 1;
    $tarih = now();

    if (substr($hat, 1, 1) === "A") {
      switch (substr($hat, 3, 1)) {
        case "1":
          $pkno = 1001;
          break;
        case "2":
          $pkno = 2001;
          break;
        case "3":
          $pkno = 3001;
          break;
        case "4":
          $pkno = 4001;
          break;
      }
    } else {
      switch (substr($hat, 3, 1)) {
        case "1":
          $pkno = 5001;
          break;
        case "2":
          $pkno = 6001;
          break;
        case "3":
          $pkno = 7001;
          break;
        case "4":
          $pkno = 8001;
          break;
      }
    }

    DB::connection($conn)->table('paketno')
      ->where('hat', $hat)
      ->increment('paketno', 1);

    $paketNoData = DB::connection($conn)->table('paketno')
      ->where('hat', $hat)
      ->select('tarih', 'paketno')
      ->first();

    if ($paketNoData) {
      // if (!empty($paketNoData->tarih)) {
      //   try {
      //     // Tarih formatını belirleyin
      //     $tarih =  $tarih = Carbon::createFromFormat('M d Y h:i:s:A', $paketNoData->tarih);
      //   } catch (\Exception $e) {
      //     Log::error('Tarih formatı hatalı: ' . $paketNoData->tarih);
      //     return response()->json(['error' => 'Tarih formatı hatalı'], 500);
      //   }
      // } else {
      //   Log::warning('Tarih boş veya null.');
      //   return response()->json(['error' => 'Tarih bilgisi bulunamadı'], 500);
      // }

      $pkno = $paketNoData->paketno;
    } else {
      return response()->json(['error' => 'Paket bilgisi bulunamadı'], 404);
    }


    if (strtotime($tarih) < strtotime(Carbon::create(Carbon::now()->year, Carbon::now()->month, Carbon::now()->day))) {
      $tarih = Carbon::now();
      if (substr($hat, 1, 1) === "A") {
        switch (substr($hat, 3, 1)) {
          case "1":
            $pkno = 1001;
            break;
          case "2":
            $pkno = 2001;
            break;
          case "3":
            $pkno = 3001;
            break;
          case "4":
            $pkno = 4001;
            break;
        }
      } else {
        switch (substr($hat, 3, 1)) {
          case "1":
            $pkno = 5001;
            break;
          case "2":
            $pkno = 6001;
            break;
          case "3":
            $pkno = 7001;
            break;
          case "4":
            $pkno = 8001;
            break;
        }
      }


      DB::connection($conn)->table('paketno')
        ->where('hat', $hat)
        ->update([
          'tarih' => $tarih,
          'paketno' => $pkno
        ]);
    }

    $paketno = sprintf('%02d %02d %02d %04d', $tarih->year % 100, $tarih->month, $tarih->day, $pkno);

    return $paketno;
  }
}
