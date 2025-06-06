import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";



export function renderPaymentSummary(){
    let productPriceCents=0;
    cart.forEach((cartItem)=>{
        const product=getProduct(cartItem.productId);
        productPriceCents+=product.priceCents*cartItem.quantity;

        getDeliveryOption(cartItem.getDeliveryOptionID);

    });
    console.log(productPriceCents);
}