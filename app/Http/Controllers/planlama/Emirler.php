<?php

namespace App\Http\Controllers\planlama;

use App\Http\Controllers\Controller;
use App\Models\Emir;
use App\Models\StokHrkt;
use App\Models\User;
use App\Models\Mamul;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

use function Laravel\Prompts\search;

class Emirler extends Controller
{
  public function getData()
  {
    $data = DB::table('OFTV_01_EMIRLERIS')->orderBy('URETIMSIRA', 'asc')->get();
    $toplam = $data->count();

    return response()->json([
      'data' => $data,
      'toplam' => $toplam
    ], 200);
  }

  public function getVeri()
  {
    $istasyon = DB::table('OFTT_01_ISTASYONLAR')->select('ID', 'TANIM')->distinct()->get();

    $kod = DB::table('OFTT_01_MAMULLER')
      ->select(
        'OFTT_01_MAMULLER.ID',
        'OFTT_01_MAMULLER.KOD',
        'OFTT_01_MAMULLER.TANIM',
        'OFTT_01_MAMULLER.MMLGRPKOD',
        'OFTT_01_MAMULLER.OZELLIKKOD1',
        'OFTT_01_MAMULLER.OZELLIKKOD2',
        'OFTT_01_MAMULLER.OZELLIKKOD3',
        'OFTT_01_MAMULLER.ISTASYONID'
      )->distinct()
      ->get();

    $mamulOz1 = DB::table('OFTT_01_MAMULLER')
      ->select(
        'OFTT_01_MAMULLER.OZELLIKKOD1',
        'OFTT_01_MAMULLER.ISTASYONID'
      )->distinct()
      ->get();

    $mamulGrup = DB::table('OFTT_01_MAMULLER')
      ->select(
        'OFTT_01_MAMULLER.MMLGRPKOD',
        'OFTT_01_MAMULLER.OZELLIKKOD1',
        'OFTT_01_MAMULLER.ISTASYONID'
      )->distinct()
      ->get();

    $mamulOz2 = DB::table('OFTT_01_MAMULLER')
      ->select(
        'OFTT_01_MAMULLER.MMLGRPKOD',
        'OFTT_01_MAMULLER.OZELLIKKOD1',
        'OFTT_01_MAMULLER.OZELLIKKOD2',
        'OFTT_01_MAMULLER.ISTASYONID'
      )->distinct()
      ->get();

    $mamulOz3 = DB::table('OFTT_01_MAMULLER')
      ->select(
        'OFTT_01_MAMULLER.MMLGRPKOD',
        'OFTT_01_MAMULLER.OZELLIKKOD1',
        'OFTT_01_MAMULLER.OZELLIKKOD2',
        'OFTT_01_MAMULLER.OZELLIKKOD3',
        'OFTT_01_MAMULLER.ISTASYONID'
      )->distinct()
      ->get();




    return response()->json([
      'istasyon' => $istasyon,
      'kod' => $kod,
      'mamulGrup' => $mamulGrup,
      'mamulOz1' => $mamulOz1,
      'mamulOz2' => $mamulOz2,
      'mamulOz3' => $mamulOz3,
      'message' => 'Veriler başarıyla alındı',
      'success' => true,
    ]);
  }

  public function update(Request $request, $id)
  {
    try {
      $operator = $request->header('userID');
      $isAktif = $request->input('AKTIF') ? 1 : 0;

      if (!$operator) {
        return response()->json(['message' => 'Kullanıcı bilgisi eksik'], 400);
      }

      $data = Emir::find($id);

      if (!$data) {
        return response()->json(['message' => 'Kayıt bulunamadı'], 404);
      }

      $data->update([
        'ISTASYONID' => $request->ISTASYONID,
        'URUNID' => $request->URUNID,
        'PLANLANANMIKTAR' => $request->PLANLANANMIKTAR,
        'DURUM' => $request->DURUM,
        'DUZENLEYENID' => $operator,
        'DUZENTARIH' =>  now(),
        'GRCBITIS' => $request->DURUM == 'Üretildi' ?  now()  : null,
        'NOTLAR' =>  $request->NOTLAR,
        'AKTIF' => intval($isAktif),
      ]);

      return response()->json(['message' => 'Kayıt başarııl'], 200);
    } catch (\Exception $e) {
      return response()->json(['message' => 'Sunucuda bir hata oluştu'], 500);
    }
  }

