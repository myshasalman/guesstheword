var player1name = localStorage.getItem("Player1Name");
var player2name = localStorage.getItem("Player2Name");
var pl1score = 0;
var pl2score = 0;
document.getElementById("p1name").innerHTML=player1name+" : ";
document.getElementById("p2name").innerHTML=player2name+" : ";
document.getElementById("score1").innerHTML=pl1score;
document.getElementById("score2").innerHTML=pl2score;
document.getElementById("plques").innerHTML="Question Turn: "+player1name;
document.getElementById("plans").innerHTML="Answer Turn: "+player2name;
function create()
{
    var getvalue = document.getElementById("word").value;
    var word = getvalue.toLowerCase();
    var a1 = word.charAt(1);
    var l = Math.floor(word.length/2);
    var a2 = word.charAt(l);
    var l2 = word.length-1;
    var a3 = word.charAt(l2);
    var r1 = word.replace(a1,"_");
    var r2 = r1.replace(a2,"_");
    var r3 = r2.replace(a3,"_");
    var q = "<h4 id='word_diplay' Q:>"+r3+"</h4>";
    var i = "<br> Answer: <input id='in'>";
    var b = "<br> <button class='btn btn-primary' onclick='check()'>Check</button>";
    var c = q+i+b;
    document.getElementById("output").innerHTML=c;
    document.getElementById("word").value=" ";
}
var qturn= "player1";
var aturn= "player2";
function check()
{
    getans= document.getElementById("in").value;
    ans= getans.toLowerCase();
    if (ans == word)
    {
        if (aturn=="player1")
        {
            pl1score=pl1score+1;
            document.getElementById("score1").innerHTML=pl1score;
        }
        else 
        {
            pl2score=pl2score+1;
            document.getElementById("score2").innerHTML=pl2score;
        }
    }
    if (qturn == "player1")
    {
        qturn= "player2";
        document.getElementById("plques").innerHTML="Question Turn: "+player2name;
    }
    else 
    {
        qturn= "player1";
        document.getElementById("plques").innerHTML="Question Turn: "+player1name;
    }
    if (aturn == "player1")
    {
        aturn= "player2";
        document.getElementById("plans").innerHTML="Answer Turn: "+player2name;
    }
    else
    {
        aturn="player1";
        document.getElementById("plans").innerHTML="Answer turn: "+player1name;
    }
    document.getElementById("output").innerHTML="";
}