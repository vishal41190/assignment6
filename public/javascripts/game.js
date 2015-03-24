var main = function () {
    "use strict";
    var $button= $("#btnrock");   
    $button.on("click",function(){
    
        
    $.ajax({
            
            type: "POST",
            url: "/play/rock",
            contentType: "application/json; charset=utf-8",
            dataType: "json"
          
        })
        .done(function (data,status){
        
            $('#list').html("");
            
            $('#list').append("<div class='results'>");
                    $('#list').append("<P>Outcome:"+data.outcome+"</p>");
                    $('#list').append("<p>Wins:"+data.wins+"</p>");
                    $('#list').append("<p>Looses:"+data.losses+"</p>");
                    $('#list').append("<p>Ties:"+data.ties+"</p>");
                    $('#list').append("</div>");
               
        })
        .fail(function (data, status){
            console.log("fail called");
            console.log(data);
            console.log(status);
        });
    
      
        
    });

//sandeep
//1
var $button= $("#btnpaper");   
    $button.on("click",function(){
    
        
    $.ajax({
            
            type: "POST",
            url: "/play/paper",
            contentType: "application/json; charset=utf-8",
            dataType: "json"
          
        })
        .done(function (data,status){
        
            $('#list').html("");
            
          $('#list').append("<div class='results'>");
                    $('#list').append("<P>Outcome:"+data.outcome+"</p>");
                    $('#list').append("<p>Wins:"+data.wins+"</p>");
                    $('#list').append("<p>Looses:"+data.losses+"</p>");
                    $('#list').append("<p>Ties:"+data.ties+"</p>");
                    $('#list').append("</div>");
               
        })
        .fail(function (data, status){
            console.log("fail called");
            console.log(data);
            console.log(status);
        });
    
      
        
    });

//2



var $button= $("#btnscissors");   
    $button.on("click",function(){
    
        
    $.ajax({
            
            type: "POST",
            url: "/play/scissors",
            contentType: "application/json; charset=utf-8",
            dataType: "json"
          
        })
        .done(function (data,status){
        
            $('#list').html("");
            
            $('#list').append("<div class='results'>");
                    $('#list').append("<P>Outcome:"+data.outcome+"</p>");
                    $('#list').append("<p>Wins:"+data.wins+"</p>");
                    $('#list').append("<p>Looses:"+data.losses+"</p>");
                    $('#list').append("<p>Ties:"+data.ties+"</p>");
                    $('#list').append("</div>");
               
        })
        .fail(function (data, status){
            console.log("fail called");
            console.log(data);
            console.log(status);
        });
    
      
        
    });


//4

var $button= $("#btnlizard");   
    $button.on("click",function(){
    
        
    $.ajax({
            
            type: "POST",
            url: "/play/lizard",
            contentType: "application/json; charset=utf-8",
            dataType: "json"
          
        })
        .done(function (data,status){
        
            $('#list').html("");
            
            $('#list').append("<div class='results'>");
                    $('#list').append("<P>Outcome:"+data.outcome+"</p>");
                    $('#list').append("<p>Wins:"+data.wins+"</p>");
                    $('#list').append("<p>Looses:"+data.losses+"</p>");
                    $('#list').append("<p>Ties:"+data.ties+"</p>");
                    $('#list').append("</div>");
               
        })
        .fail(function (data, status){
            console.log("fail called");
            console.log(data);
            console.log(status);
        });
    
      
        
    });


//5

var $button= $("#btnspock");   
    $button.on("click",function(){
    
        
    $.ajax({
            
            type: "POST",
            url: "/play/spock",
            contentType: "application/json; charset=utf-8",
            dataType: "json"
          
        })
        .done(function (data,status){
        
            $('#list').html("");
            
           $('#list').append("<div class='results'>");
                    $('#list').append("<P>Outcome:"+data.outcome+"</p>");
                    $('#list').append("<p>Wins:"+data.wins+"</p>");
                    $('#list').append("<p>Looses:"+data.losses+"</p>");
                    $('#list').append("<p>Ties:"+data.ties+"</p>");
                    $('#list').append("</div>");
               
        })
        .fail(function (data, status){
            console.log("fail called");
            console.log(data);
            console.log(status);
        });
    
      
        
    });
//sandeep
};

$(document).ready(main);

