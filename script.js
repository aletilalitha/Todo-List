const addButton = document.querySelector(".btn");
const resultText = document.querySelector(".result")

 
addButton.addEventListener('click', function () {
    let addTasks = document.querySelector(".textAdded");
    if (addTasks.value == "") {
        alert("please Add the Task")
       
    } else {
       
        let paragraph = document.createElement("li")
        paragraph.class = ''
        let removeBtn = document.createElement("button")
        let editButton = document.createElement("button")

        paragraph.innerText = addTasks.value;
        addTasks.value = "";
        resultText.appendChild(paragraph);
        editButton.innerHTML="Edit"
        paragraph.appendChild(editButton);
        removeBtn.innerHTML="Remove"
        paragraph.appendChild(removeBtn);
       
        resultText.style.cssText = 'border:3px solid black;color:red;margin:auto;width:50%;padding:10px;font-size:25px;'
        paragraph.style.cssText='margin-top:10px;list-style:number inside;'
        editButton.style.cssText = 'color:blue;margin-left:20px;padding:5px;font-weight:bold;float:right;'
        removeBtn.style.cssText = 'color:blue;margin-left:10px; padding:5px;font-weight:bold;float:right;'
        
        removeBtn.addEventListener('click', function () {
            removeBtn.parentElement.remove();
        })
       
    
    }

    
})




    
     
  