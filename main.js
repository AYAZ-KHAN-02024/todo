let formEl = document.querySelector(".form");
let inputVal = document.querySelector(".inp")

let ulEl = document.querySelector(".list")

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    toDoList()


})
let list = JSON.parse(localStorage.getItem("list"));
list.forEach(task=>{
    toDoList(task)
})

function toDoList(task) {
    let newTask = inputVal.value;
    if (task) {
        newTask = task.name;
    }
    let liEl = document.createElement("li");
    if (task && task.checked) {
        liEl.classList.add("check")
    }
    liEl.innerHTML = newTask;
    ulEl.appendChild(liEl);
    inputVal.value = "";
    let checkBtn = document.createElement("div")
    checkBtn.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
    liEl.appendChild(checkBtn);
    let trashBtn = document.createElement("div");
    trashBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    liEl.appendChild(trashBtn);
    checkBtn.addEventListener("click", () => {
        liEl.classList.toggle("check")
        localSto();
    })
    trashBtn.addEventListener("click", () => {
        liEl.remove()
        localSto()
    })
    localSto()
}
function localSto() {
    let liEls = document.querySelectorAll("li")
    list = [];
    liEls.forEach(lis => {
        list.push({
            name: lis.innerText,
            checked: lis.classList.contains("check")
        })
    })

    localStorage.setItem("list", JSON.stringify(list))
}
