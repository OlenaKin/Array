const clothes = [
    { name: "jeans", 
        quantity: 1, 
        price: 40, 
        currency: "EUR" },
    { name: "T-shirts", 
        quantity: 3, 
        price: 10, 
        currency: "EUR" }
];

//Introduce the initial cost
let totalCost = 0;

//Iteration 
for (let i = 0; i < clothes.length; i++) {
    const item = clothes[i];
    totalCost += item.quantity * item.price;
    
}



//Result
alert(`The total cost of all items is ${totalCost} ${clothes[0].currency}`);

