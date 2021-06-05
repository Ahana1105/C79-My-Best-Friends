array_names = [];
 function submit(){
     var name1 = document.getElementById("name1").value;
     var name2 = document.getElementById("name2").value;
     var name3 = document.getElementById("name3").value;
     var name4 = document.getElementById("name4").value;

     array_names.push(name1);
     array_names.push(name2);
     array_names.push(name3);
     array_names.push(name4);
    
     document.getElementById("display_array").innerHTML= array_names;
     document.getElementById("submit_button").style.display= "none";
     document.getElementById("sort_button").style.display= "inline-block";
     
 }

 function sorting(){
     array_names.sort();
    document.getElementById("display_array").innerHTML = array_names;
 }