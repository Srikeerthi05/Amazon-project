export const order=JSON.parse(localStorage.getItem('orders'))||[];

function addOrder(order){
    order.unshift(order);
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('orders',J)
}