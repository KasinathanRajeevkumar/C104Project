function login() {

    player_name  = document.getElementById("playerName").value;
    localStorage.setItem("playerName", player_name);

    window.location = "gamepage.html";
}