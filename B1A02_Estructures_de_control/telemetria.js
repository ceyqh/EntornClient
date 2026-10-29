let valor = 0;
let angles = [];

while (valor > -75 && valor < 75) {
    valor = Number(prompt("Entra els graus:"));
    angles.push(valor);
}

angles.pop();
let acumulador = 0;

for (let i = 0; i < angles.length; i++){
    let p = document.createElement("p");
    p.innerHTML = "Angle " + i + ": " + angles[i] + "°";
    document.body.appendChild(p);

    acumulador += angles[i];
}

let quantiatAngles = document.createElement("p");
quantiatAngles.innerHTML = "Quantitat d'angles: " + angles.length;
document.body.appendChild(quantiatAngles);

let mitjanaAngles = document.createElement("b");
mitjanaAngles.innerHTML = "Mitjana d'angles: " + (acumulador / angles.length) + "°";
document.body.appendChild(mitjanaAngles);