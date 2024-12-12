// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: "cooking oil",
        price: 10.5,
        type: "grocery",
        offer: {
            number: 3,
            percent: 20,
        },
    },
    {
        id: 2,
        name: "Pasta",
        price: 6.25,
        type: "grocery",
    },
    {
        id: 3,
        name: "Instant cupcake mixture",
        price: 5,
        type: "grocery",
        offer: {
            number: 10,
            percent: 30,
        },
    },
    {
        id: 4,
        name: "All-in-one",
        price: 260,
        type: "beauty",
    },
    {
        id: 5,
        name: "Zero Make-up Kit",
        price: 20.5,
        type: "beauty",
    },
    {
        id: 6,
        name: "Lip Tints",
        price: 12.75,
        type: "beauty",
    },
    {
        id: 7,
        name: "Lawn Dress",
        price: 15,
        type: "clothes",
    },
    {
        id: 8,
        name: "Lawn-Chiffon Combo",
        price: 19.99,
        type: "clothes",
    },
    {
        id: 9,
        name: "Toddler Frock",
        price: 9.99,
        type: "clothes",
    },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    const verificarCart = cart.find((product) => product.id === id);
    if (verificarCart) {
        verificarCart.Qty += 1;
        console.log(cart);
    } else {
        const buscar = products.find((product) => product.id === id);
        const copiaForCart = { ...buscar };
        copiaForCart.Qty = 1;
        cart.push(copiaForCart);
        console.log(cart);
    }

    printCart()
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
}

// Exercise 2
function cleanCart() {
    cart = [];
    printCart()
    const numberOfElement = document.getElementById("count_product");
    numberOfElement.innerHTML= 0;
    console.log(cart);

}

// Exercise 3
function calculateTotal(total) {
    totalWithOutDiscount = 0;
    // Calculate total price of the cart using the "cartList" array
    for (let i = 0; i < cart.length; i++) {
        totalWithOutDiscount += cart[i].Qty * cart[i].price;
    }
    console.log(totalWithOutDiscount);
    return totalWithOutDiscount;
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    //Si existe el atibuto offer, validar si es osible aplicar este descuento si lo es cambiar el price total de este producto
    let totalWithDiscount = 0;

    cart.forEach((item) => {
        if (item.offer) {
            if (item.Qty >= item.offer.number) {

                let totalPrice = item.Qty * item.price

                let discountGroup = totalPrice * (item.offer.percent / 100);

                item.subtotalWithDiscount = totalPrice- discountGroup;

            } else{
                item.subtotalWithDiscount = item.price * item.Qty;
            }
        } else {
            item.subtotalWithDiscount = item.price * item.Qty;

        }
        totalWithDiscount += item.subtotalWithDiscount

    });
    console.log(totalWithDiscount);
    return totalWithDiscount
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom

    //Referencias del DOM
    const cartList = document.getElementById("cart_list");
    const totalPriceElement = document.getElementById("total_price");
    const totalPriceDiscountElement = document.getElementById("total_priceDiscount");
    const numberOfElement = document.getElementById("count_product");


    //Inicializar Contenido 
    cartList.innerHTML = "";
    
    //Calculo de precios 
    const totalWithOutDiscount = calculateTotal();
    const totalWithDiscount = applyPromotionsCart();
    let suma = 0;
    cart.forEach((item) =>{
        suma ++;
        const subtotalWithDiscount = item.subtotalWithDiscount || item.price * item.Qty;
        
        numberOfElement.innerHTML = suma;
        const row =`
            <tr>
                <th scope="row">${item.name}</th>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                <button onclick="removeFromCart('${item.id}')" class="btn btn-secondary p-1">-</button>
                <span id="qty_${item.name}">${item.Qty}</span>
                </td>
                <td>$${subtotalWithDiscount.toFixed(2)}</td>
            </tr>
        `;

        cartList.innerHTML += row;
    });

    totalPriceElement.textContent = totalWithOutDiscount.toFixed(2);
    totalPriceDiscountElement.textContent = totalWithDiscount.toFixed(2);

}




// ** Nivell II **

// Exercise 7
function removeFromCart(id) { 
    console.log(id);
    id = parseFloat(id)
    const index = cart.findIndex((elemento) => elemento.id === id);
    if (cart[index].Qty > 1) {
        cart[index].Qty -= 1;
        console.log(cart);
    } else {
        cart.splice(index ,1)
        const numberOfElement = document.getElementById("count_product");
        let resta  = parseInt(numberOfElement.innerHTML);
        resta -=1;
        numberOfElement.innerHTML= resta;
    }
    
    printCart()

}





function open_modal() {
    printCart();
}
