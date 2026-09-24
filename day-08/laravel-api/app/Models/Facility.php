<?php
namespace App\Models; use Illuminate\Database\Eloquent\Model; class Facility extends Model { protected $fillable=['name','location','cleanliness_score','water_availability']; public function inspections(){return $this->hasMany(Inspection::class);} public function complaints(){return $this->hasMany(Complaint::class);} }
