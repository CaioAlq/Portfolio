function copiar() {
    const email = document.getElementById("email").textContent;
    let icon = document.getElementById("icon-button");

    navigator.clipboard.writeText(email);
    icon.classList.remove("fa-copy");
    icon.classList.add("fa-check");
}

