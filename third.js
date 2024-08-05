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



const sortClothesAsc = clothes.sort((a, b) => {
    return a.price - b.price;
    });

console.log(sortClothesAsc);

