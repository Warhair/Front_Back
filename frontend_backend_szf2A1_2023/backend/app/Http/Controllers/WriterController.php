<?php

namespace App\Http\Controllers;
use App\Models\Writer;
use Illuminate\Http\Request;

class WriterController extends Controller
{
    public function index()
    {
        $writers = Writer::all(); // Az összes rekord lekérése
        return   response()->json($writers);
    }
    public function store(Request $request)
    {
        $record = new Writer();
        $record->nev = $request->nev;
        $record->szul = $request->szul;
        $record->save();

        // Visszatérhet például egy sikerüzenettel vagy átirányítással
        return Writer::find($record->id);
        //return response()->json(['message' => 'Rekord sikeresen létrehozva'], 201);;
    }

    public function destroy($id)
    {
        $writer = Writer::find($id)->delete();
        return response()->json(['message' => 'Sikeres törlés!'], 201);
        //return redirect('/writers');


    }
    public function update(Request $request, $id)
    {
        $writer = Writer::find($id);
        $writer->nev = $request->nev;
        $writer->szul = $request->szul;
        $writer->save();
    }
}
