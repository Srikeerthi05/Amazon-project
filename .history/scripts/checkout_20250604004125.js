import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts,loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';
// import '../data/cart-class.js' ;
// import '../data/backend-practice.js';

async function loadPage(){
     try{
        await loadProductsFetch();

        const value=await new Promise((resolve)=>{
            loadCart(()=>{
                resolve('value3')
            });
        });
     }catch(error) {
        console.log('error ,try again ')

     }
     renderOrderSummary();
     renderPaymentSummary();

}
loadPage().then(()=>{
    console.log('next step');
});

Promise.all([
    loadProductsFetch(),
    new Promise((resolve)=>{
    loadProducts(()=>{
        
        resolve();
    });
}),
    new Promise((resolve)=>{
    loadCart(()=>{
        resolve();
    });
    })

]).then(()=>{
    renderOrderSummary();
   renderPaymentSummary();

});
// new Promise((resolve)=>{
//     loadProducts(()=>{
        
//         resolve();
//     });
    
// }).then(()=>{
//     return new Promise((resolve)=>{
//     loadCart(()=>{
//         resolve();
//     });
//     })
      
// }).then(()=>{
//       renderOrderSummary();
//    renderPaymentSummary(); 
// });
// // loadProducts(()=>{
// //     loadCart(()=>{
// //          renderOrderSummary();
// //     renderPaymentSummary(); 
// //     })
    
// // })
 
 