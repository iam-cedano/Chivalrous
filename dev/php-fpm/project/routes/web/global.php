<?php

Route::get('/', fn () => view('index'))->name('global.index');
Route::get('/index', fn () => redirect('/'));
