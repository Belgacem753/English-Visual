
$( document ).ready(function() {
    // show home
    $(".themes").hide()
    $(".im2").hide()
    $(".in2").hide()
    $("#vr").hide()
    $("#nxt").hide()
    $("#vr1").hide()
    $("#nxt1").hide()
    $("#vr2").hide()
    $("#nxt2").hide()
    $("#vr3").hide()
    $("#nxt3").hide()
    
    $(".msg2").click(function(){
        var name = $(".in1").val()
        console.log(name)
        if (name.length!==0){
            $(".home").hide();
            $(".themes").show();
        }
        else if (name.length ===0){
            alert ("Enter your name");
        }
       
       
      });
    // show colors  -----------------------------------------------------------------------------------------------  //
    $("#im1").click(function(){
        
        $(".themes").hide();
        $("#"+idColor[0]).show();
        $(".in2").show()
        $("#vr").show()
        $("#nxt").show()

        $("#vr").dblclick(function(){
            var verify = $(".in2:text").val()
            if (verify.toLocaleLowerCase() ===  idColor[0]){
                alert("Good job!");
            } else {
                alert("Please try again");
            }
            verify = $(".in2:text").val('');

        })
        
    })
    var i =1;
    $("#nxt").click(function(){
        
        $("#vr").click(function(){
            var verify = $(".in2:text").val()
            if (verify.toLocaleLowerCase() === idColor[i-1]){
               
                alert("Good job!");
            } else {
                alert("Please try again");
            }
            verify = $(".in2:text").val('');
        })
    
    if ( i < idColor.length){
        
            $("#"+idColor[i]).show(); 
            i++;
        
    } else {
    
        $(".in2").hide()
        $("#vr").hide()
        $("#nxt").hide()
        $(".themes").show();
        $(".im2").hide();
        i=1;

    }
});

// show animals  -------------------------------------------------------------------------------  //
var l =1;
$("#im4").click(function(){
        
    $(".themes").hide();
    $("#"+idAnimal[0]).show();
    $(".in2").show()
    $("#vr1").show()
    $("#nxt1").show()
    
})

  
$("#vr1").dblclick(function(){
    var verify = $(".in2:text").val()
    if (verify.toLocaleLowerCase()=== idAnimal[0]){
        alert("Good job!");
    } else {
        alert("Please try again");
    }
    verify = $(".in2:text").val('');
})
$("#nxt1").click(function(){
      
    $("#vr1").click(function(){
        var verify = $(".in2:text").val()
        if (verify.toLocaleLowerCase()=== idAnimal[l-1]){
            alert("Good job!");
        } else {
            alert("Please try again");
        }
        verify = $(".in2:text").val('');
    })

if ( l < idAnimal.length){
    
        $("#"+idAnimal[l]).show(); 
        l++;
    
} else {

    $(".in2").hide()
    $("#vr1").hide()
    $("#nxt1").hide()
    $(".themes").show();
    $(".im2").hide();
    l=1;
    }
})

// show sports ----------------------------------------------------------------------------------- //
var j =1;
$("#im3").click(function(){
        
    $(".themes").hide();
    $("#"+idSport[0]).show();
    $(".in2").show()
    $("#vr2").show()
    $("#nxt2").show()
    
})

  
$("#vr2").dblclick(function(){
    var verify = $(".in2:text").val()
    if (verify.toLocaleLowerCase()=== idSport[0]){
        alert("Good job!");
    } else {
        alert("Please try again");
    }
    verify = $(".in2:text").val('');
})

$("#nxt2").click(function(){

      
    $("#vr2").click(function(){
        var verify = $(".in2:text").val()
        if (verify.toLocaleLowerCase()=== idSport[J-1]){
            alert("Good job!");
        } else {
            alert("Please try again");
        }
        verify = $(".in2:text").val('');
    })
if ( j < idSport.length){
    
        $("#"+idSport[j]).show(); 
        j++;
    
} else {

    $(".in2").hide()
    $("#vr2").hide()
    $("#nxt2").hide()
    $(".themes").show();
    $(".im2").hide();
    j=1;
    }
})

// show fruits  -------------------------------------------------------------------------------------------- //
var k = 1;
$("#im2").click(function(){
        
    $(".themes").hide();
    $("#"+idFruit[0]).show();
    $(".in2").show()
    $("#vr3").show()
    $("#nxt3").show()
    
})
  
$("#vr3").dblclick(function(){
    var verify = $(".in2:text").val()
    if (verify.toLocaleLowerCase()=== idFruit[0]){
        alert("Good job!");
    } else {
        alert("Please try again");
    }
    verify = $(".in2:text").val('');
})

$("#nxt3").click(function(){
      
    $("#vr3").click(function(){
        var verify = $(".in2:text").val()
        if (verify.toLocaleLowerCase() === idFruit[k-1]){
            alert("Good job!");
        } else {
            alert("Please try again");
        }
        verify = $(".in2:text").val('');
    })

if ( k < idFruit.length){
    
        $("#"+idFruit[k]).show(); 
        k++;
    
} else {

    $(".in2").hide()
    $("#vr3").hide()
    $("#nxt3").hide()
    $(".themes").show();
    $(".im2").hide();
    k=1;
    }
})

    

      
});

var idColor = ["yellow","black","gray","red","white","green","blue","purple"];
var idAnimal = ["dog","cat","camel","lion","elephant"];
var idSport = ["football","handball","soccer","tenis"];
var idFruit = ["apple","melon","pear","raspberry","strawberry","water-melon"];



