function calculateLove() {

    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;

    if (name1 === "" || name2 === "") {
        document.getElementById("result").innerHTML =
        "Please enter both names ❤️";
        return;
    }

    let score = Math.floor(Math.random() * 51) + 50;

    document.getElementById("result").innerHTML =
    name1 + " ❤️ " + name2 +
    "<br><br>Your Love Score is " + score + "% 💕";
}