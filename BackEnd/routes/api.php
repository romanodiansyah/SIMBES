<?php

use Illuminate\Http\Request;

//admin
Route::post('auth/admin/register','AuthController@register');
Route::post('auth/admin/login','AuthController@loginAdmin');
Route::get('admins', 'AdminController@admins');
Route::get('admin/excel', 'AdminController@export_excel');
Route::get('admin/zip', 'AdminController@export_zip');

Route::group(['middleware' => ['auth:admin-api']], function(){ 
    //admin
    Route::get('admin/beranda', 'AdminController@home');
    Route::get('admin/{admin}','AdminController@readAdmin');
    Route::post('admin/update/profile', 'AdminController@update');
    Route::put('admin/update/{admin}', 'AdminController@updateAdmin');
    Route::post('admin/deactivate', 'AdminController@deactivate');
    //student
    Route::get('admin/list/student','AdminController@listStudent');
    Route::get('admin/student/{student}','AdminController@readStudent');
    Route::post('admin/create/student', 'AuthController@createStudent');
    Route::put('admin/update/student/{student}','AdminController@updateStudent');
    Route::post('admin/deactivate/student/{student}', 'AdminController@deactivateStudent');
    //beasiswa admin
    Route::post('admin/beasiswa/create', 'BeasiswaController@createBeasiswa');
    Route::post('admin/beasiswa/update/{beasiswa}', 'BeasiswaController@updateBeasiswa');
    Route::post('admin/beasiswa/delete', 'BeasiswaController@deleteBeasiswa');
    Route::get('admin/beasiswa','BeasiswaController@readBeasiswa');
    Route::get('admin/beasiswa/view/{beasiswa}','BeasiswaController@viewBeasiswa');

    // berita
    Route::post('admin/create/news','BeritaController@createNews');
    Route::get('admin/list/news','BeritaController@listBerita');
    Route::get('admin/news/{berita}','BeritaController@readBerita');
    Route::put('admin/update/news/{berita}','BeritaController@update');
    Route::put('admin/deactivate/news/{berita}', 'BeritaController@deactivate');
    
    // pendaftar
    Route::post('pendaftar/accept/{beasiswa}','PendaftarController@acceptPendaftar');
    Route::post('pendaftar/decline/{beasiswa}','PendaftarController@declinePendaftar');
    Route::post('pendaftar/{beasiswa}','PendaftarController@readPendaftar');
    // notifikasi
    Route::post('notifikasi/create','StatusController@createNotif');
});
Route::get('pendaftar/{beasiswa}/tes','PendaftarController@readPendaftar');

Route::group(['middleware' => ['auth:student-api']], function () {
    Route::get('beranda', 'StudentController@home');
    Route::post('update/profile/{profile}','StudentController@updateProfile');
    Route::post('student/pdf','StudentController@export_pdf');
    //berita

    //pendaftar
    Route::post('pendaftar/create','PendaftarController@createPendaftar');
    Route::post('pendaftar/update','PendaftarController@updatePendaftar');
    Route::post('pendaftar/delete','PendaftarController@deletePendaftar');
    

    //notifikasi
    Route::post('notifikasi/check','StatusController@checkNotif');
    Route::post('notifikasi/read','StatusController@readNotif');

    // student
    Route::get('student/beasiswa/applicable','BeasiswaController@applicableBeasiswa');
    Route::get('student/beasiswa/closed','BeasiswaController@closedBeasiswa');

});


// HOME BEBAS
Route::get('beasiswa','BeasiswaController@readBeasiswa');
Route::get('beasiswa/view/{beasiswa}','BeasiswaController@viewBeasiswa');
Route::get('beasiswa/view','BeasiswaController@viewBeasiswa');
Route::get('beasiswa/applicable','BeasiswaController@applicableBeasiswa');
Route::get('beasiswa/closed','BeasiswaController@closedBeasiswa');

// STUDENT
Route::post('auth/login','AuthController@loginStudent');

Route::get('admins/beranda', 'AdminController@beranda')->middleware('auth:admin');
Route::get('news/search/{key}','BeritaController@search');

Route::get('list/news','BeritaController@listBerita');


