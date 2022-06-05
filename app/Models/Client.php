<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
 
        protected $fillable = [
            'caracteristiques','designation','marque','reference','qtestock','prix
            Achat','prixVente',
            'prixSolde','imageartpetitf', 'imageartgrandf'
            ,'categorieID','scategorieID'
            ];
            public function categories()
            {
            return $this->belongsTo(Categorie::class,"categorieID");
            }
            public function scategories()
            {
             return $this->belongsTo(Scategorie::class,"scategorieID");
            }
}
