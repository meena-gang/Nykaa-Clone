let isLoggedIn = localStorage.getItem('isLoggedIn') || "false";
if(isLoggedIn != "true"){
    window.location.href = "../index.html";
}

let cartArray = JSON.parse(localStorage.getItem('cart'));

// console.log(cartArray);
let cart = document.getElementById('cartDiv');
function displayCart(){
if(!cartArray || cartArray.length==0){
    let emptyDiv = document.createElement('div');
    emptyDiv.id = "emptyCart"
    emptyDiv.innerHTML = `<div>
                         <img src="../assets/emptyBag.png"/>
                         </div>
                         <h2>Your Shopping Bag Is Empty</h2>
                         <a href = "../home.html" style="text-decoration:none; color: deeppink;"><h3> Start Shopping </h3></a>
                         `
    cart.append(emptyDiv);                  
}   else{
            let totalMRP = cartArray.reduce((acc,currVal) => currVal.price+acc, 0);
            let payPrice = cartArray.reduce((acc,currVal) => currVal.disPrice+acc, 0);
        console.log(cartArray);
            cartArray.forEach((obj,index) => {
            let prdDiv = document.createElement('div');
            prdDiv.className = "prdDiv";
            prdDiv.innerHTML = `<div class="prdInnerDiv">
                                <div class="alignDiv">
                                    <div class="imgDiv">
                                        <img src="${obj.img}" alt="img" width="100%" height="100%"/>
                                    </div>
                                    <p class="productName">${obj.name}</p>
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </div>
                                <div class="priceDiv">
                                    <p>Quantity: 1</p>
                                    <p style="margin-left: 12px; font-size: 18px">₹${obj.dis ? `<s>${obj.price}</s>${"       " +obj.disPrice}`: `${obj.price}`}</p>
                                </div>
                                </div>`
                                cart.append(prdDiv);
                                
                    let deleteBtn = document.getElementsByClassName('fa fa-trash');
                    
                    deleteBtn[index].addEventListener('click',() => deleteFromCart(index));
            })
        
      
            
            
            let priceDiv = document.createElement('div');
            priceDiv.id= "finalPriceDetailDiv";
            priceDiv.innerHTML = `<h2>Price Details</h2>
                                  <div class="finalPriceDiv">
                                        <p>Bag MRP (${cartArray.length} ${cartArray.length > 1 ? 'items':'item'})</p>
                                        <p>₹${totalMRP}</p>
                                  </div>
                                  <div class="finalPriceDiv">
                                        <p>Bag Discount</p>
                                        <p>₹${totalMRP-payPrice}</p>
                                  </div>
                                  <div class="finalPriceDiv" style="border-top: 1px solid lightgray";>
                                        <h3>You Pay</h3>
                                        <h3>₹${payPrice}</h3>
                                  </div>`
            cart.append(priceDiv) ;
        }
    }
        displayCart();
            
        function deleteFromCart(i){
                cartArray.splice(i,1);
                // console.log(cartArray);
                cart.innerHTML = "";
                displayCart();
                localStorage.setItem('cart',JSON.stringify(cartArray));
        }
                                
    