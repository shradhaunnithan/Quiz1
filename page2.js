function get_score(){
    document.getElementById("score_spot").innerHTML="Your Score Is: "+localStorage.getItem("score");
    document.getElementById("score_spot").style.color="white";
    document.getElementById("score_spot").style.fontSize="100px" ;
}
