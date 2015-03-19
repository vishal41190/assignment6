var main = function () {
    "use strict";
    var $button= $("#search");   
    $button.on("click",function(){
    
        
    $.ajax({
            
            type: "GET",
            url: "/play/rock",
            contentType: "application/json; charset=utf-8",
            dataType: "json"
          
        })
        .done(function (data,status){
        
            $('#list').html("");
            
            $('#list').append("<div class='business'>");
                    $('#list').append("<div class='business_name'>");
                    $('#list').append(data.outcome);
                    $('#list').append("</div>");
                    $('#list').append("<div class='business_address'>");
                    $('#list').append(data.wins);
                    $('#list').append("</div>");
                    $('#list').append("<div class='business_phone'>");
                    $('#list').append(data.losses);
                    $('#list').append("</div>");
                    $('#list').append("<div class='business_rating'>");
                    $('#list').append(data.ties);
                    $('#list').append("</div>");
                    $('#list').append("</div>");
               
        })
        .fail(function (data, status){
            console.log("fail called");
            console.log(data);
            console.log(status);
        });
    
      
        
    });
};

$(document).ready(main);

