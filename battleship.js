var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
	guess = prompt("Готов, стреляй! (нужно ввести число от 0 до 6):");
	if (guess < 0 || guess > 6) {
		alert("Пожалуйста внимательно, от 0 до 6!");
	} else {
		guesses = guesses + 1;

		if (guess == location1 || guess == location2 || guess == location3) {
			alert("ЁПС, попал!");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("Утонул кораблик");
			}
		} else {
			alert("Мозила");
		}
	}
}
var stats = "Вам понадобилось " + guesses + " попыток чтобы утопить корабль, " + "а, это значит что точность вашей стрельбы " + (3/guesses);
alert(stats);