  public function getEmirler()
  {
    // $emirler = DB::table('OFTV_01_EMIRLERIS')->get();

    $anaGrup = DB::table('OFTT_01_MAMULLER')->select('MMLGRPKOD')->distinct()->get();
    $stGrup = DB::table('OFTT_01_MAMULLER')->select('STGRPKOD')->distinct()->get();
    $istasyon = DB::table('OFTT_01_ISTASYONLAR')->select('ID', 'TANIM')->distinct()->get();

    return view('content.planlama.emirleris', compact('anaGrup', 'stGrup', 'istasyon'));
  }

  public function KayitSil(Request $request, $id)
  {

    try {
      $userName = $request->header('X-User-Name');

      if (!$userName) {
        return response()->json(['message' => 'Kullanıcı bilgisi eksik'], 400);
      }

      $operator = User::where('name', $userName)->select('id')->first();

      $data = Emir::find($id);

      if (!$data) {
        return response()->json(['message' => 'Kayıt bulunamadı'], 404);
      }

      $data->update([
        'SILENID' => $operator->id,
        'SILINDI' => 1,
        'SILINMETARIH' => now(),
      ]);

      return response()->json(['message' => 'Kayıt başarıyla silindi'], 200);
    } catch (\Exception $e) {
      return response()->json(['message' => 'Sunucuda bir hata oluştu'], 500);
    }
  }

  public function MamulAl($ISTKOD)
  {
    $mamul = DB::table('OFTT_01_MAMULLER')
      ->where('STGRPKOD', $ISTKOD)
      ->where('SILINDI', 0)
      ->select('KOD', 'TANIM', 'MMLGRPKOD', 'STGRPKOD')
      ->distinct()
      ->get();

    return response()->json($mamul);
  }

  public function index(Request $request)
  {
    $columns = [
      1 => 'ID',
      2 => 'ISTASYONID',
      3 => 'URUNID',
      4 => 'KOD',
      5 => 'TANIM',
      6 => 'MMLGRPKOD',
      7 => 'PLANLANANMIKTAR',
      8 => 'URETIMMIKTAR',
      9 => 'URETIMSIRA',
      10 => 'DURUM',
      11 => 'NOTLAR',
      12 => 'PROSESNOT',
      13 => 'KAYITTARIH',
      14 => 'ISTKOD',
      15 => 'ISTTANIM',
      16 => 'AKTIF',
    ];

    $limit = $request->input('length');
    $start = $request->input('start');
    $order = $columns[$request->input('order.0.column')];
    $dir = $request->input('order.0.dir');

    $search = [];
    $istasyon = $request->input('grupSecimi');

    if (empty($request->input('search.value'))) {
      $emirler = DB::table('OFTV_01_EMIRLERIS')->where('ISTTANIM',  'LIKE', "%{$istasyon}%")->orderBy('URETIMSIRA', 'asc')->get();
    } else {
      $search = $request->input('search.value');

      $emirler = DB::table('OFTV_01_EMIRLERIS')
        ->where(function ($query) use ($istasyon) {
          $query->where('ISTTANIM',  'LIKE', "%{$istasyon}%"); // ISTKOD alanı için mutlak eşleşme
        })
        ->where(function ($query) use ($search) {
          $query->where('KOD', 'LIKE', "%{$search}%")
            ->orWhere('TANIM', 'LIKE', "%{$search}%")
            ->orWhere('ISTTANIM', 'LIKE', "%{$search}%")
            ->orWhere('MMLGRPKOD', 'LIKE', "%{$search}%")
            ->orWhere('DURUM', 'LIKE', "%{$search}%")
            ->orWhere('KAYITTARIH', 'LIKE', "%{$search}%");
        })
        ->orderBy('URETIMSIRA', 'asc')
        ->get();

      // $emirler = DB::table('OFTV_01_EMIRLERIS')
      //   ->where('KOD', 'LIKE', "%{$search}%")
      //   ->orWhere('TANIM', 'LIKE', "%{$search}%")
      //   ->orWhere('ISTTANIM', 'LIKE', "%{$search}%")
      //   ->orWhere('MMLGRPKOD', 'LIKE', "%{$search}%")
      //   ->orWhere('DURUM', 'LIKE', "%{$search}%")
      //   ->orWhere('KAYITTARIH', 'LIKE', "%{$search}%")
      //   ->orWhere('ISTKOD', 'LIKE', "%{$istasyon}%")
      //   ->orderBy('URETIMSIRA', 'asc')
      //   ->get();
    }

    $data = [];

    if (!empty($emirler)) {
      // providing a dummy id instead of database ids
      $ids = $start;

      foreach ($emirler as $klt) {
        $nestedData['fake_id'] = ++$ids;
        $nestedData['URETIMSIRA'] = $klt->URETIMSIRA;
        $nestedData['ID'] = $klt->ID;
        $nestedData['ISTASYONID'] = $klt->ISTASYONID;
        $nestedData['URUNID'] = $klt->URUNID;
        $nestedData['KOD'] = $klt->KOD;
        $nestedData['TANIM'] = $klt->TANIM;
        $nestedData['MMLGRPKOD'] = $klt->MMLGRPKOD;
        $nestedData['PLANLANANMIKTAR'] = number_format($klt->PLANLANANMIKTAR, 0, ',', '.');
        $nestedData['URETIMMIKTAR'] = number_format($klt->URETIMMIKTAR, 0, ',', '.');
        $nestedData['PROGRESS'] = number_format(($klt->URETIMMIKTAR / $klt->PLANLANANMIKTAR) * 100, 0, ',', '.');
        $nestedData['DURUM'] = $klt->DURUM;
        $nestedData['NOTLAR'] = $klt->NOTLAR;
        $nestedData['PROSESNOT'] = $klt->PROSESNOT;
        $nestedData['KAYITTARIH'] = $klt->KAYITTARIH;
        $nestedData['ISTKOD'] = $klt->ISTKOD;
        $nestedData['ISTTANIM'] = $klt->ISTTANIM;
        $nestedData['AKTIF'] = $klt->AKTIF;

        $data[] = $nestedData;
      }
    }

    if ($data) {
      return response()->json([
        'draw' => intval($request->input('draw')),
        'code' => 200,
        'data' => $data,
      ]);
    } else {
      return response()->json([
        'message' => 'Internal Server Error',
        'code' => 500,
        'data' => [],
      ]);
    }
  }

