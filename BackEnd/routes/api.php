<?php

use Illuminate\Http\Request;

//admin
Route::post('auth/admin/register','AuthController@register');
Route::post('auth/admin/login','AuthController@loginAdmin');
Route::get('admins', 'AdminController@admins');
Route::get('admins/beranda', 'AdminController@beranda')->middleware('auth:admin');

//beasiswa
Route::post('beasiswa/create', 'BeasiswaController@createBeasiswa');
Route::put('beasiswa/update', 'BeasiswaController@updateBeasiswa');
Route::delete('beasiswa/delete', 'BeasiswaController@deleteBeasiswa');