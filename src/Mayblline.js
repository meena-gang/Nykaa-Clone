let isLoggedIn = localStorage.getItem('isLoggedIn') || "false";
if(isLoggedIn != "true"){
    window.location.href = "../index.html";
}
let arr = [{img: '../assets/bbcream.png', name:"Maybelline Neywork Fit Me Liquid", 
            price: 649, dis: "25%", disPrice: 487,rating: 4 },
            {img: '../assets/blueliner.png', name:"Maybelline Neywork Liquid Eyeliner", 
            price:549, dis: null,disPrice: 549,rating: 4.2 },
            {img: '../assets/mascara.png', name:"Maybelline New York The Colossal Combo - Mascara + Bold Liner + Kajal ", 
            price:713, dis: null,disPrice: 713,rating: 3.8 },
            {img: '../assets/concelar.png', name:"Maybelline New York Instant Age Rewind Concealer - Medium", 
            price:620, dis: null,disPrice: 620,rating: 4.8 },
            {img: '../assets/eyeshadow.png', name:"Maybelline New York Color Rivals Longwear Duo Eyeshadow Palette - Assertive X Coy", 
            price:499, dis: null,disPrice: 499,rating: 3.7 },
            {img: '../assets/foundation.png', name:"Maybelline Neywork Fit Me Liquid", 
            price:329, dis: null,disPrice: 329,rating: 4.5 },
            {img: '../assets/lipgloss.png', name:"Maybelline New York Superstay Vinyl Ink Liquid Lipstick - Lippy", 
            price:849, dis: "10%", disPrice: 765, rating: 4.2 },
            {img: '../assets/eyeliner.png', name:"Maybelline New York Line Tattoo High Impact Liner - Intense Black", 
            price:599, dis: "15%",disPrice: 509,rating: 4.9 },
            {img: '../assets/mascara2.png', name:"Maybelline New York Lash Sensational Sky High Waterproof Mascara - Cosmic Black", 
            price:849, dis: null,disPrice: 849, rating: 4 },
            ]
let prdsDiv = document.getElementById("prds");
let valDiv = document.getElementById('valueDiv');

let cartAmount = JSON.parse(localStorage.getItem('cart'));
if(cartAmount){

      let badgeData = document.getElementById("badge");
      badgeData.textContent = cartAmount.length;
      badgeData.style.fontSize = '18px';
}
valDiv.addEventListener('change',sortByValue);

function sortByValue(){
    if(valDiv.value == "rating"){
        arr.sort((a,b) =>  b.rating - a.rating);
        prdsDiv.innerHTML="";
        displayData(arr);
    }
    else if(valDiv.value == "High to Low"){
        arr.sort((a,b) =>  b.disPrice - a.disPrice);
        prdsDiv.innerHTML="";
        displayData(arr);
    }
    else if(valDiv.value == "Low to High"){
        arr.sort((a,b) =>  a.disPrice - b.disPrice);
        prdsDiv.innerHTML="";
        displayData(arr);
    }
}

    function displayData(prdArray){
    arr.forEach((obj,index) => {
    let card = document.createElement('div');
    card.setAttribute("class","cardDiv")
    let stars = document.createElement('p');

    
               
    card.innerHTML = `<div class="imgDiv">
                        <img src = ${obj.img} alt="img" width="100%" height="100%">
                        </div>
                        <div class="textDiv">
                        <p>${obj.name}</p>
                        <p>MRP: ${obj.dis ? `<s style = "color: #989898;"> ${obj.price}  </s> <span>${"     " +obj.disPrice} | ${obj.dis} Off </span>` : `${obj.price}`}</p>
                        <p>${obj.rating} <span class=\"fa fa-star\"></span></p>
                        </div>
                        <div class="btnDiv"><button class="bagBtn">Add To Bag</button></div>`
    
    prdsDiv.append(card);
    let btn = document.getElementsByClassName('bagBtn');
    
    btn[index].addEventListener('click',() => addToCart(obj));
    
    })
}
displayData(arr);

let cartArray = [];
function addToCart(obj){
    let data = JSON.parse(localStorage.getItem('cart'));
    if(data){
      data.push(obj);
      localStorage.setItem('cart',JSON.stringify(data));
      
      let cartAmount = JSON.parse(localStorage.getItem('cart'));

      let badgeData = document.getElementById("badge");
      badgeData.textContent = cartAmount.length;
      badgeData.style.fontSize = '18px';
    }
    else{
      cartArray.push(obj);
      localStorage.setItem('cart',JSON.stringify(cartArray));
    }
}


let logoutBtn = document.getElementById("signOut");

logoutBtn.addEventListener("click", () => {
  localStorage.setItem("isLoggedIn", 'false')
});