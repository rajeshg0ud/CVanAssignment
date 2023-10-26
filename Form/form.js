function submitForm() {
    const form = document.getElementById("surveyForm");
    if (form.checkValidity()) {
        const data = new FormData(form);
        const popup = document.getElementById("popup");
        const popupData = document.getElementById("popupData");

        while (popupData.firstChild) {
            popupData.removeChild(popupData.firstChild);
        }

        for (let pair of data.entries()) {
            const listItem = document.createElement("li");
            listItem.textContent = pair[0] + ": " + pair[1];
            popupData.appendChild(listItem);
        }

        popup.style.display = "block";
    }
}

function resetForm() {
    const form = document.getElementById("surveyForm");
    form.reset();
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
