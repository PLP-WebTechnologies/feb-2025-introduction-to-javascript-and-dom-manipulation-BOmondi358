function changeTitle() {
    const title = document.querySelector("h1");
    title.textContent = "Welcome to DOM Magic!";
    title.style.color = "darkblue";
}

// Highlight the registration form section
function highlightForm() {
    const form = document.querySelector("form");
    form.style.backgroundColor = "#f0f8ff";
    form.style.border = "2px solid #4682b4";
    form.style.padding = "10px";
}

function addHobby() {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "interests";
    checkbox.value = "Coding";
    checkbox.id = "Coding";

    label.setAttribute("for", "Coding");
    label.textContent = "Coding";

    const form = document.querySelector("form");
    form.appendChild(checkbox);
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
}

function removeImage() {
    const image = document.getElementById("tokyo-image");
    if (image) {
        image.remove();
    }
}
