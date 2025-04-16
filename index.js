window.addEventListener("load", function () {
    CreaMatrice();

    CaricaMatrice();
});

function CaricaMatrice() {
    for (let cont = 1; cont <= 15; cont++) {
        let divRnd;
        do {
            const i = Math.floor(Math.random() * 4);
            const j = Math.floor(Math.random() * 4);

            divRnd = document.getElementById(`div-${i}-${j}`);
        } while (divRnd.textContent != "");
        divRnd.style.backgroundColor = "blue";
        divRnd.textContent = cont;
    }
}

function CreaMatrice() {

    const wrapper = document.getElementById("wrapper");

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const div = document.createElement("div");
            div.addEventListener("click", divClick);
            div.id = `div-${i}-${j}`;
            wrapper.appendChild(div);
        }
    }
}
function divClick() {
    const i = parseInt(this.id.split('-')[1]);
    const j = parseInt(this.id.split('-')[2]);

    //Cella sopra
    if (i + 1 >= 0) {
        const vicino = document.getElementById(`div-${i + 1}-${j}`);

        if (vicino.textContent == "") {
            scambiaDiv(this, vicino);
            return;
        }
    }

    //Cella destra
    if (j + 1 >= 0) {
        const vicino = document.getElementById(`div-${i}-${j + 1}`);

        if (vicino.textContent == "") {
            scambiaDiv(this, vicino);
            return;
        }
    }
    //Cella sinistra
    if (j - 1 >= 4) {
        const vicino = document.getElementById(`div-${}-${j - 1}`);

        if (vicino.textContent == "") {
            scambiaDiv(this, vicino);
            return;
        }
    }
    //Cella sotto
    if (i - 1 >= 4) {
        const vicino = document.getElementById(`div-${i - 1}-${j}`);

        if (vicino.textContent == "") {
            scambiaDiv(this, vicino);
            return;
        }
    }
}

function scambiaDiv(pieno, vuoto) {
    vuoto.textContent = pieno.textContent;
    vuoto.style.backgroundColor = "blue";

    pieno.textContent = "";
    pieno.style.backgroundColor = null;
}   