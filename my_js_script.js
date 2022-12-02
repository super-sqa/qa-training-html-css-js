
function updateResult(status){
    //alert("Result Updated");
    if ( status == "PASSED" ){
        document.getElementById("result3").innerHTML = "PASSED";
        document.getElementById("result_container3").style.backgroundColor = "green";
    } else if ( status == "FAILED" ) {
        document.getElementById("result3").innerHTML = "FAILED";
        document.getElementById("result_container3").style.backgroundColor = "red";
    } else {
        alert("Unexpected Status: " + status);
    }

}