  public function store(Request $request)
  {
    try {
      $userName = $request->header('X-User-Name');

      if (!$userName) {
        return response()->json(['message' => 'Kullanıcı bilgisi eksik'], 400);
      }

      $userID = User::where('name', $userName)->select('id')->first();

      $validatedData = $request->validate([
        'ISTASYONID' => 'required|integer',
        'PLANLANANMIKTAR' => 'required|numeric',
        'DURUM' => 'required|string',
        'URUNID' => 'required|integer',
      ]);


      if (!$userID) {
        return response()->json(['message' => 'Kullanıcı bilgisi eksik'], 400);
      }


      // $currentDate = Carbon::now()->format('Y-m-d');
      // $currentTime = Carbon::now()->format('H:i:s');


      DB::table('OFTT_01_EMIRLERIS')
        ->insert(array_merge($validatedData, [
          'OLUSTURANID' => $userID->id,
          'NOTLAR' =>  $request->NOTLAR,
          'URETIMSIRA' => 999,
          'KAYITTARIH' => now(),
          'AKTIF' => intval($request->AKTIF),
        ]));

      return response()->json([
        'message' => 'Veri başarıyla eklendi',
      ], 201);
    } catch (\Exception $e) {
      return response()->json(['message' => 'Sunucuda bir hata oluştu'], 500);
    }
  }

  public function show(string $id)
  {
    //
  }

  public function edit(string $id)
  {
    $emirler1 = DB::table('OFTV_01_EMIRLERIS')->where('ID', $id)->get();
    return response()->json($emirler1);
  }

  public function destroy(string $id)
  {
    $kayitid = (int)$id;
    $operator = User::where('name', Auth::user()->name)->select('id')->first();

    if ($operator) {
      $operatorID = $operator->id;
    } else {
      $operatorID = null;
    }

    $emir = Emir::updateOrCreate(
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
      $emirVeriler = DB::table('OFTV_01_EMIRLERIS')->get();
    } else {

      $emirVeriler = DB::table('OFTV_01_EMIRLERIS')
        ->where('KOD', 'LIKE', "%{$search}%")
        ->orWhere('TANIM', 'LIKE', "%{$search}%")
        ->orWhere('ISTTANIM', 'LIKE', "%{$search}%")
        ->orWhere('MMLGRPKOD', 'LIKE', "%{$search}%")
        ->orWhere('DURUM', 'LIKE', "%{$search}%")
        ->orWhere('KAYITTARIH', 'LIKE', "%{$search}%")
        ->orWhere('ISTKOD', 'LIKE', "%{$search}%")
        ->get();
    }

    return response()->json($emirVeriler);
  }

