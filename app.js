let string = "";
let buttons = document.querySelectorAll("button");

let arr = Array.from(buttons);

arr.forEach((buttons) => {
    buttons.addEventListener("click",(e) => {
        if (e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector(".input").value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = "";
            document.querySelector(".input").value = string;
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length - 1);
            document.querySelector(".input").value = string;
        }
        else if(e.target.innerHTML == "sqr"){
            string = Number(string**2);
            document.querySelector(".input").value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector(".input").value = string;
        }
    });
})