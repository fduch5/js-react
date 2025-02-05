const btn2 = document.querySelector(".btn2");

let i = 0;
const deleteElement = (e) => {
    btn2.style.color = "green";
    btn2.style.backgroundColor = "red";
    btn2.style.fontSize = "3rem";
    i += 1;
    if(i === 1){
        btn2.removeEventListener("click", deleteElement);
    }
};

btn2.addEventListener("click", deleteElement);

btn2.addEventListener("mouseenter", (e) => {
    console.log("mouseenter");
    console.log(e);
    console.log(e.target);
});

const link = document.querySelector("a");
link.addEventListener("click", function(event){
    // убирает стандартное поведение элементов,
    // нужно всегда писать в начале
    event.preventDefault();

    
});