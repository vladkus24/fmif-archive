function copyText(id) {
    var paragraph = document.getElementById(id);
    var textToCopy = paragraph.innerText;

    if (id === "copyNumber1") {
        alert("Скопійовано карту ПриватБанку: 4149 4378 6967 7698");
    } else if (id === "copyNumber2") {
        alert("Скопійовано карту ОщадБанку: 5167 8031 2677 7494");
    }

    navigator.clipboard.writeText(textToCopy)
        .then(function () {
            // Повідомлення про успішне копіювання
        })
        .catch(function (error) {
            // Повідомлення про помилку копіювання
        });
}
