function mostrarJugador() {
    const number = parseInt(document.getElementById("playerNumber").value);
    let jugador = "";

    if (number === 34) {
        jugador = "Shaquille O'Neal";
    } else if (number === 8 || number === 24) {
        jugador = "Kobe Bryant";
    } else if (number === 23) {
        jugador = "LeBron James";
    } else if (number === 3) {
        jugador = "Anthony Davis";
    } else {
    alert("Número no reconocido.");
    return false; // Evita que se envíe el formulario
    }

    alert("¡El jugador es: " + jugador + "!");
    return false; // También evita envío
}