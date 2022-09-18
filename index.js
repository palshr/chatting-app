
function talk(){
    var know={
        "who are you" : "Hello, my name is shubham singh",
        "how are you" : "I am Fine",
        "where are you from" : "Jhansi Uttar Pradesh",
        "your skill" : " c++, sql, python,javascript",
        "college name" : "IIIT Bhopal",
        "qualification" : "B.teck 2year",
        "best friend" : "Koi nahi h yarr",
        "ok" : "Thank you so much",
        "bye" : "Ok, see you seen",
    };
    var user=document.getElementById("userbox").value;
    document.getElementById("chatlog").innerHTML=user +"<br>";
    if(user in know)(
        document.getElementById("chatlog").innerHTML=know[user] +"<br>",
        document.getElementById("chatlog").style.fontSize="30px"
    )
     else{
        document.getElementById("chatlog").innerHTML="sorry! I didn't understand" +"<br>";
    }
}