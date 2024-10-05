const boxes = document.querySelectorAll(".box");
let list = [];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        box.classList.add("active");
        list.push(box);
        if(list.length === boxes.length){
            list.forEach((box, index) => {
                setTimeout(() => {
                    box.classList.remove("active");
                }, (index+1) * 1000);
            });
            list =[];
        }
    })
})