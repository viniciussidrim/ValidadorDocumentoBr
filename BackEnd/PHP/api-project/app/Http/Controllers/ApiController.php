<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ApiController extends Controller
{
    public function validaCpf(Request $request)
    {

        $cpf = $request->input('cpf');

        $valor = preg_replace("/[^0-9]/", "", $cpf);
        if (strlen($valor) != 11) {
            return response()->json(['message' => 'CPF inválido'], Response::HTTP_BAD_REQUEST);
        }

        $noveDigitos = substr($valor, 0, 9);
        $array = str_split($noveDigitos);
        $primeiraCombinacao = 0;
        $primeiroCalculo = 10;

        foreach ($array as $value) {
            $numero = intval($value);
            $primeiraCombinacao += ($numero * $primeiroCalculo);
            $primeiroCalculo = $primeiroCalculo - 1;
        }

        $segunda_combinacao = ($primeiraCombinacao * 10) % 11;

        if ($segunda_combinacao == 10) {
            $segunda_combinacao = 0;
        }

        $dezDigitos = substr($valor, 0, 10);
        $array2 = str_split($dezDigitos);
        $terceiraCombinacao = 0;
        $segundoCalculo = 11;

        foreach ($array2 as $value) {
            $numero = intval($value);
            $terceiraCombinacao += ($numero * $segundoCalculo);
            $segundoCalculo = $segundoCalculo - 1;
        }

        $quarta_combinacao = ($terceiraCombinacao * 10) % 11;

        if ($quarta_combinacao == 10) {
            $quarta_combinacao = 0;
        }

        if ($segunda_combinacao == substr($valor, 9, 1) && $quarta_combinacao == substr($valor, 10, 1)) {
            return response()->json(['message' => 'CPF válido'], Response::HTTP_OK, [], JSON_UNESCAPED_UNICODE);
        } else {
            return response()->json(['message' => 'CPF inválido'], Response::HTTP_OK, [], JSON_UNESCAPED_UNICODE);
        }

    }
}
