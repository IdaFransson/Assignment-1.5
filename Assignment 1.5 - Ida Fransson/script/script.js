ageInput = document.getElementById("age");
vipCheckbox = document.getElementById("vip");
enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", function() {

    let age = parseInt(ageInput.value);
    let vip = vipCheckbox.checked;

    if (vip) { 
        alert("Welcome by best VIP customer :)"); 
        } else if (age >= 18) { 
            alert("Access granted");
             } else { 
                alert("Access denied"); 
            }
         });


let age = 17
let vip = false