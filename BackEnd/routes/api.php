<?php

use Illuminate\Http\Request;

Route::post('auth/register','AuthController@register');
Route::get('admins', 'AdminController@admins');