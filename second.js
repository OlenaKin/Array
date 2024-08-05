const clothes = [
    { name: "jeans", 
        quantity: 1, 
        price: 40, 
        currency: "EUR",
        purchased: true },
    { name: "T-shirts", 
        quantity: 3, 
        price: 10, 
        currency: "EUR",
        purchased: true },
    {name: "cap", 
        quantity: 1, 
        price: 10, 
        currency: "EUR",
        purchased: false},
    {name: "dress",
        quantity: 1, 
        price: 40, 
        currency: "EUR",
        purchased: false
        }

];



const notPurchased = () => {
    let totalCost = 0;
    
    for(let i = 0; i < clothes.length; i++){
    let item = clothes[i];
    if(!item.purchased){
    totalCost += item.quantity * item.price;
    }
    }
    
    alert(`The total cost of not purchased items is ${totalCost} ${clothes[0].currency}`);
}

document.getElementById("button__calculateNotPurchased").addEventListener("click", notPurchased);

    
    
    
    
    
    
    
    
    