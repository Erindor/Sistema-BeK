/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global app */
app.config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "/view/listClientes.html"
    })
    .otherwise({
        template:"<h1> Não encontrou nada </h1>"
    });
});