  public function yukariAt(Request $request)
  {
    $id = $request->input('id');

    // Geçerli kaydı bul
    $currentRecord = Emir::where('SILINDI', false)->find($id);

    if (!$currentRecord) {
      return response()->json(['success' => false, 'message' => 'Kayıt bulunamadı.']);
    }

    // Önceki kaydı bul
    $previousRecord = Emir::where('URETIMSIRA', '<', $currentRecord->URETIMSIRA)
      ->where('ISTASYONID',  $currentRecord->ISTASYONID)
      ->orderBy('URETIMSIRA', 'desc')
      ->first();

    if (!$previousRecord) {
      return response()->json(['success' => false, 'message' => 'Önceki kayıt bulunamadı.']);
    }

    // Sıra numaralarını değiştir
    $currentSira = $currentRecord->URETIMSIRA;
    $previousSira = $previousRecord->URETIMSIRA;

    $currentRecord->URETIMSIRA = $previousSira;
    $previousRecord->URETIMSIRA = $currentSira;

    // Veritabanını güncelle
    $currentRecord->save();
    $previousRecord->save();

    return response()->json(['success' => true]);
  }

  public function asagiAt(Request $request)
  {
    $id = $request->input('id');

    // Geçerli kaydı bul
    $currentRecord = Emir::where('SILINDI', false)->find($id);

    if (!$currentRecord) {
      return response()->json(['success' => false, 'message' => 'Kayıt bulunamadı.']);
    }

    // Önceki kaydı bul
    $nextRecord = Emir::where('URETIMSIRA', '>', $currentRecord->URETIMSIRA)
      ->where('ISTASYONID', $currentRecord->ISTASYONID)
      ->orderBy('URETIMSIRA', 'asc')
      ->first();

    if (!$nextRecord) {
      return response()->json(['success' => false, 'message' => 'Sonraki kayıt bulunamadı.']);
    }

    // Sıra numaralarını değiştirin
    $currentSira = $currentRecord->URETIMSIRA;
    $currentRecord->URETIMSIRA = $nextRecord->URETIMSIRA;
    $nextRecord->URETIMSIRA = $currentSira;

    // Değişiklikleri kaydedin
    $currentRecord->save();
    $nextRecord->save();

    return response()->json(['success' => true]);
  }

  public function yenidenSirala()
  {
    // Tablodaki tüm kayıtları 'sira' sütununa göre artan sırayla al
    $records = Emir::where('SILINDI', false)->orderBy('URETIMSIRA', 'asc')->get();

    // Yeni sıra numarasını başlat
    $newSira = 10;

    // Her bir kaydı döngü ile yeniden sıralama
    foreach ($records as $record) {
      // Mevcut kaydın sıra numarasını güncelle
      $record->URETIMSIRA = $newSira;
      $record->save();

      // Sıra numarasını bir sonraki adım için 10 artır
      $newSira += 10;
    }

    return response()->json(['success' => true]);
  }

  public function uretimKaydet(Request $request)
  {
    $kayitid = (int)$request->input('kayitID');
    $operatorId = $request->input('userId');
    $miktar = (int)$request->input('miktar');

    try {
      $emir = Emir::find($kayitid);
      $emir->URETIMMIKTAR += $miktar;
      $emir->save();


      $mml = Mamul::find($emir->URUNID);
      $mml->MEVCUT += (int)$miktar;
      $mml->GIREN += (int)$miktar;
      $mml->save();


      $hrkt = StokHrkt::create(
        [
          'TUR' => 'Üretimden Giriş',
          'STOKID' => $emir->URUNID,
          'ISTASYONID' => $emir->ISTASYONID,
          'ISEMRIID' => $kayitid,
          'MIKTAR' => $miktar,
          'OLUSTURANID' => $operatorId,
          'URETIMTARIH' =>  now(), //$request->tarih,
          'KAYITTARIH' =>  now(),
          'NOTLAR' =>  '', //$request->notlar,
        ]
      );
      return response()->json(['success' => true]);
    } catch (\Exception $e) {
      return response()->json(['success' => false, 'message' => $e->getMessage()]);
    }
  }
}