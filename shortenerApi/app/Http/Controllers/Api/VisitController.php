<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use App\Models\Link;
use App\Models\Visit;
use Illuminate\Support\Facades\DB;

class VisitController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
     public function listVisit($id)
     { 
        $counter= DB::table('visits')
        ->join('links', 'visits.link_id', 'links.id')
               ->selectRaw('MONTHNAME(visits.created_at) as month, COUNT(link_id) as visits')
               ->where('links.user_id', $id)
               ->groupByRaw('month, MONTH(visits.created_at)')
               ->orderByRaw('MONTH(visits.created_at)')
               ->get();
               return $counter;
     }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index($link)
    {
        $short_link = Link::where('shortLink', $link)->first();
        Visit::create(['link_id'=> $short_link->id]);
        return redirect($short_link->completeLink);

        
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
