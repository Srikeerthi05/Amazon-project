export const order=JSON.parse(localStorage.getItem('orders'))||[];

export function addOrder(order){
    order.unshift(order);
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('orders'.JSON.stringify(orders));

}