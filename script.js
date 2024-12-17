let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

let productList = document.getElementById('#productList'); 

products.forEach(product => {
    const listItem = document.createElement('li');
    listItem.textContent = product;
    productList.appendChild(listItem);
});



