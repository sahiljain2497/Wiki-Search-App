function addInput(){
    $(".main").html("<input type='text' id='search' name='search' autofocus>");                  
}

$(".main").keypress(function(e) {
    if(e.which == 13) {
      $(".result").empty();
      searchwiki();
        //alert('You pressed enter!');
    }
});

function searchwiki(){
    var title=document.getElementById("search").value;
    var url='https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch='+title ;
    console.log(url);
    $.ajax({url,
            dataType:'jsonp',
           headers: {
	      'Api-User-Agent': 'Example/1.0'
	    },
        success:function(data){
        for(var i=0;i<data["query"].search.length;i++){
            var title=data.query.search[i].title;
           // console.log(title);
            var snipp=data.query.search[i].snippet;
            //console.log(snipp);
            $(".result").append('<div class="data"><li>'+title+'</li><br>'+snipp+'<br><a href="https://en.wikipedia.org/wiki/'+title+'"><b>'+title+'</b>Link</a><br><br></div>');
            
        }    
        }
    });
}
