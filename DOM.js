let product = document.createElement("div")
product.setAttribute("class", "product");


let imageDiv = document.createElement("div")
imageDiv.setAttribute("class", "product-image");
let img = document.createElement("img")
img.src = "https://i.ibb.co/BLp1tVK/download.png";
img.style.width = "100%";
img.style.height = "100%";
imageDiv.append(img);


let title = document.createElement("h2");
title.setAttribute("class", "product-title");
title.innerHTML = "Whatsapp logo";


let p = document.createElement("p");
p.setAttribute("class", "product-description");
p.innerHTML = "This is the logo of the whatsapp and here we are creating mulitple instances of the eahatsapp clone.";


let buttons = document.createElement("div");
buttons.setAttribute("class", "btns");
for(let i=0; i<3; i++){
    let btn = document.createElement("button");
    if(i==0)
    btn.innerHTML = "Share";
    else if(i==1)
    btn.innerHTML = "Follow";
    else
    btn.innerHTML = "Install";


    buttons.append(btn);
}


let footer = document.createElement("p");
footer.setAttribute("class", "footer");
footer.innerHTML = "Copyright @2023. Whatsapp.org";


product.append(imageDiv, title, p, buttons, footer);


function add(){
    let cont = document.getElementById("container");
    for(let j=0;j<9;j++){
        cont.append(product)
    }
}
add()
