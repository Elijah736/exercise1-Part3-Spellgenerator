const spellArea = document.getElementById("spellArea");
const mybutton = document.getElementById("generateButton")
const reset = document.getElementById("resetButton")
const ingrediantslist = document.getElementById("ingrediantslist")

mybutton.addEventListener("click", function() {
    const ingrediants = [];
    const items = ingrediantslist.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        ingrediants.push(items[i].textContent);
    }

    let count = 3;
    spellArea.textContent = count;

    const countdown = setInterval(() => {
        count--;
        if (count > 0) {
            spellArea.textContent = count;
        } else {
            clearInterval(countdown);
            const randomingrediant = ingrediants[Math.floor(Math.random() * ingrediants.length)];

            spellArea.textContent = "💥 Spell created with " + randomingrediant;

            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

            spellArea.style.backgroundColor = randomColor;
        }
    }, 1000);
});

reset.addEventListener("click", function () {
    spellArea.textContent = "Spell will appear here";
});

