

let form = document.querySelector("form")
let main = document.querySelector(".main")
let inpu = document.querySelectorAll("input")

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // console.log(inpu)

    let card = document.createElement("div");
    card.classList.add("card")



    let profile = document.createElement("div");
    profile.classList.add("profile")


    let img = document.createElement("img");
    img.setAttribute("src", inpu[0].value);

    let h3 = document.createElement("h3");
    h3.textContent = inpu[1].value;

    let h4 = document.createElement("h4");
    h4.textContent = inpu[2].value;

    let p = document.createElement("p");
    p.textContent = inpu[3].value;

    profile.appendChild(img)
    card.appendChild(profile)
    card.appendChild(h3)
    card.appendChild(h4)
    card.appendChild(p)
    main.appendChild(card)


    inpu.forEach(function (a) {
        a.value = "";

    })

})