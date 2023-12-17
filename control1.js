let user_logged_in = true;

if(user_logged_in  == true){
    console.log("move to product page");
    let product_chosen = prompt("Enter a product name");
    console.log("You want to buy"+ product_chosen);
    if(product_chosen==""){
        console.log("Choose a product");
        product_chosen = prompt("Enter a product name");
        console.log("You want to buy"+ product_chosen);
    }else{
        console.log("move to checkout page");
        let paymenttype = prompt("Enter a suitable payment mode");
        console.log("You choose "+ paymenttype +"payment mode");
        let amount = prompt("Enter the amount");
        console.log("Payment recieved . Thank you visit again");
    }

}else{
    console.log("Please login first to continue");
    let username = prompt("Enter the username");
    let password = prompt("enter your password");

    if(username == ""){
        console.log("you can not login in due to username");
    }else if(password == ""){
        console.log("you can not login due to password");
    }else if(username=="" && password == ""){
        console.log("Eneter the details to continue");
    }else{
        console.log("move to product page");
    }
}