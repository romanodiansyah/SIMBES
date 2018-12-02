<?php

use Illuminate\Http\Request;

//admin
Route::post('auth/admin/register','AuthController@register');
Route::post('auth/admin/login','AuthController@loginAdmin');
Route::get('admins', 'AdminController@admins');

Route::group(['middleware' => ['auth:admin-api']], function(){
    Route::get('admin/beranda', 'AdminController@home');
    Route::get('admin/list/student','AdminController@listStudent');
    Route::post('admin/create/student', 'AuthController@createStudent');
    Route::put('admin/update/student/{student}','AdminController@updateStudent');
});

// STUDENT

Route::post('auth/login','AuthController@loginStudent');
Route::group(['middleware' => ['auth:student-api']], function () {
    Route::get('beranda', 'StudentController@home');
    Route::put('update/profile/{profile}','StudentController@updateProfile');

});
Route::get('admins/beranda', 'AdminController@beranda')->middleware('auth:admin');

//beasiswa
Route::post('beasiswa/create', 'BeasiswaController@createBeasiswa');
Route::put('beasiswa/update', 'BeasiswaController@updateBeasiswa');
Route::delete('beasiswa/delete', 'BeasiswaController@deleteBeasiswa');
