<?php

use Illuminate\Http\Request;

// ADMIN

Route::post('auth/admin/register','AuthController@register');
Route::post('auth/admin/login','AuthController@loginAdmin');

Route::get('admins', 'AdminController@admins');
Route::get('admin/beranda', 'AdminController@home')->middleware('auth:admin-api');

Route::post('admin/create/student', 'AuthController@createStudent')->middleware('auth:admin-api');

// STUDENT

Route::post('auth/login','AuthController@loginStudent');
Route::group(['middleware' => ['auth:student-api']], function () {
    Route::get('beranda', 'StudentController@home');
    Route::put('edit/profile/{profile}','StudentController@editProfile');

});