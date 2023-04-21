let leads = [];
const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("save");
const leadsEl = document.getElementById("leads");

buttonEl.addEventListener("click", function() {
    leads.push(inputEl.value);
    inputEl.value = "";
    let list = "";
    for (let value of leads){
        list += "<li>" + value + "</li>";
    }
    leadsEl.innerHTML = list;
});

