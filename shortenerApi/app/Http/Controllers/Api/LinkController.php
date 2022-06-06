<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use Illuminate\Support\Str; 
use App\Models\Link;
use App\Http\Resources\LinkCollection;
use App\Http\Resources\LinkResource;

class LinkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $auth_id = Auth::id(); 
        
        $links = Link::all()->where('user_id', $auth_id);
        return LinkCollection::make($links);
    }
 
    public function store(Request $request)
    {
        $auth_id = Auth::id(); 
        $data = $request->validate(
            [
                'completeLink'=>['required', 'url'], 
            ]
        );
        $data['user_id'] = $auth_id ;
        $data['shortLink'] = Str::random(6);
        $link = Link::create($data)->fresh();
        $link->load('user_id');   
        return LinkResource::make($link); 
    }

    public function update(Request $request)
    {
        $link = Link::findOrFail($request->id);
        $auth_id = Auth::id(); 
        $data['user_id'] = $auth_id ;
        $data = $request->validate(
            [
                'completeLink'=>['required', 'url'],
                'shortLink'=>['required'], 
            ]
        );
        $link->update($data);
        
    }

    public function destroy($id)
    {
        //
    }
}
