class Cart{
cartItems=undefined;



}


function Cart(localStorageKey){
    const cart={
     

   

    saveToStorage:function(){
        localStorage.setItem(localStorageKey,JSON.stringify(this.cartItems));
    },

    addToCart:function(productId){
    let matchingItem;
            this.cartItems.forEach((cartItem)=>{
                if(productId===cartItem.productId){
                    matchingItem=cartItem;
                }
            });
            if(matchingItem){
                matchingItem.quantity+=1
            }else{
                this.cartItems.push({
                    productId:productId,
                    quantity:1,
                    deliveryOptionId:'1'
                });
            }
            this.saveToStorage();
    },

    removeFromCart:function(productId){
        const newCart=[];
        this.cartItems.forEach((cartItem)=>{
            if(cartItem.productId!==productId){
                newCart.push(cartItem);
            }
        });
        this.cartItems=newCart;
        this.saveToStorage();
    },

    updateDeliveryOption:function(productId,deliveryOptionId){
        let matchingItem;
        this.cartItems.forEach((cartItem)=>{
            if(productId===cartItem.productId){
                matchingItem=cartItem;
            }
        });
        matchingItem.deliveryOptionId=deliveryOptionId;
        this.saveToStorage();
    }

};
    return cart;
}


const cart=Cart('cart-oop');
const businessCart=Cart('cart-business');

cart.loadFromStorage();
businessCart.loadFromStorage();


console.log(cart);
console.log(businessCart);








 


 



 


 

  