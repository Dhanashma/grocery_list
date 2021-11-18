function myClick(){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var response = JSON.parse(this.responseText);
            var items = response.grocery;
            var output = "";
            for(var i=0; i<items.length;i++){
                output +=  "<tr><td><b>"+items[i].Number+"</b></td><td><b>"+items[i].Name+"</b></td><td><b>"+items[i].Quantity+"</b></td><td><b>"+items[i].Unit+"</b></td><td><b>"+items[i].Department+"</b></td><td><b>"+items[i].Notes+"</b></td></tr>";
            }
            
            document.getElementById("container").innerHTML ="<table class='table table-secondary table-hover' style='margin-top: 5%;'><thead> <td><b>No</b></td><td><b>Name</b></td><td><b>Quantity</b></td><td><b>Unit</b></td><td><b>Department</b></td><td><b>Notes</b></td></thead><tbody>"+output+"</tbody></table>";
            document.querySelector("#submit").setAttribute("disabled", "true");   
        }      
    }
    xhttp.open("GET",'./grocerylist.json',true);
    xhttp.send();
}
