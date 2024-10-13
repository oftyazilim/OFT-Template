<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\planlama\Emirler;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/data', [Emirler::class, 'getData']);
Route::get('/veri', [Emirler::class, 'getVeri']);
Route::get('/mamul-grubu', [Emirler::class, 'getFilteredMamulGrubu']);
Route::get('/ozellik1', [Emirler::class, 'getFilteredOzellik1']);
Route::get('/ozellik2', [Emirler::class, 'getFilteredOzellik2']);
Route::get('/ozellik3', [Emirler::class, 'getFilteredOzellik3']);
Route::get('/filtered-mamul', [Emirler::class, 'getFilteredMamul']);
Route::get('/mamul-data', [Emirler::class, 'getMamul']);
Route::get('/mamulden', [Emirler::class, 'getMamulden']);
Route::put('/datasil/{id}', [Emirler::class, 'kayitSil']);  // Silme işlemi
Route::put('/data/{id}', [Emirler::class, 'update']);

Route::post('/data', [Emirler::class, 'store']);  // Ekleme işlemi

Route::group(['prefix' => 'auth'], function () {
  Route::post('login', [AuthController::class, 'login']);
  Route::post('register', [AuthController::class, 'register']);

  Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('logout', [AuthController::class, 'logout']);
    Route::get('user', [AuthController::class, 'user']);
  });
});


Route::get('/user', function (Request $request) {
  return $request->user();
})->middleware('auth:sanctum');


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//   return response()->json($request->user());
// });
