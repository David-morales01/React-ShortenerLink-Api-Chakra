<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Link extends Model
{
    
    protected $guarded=[];
    use HasFactory, SoftDeletes;
    
    public function user_id(){
        return $this->belongsTo(User::class);
    }
    
    public function visits(){
        return $this->hasMany(Visit::class);
    }
}
