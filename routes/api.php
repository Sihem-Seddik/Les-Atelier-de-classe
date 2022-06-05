<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

use App\Http\Controllers\ClientController;
Route::middleware('api')->group(function () {
Route::resource('clients', ClientController::class);
});
use App\Http\Controllers\CategorieController;
Route::middleware('api')->group(function () {
Route::resource('categories', CategorieController::class);
});

use App\Http\Controllers\ScategorieController;

Route::middleware('api')->group(function () {
Route::resource('scategories',
ScategorieController::class);
});
Route::get('/scat/{idcat}',
[ScategorieController::class,'showSCategorieByCAT']);

use App\Http\Controllers\ArticleController;

Route::middleware('api')->group(function () {
Route::resource('articles', ArticleController::class);
});
use App\Http\Controllers\AuthController;
Route::group([
 'middleware' => 'api',
 'prefix' => 'auth'
], function ($router) {
 Route::post('/login', [AuthController::class, 'login']);
 Route::post('/register', [AuthController::class, 'register']);
 Route::post('/logout', [AuthController::class, 'logout']);
 Route::post('/refresh', [AuthController::class, 'refresh']);
 Route::get('/user-profile', [AuthController::class, 'userProfile']);
}); 

