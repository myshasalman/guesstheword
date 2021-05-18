function nextpg()
{
    var p1= document.getElementById("pl1").value;
    var p2= document.getElementById("pl2").value;
    localStorage.setItem("Player1Name", p1);
    localStorage.setItem("Player2Name", p2);
    window.location="game_page.html";
}