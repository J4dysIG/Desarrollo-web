document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("NewItemInput");
    const addButton = document.getElementById("AddItemBtn");
    const itemList = document.getElementById("itemList");

    function addItem() {
        const itemText = input.value.trim();
        if (itemText =="") return;

        const listItem = document.createElement("li");
        listItem.textContent = itemText;

        const completeBtn= document.createElement("button");
        completeBtn.innerHTML = '<span class="material-icons">check_circle</span>';
        completeBtn.classList.add("completeBtn");
        completeBtn.addEventListener("click", function() {
            listItem.classList.toggle("completed");
        });

        const deleteBtn=document.createElement("button");
        deleteBtn. innerHTML = '<span class="material-icons">delete</span>';
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.addEventListener("click", function() {
            itemList.removeChild(listItem);
        });

        listItem.appendChild(completeBtn);
        listItem.appendChild(deleteBtn);
        itemList.appendChild(listItem);
        input.value = "";
    }

    addButton.addEventListener("click", addItem);
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addItem();
        }
    });
});
