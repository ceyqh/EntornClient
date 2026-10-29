let hores = 5;
let dies = 5;

let infoText = document.createElement("b");
infoText.innerHTML = "Hores: " + hores + " | Dies: " + dies;
document.body.appendChild(infoText);

for (let i = 0; i < dies; i++){
    for (let j = 0; j < hores; j++){
        let p = document.createElement("p");
        p.innerHTML = "- " + i + ":" + j;
        p.style.margin = "0px";

        document.body.appendChild(p);
    }
}