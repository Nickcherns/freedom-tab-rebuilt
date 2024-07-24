

let add_btn_list = document.getElementsByClassName("add_button")
let remove_btn_list = document.getElementsByClassName("remove_button")
let box_count = 1

function pressAddButton() {
    let btn_container = this.parentNode
    let box_container = btn_container.parentNode
    ++box_count
    addBoxContainer()
    console.log("Box Count: " + box_count)
}

function pressRemoveButton() {
    let btn_container = this.parentNode
    let box_container = btn_container.parentNode
    if (box_count >= 2) {
        --box_count
        removeBoxContainer()
    }
    console.log("Box Count: " + box_count)
}

function addBoxContainer() {
    // let body = document.getElementsByTagName("body")
    let new_box_container = document.createElement("div")
    let new_btn_container = document.createElement("div")
    let new_add_btn = document.createElement("button")
    let new_remove_btn = document.createElement("button")
    let new_box_label = document.createElement("p")

    new_add_btn.innerHTML = "+"
    new_remove_btn.innerHTML = "-"
    new_box_label.innerHTML = ("Box " + box_count)

    document.body.appendChild(new_box_container)
    new_box_container.appendChild(new_btn_container)
    new_btn_container.append(new_box_label, new_add_btn, new_remove_btn)

    new_box_container.className = "box_container"
    new_btn_container.className = "box_buttons"
    new_add_btn.className = "add_button"
    new_remove_btn.className = "remove_button"

    for (let i = 0; i < add_btn_list.length; i++) {
        let add_btn = add_btn_list[i]
        add_btn.addEventListener("click", pressAddButton)
        remove_btn_list[i].onclick = pressRemoveButton
    }
    
}

function removeBoxContainer() {
    document.body.removeChild(document.body.lastChild)
}

for (let i = 0; i < add_btn_list.length; i++) {
    let add_btn = add_btn_list[i]
    add_btn.addEventListener("click", pressAddButton)
    remove_btn_list[i].onclick = pressRemoveButton
}


