let isLoggedIn = localStorage.getItem('isLoggedIn') || "false";
if(isLoggedIn != "true"){
    window.location.href = "../index.html";
}

let arr = [
    { img:'../assets/foundation/mb.png',
      name: 'Maybelline New York Fit Me Matte+Poreless Liquid Foundation 16H Oil Control - 128 Warm Nude',
      brandName:'Maybelline',
      price:649,
      dis:'25%',
      disPrice:487,
      rating:3.5,
    },
    { img:'../assets/foundation/radiance2.png',
      name: 'M.A.C Studio Radiance Serum-Powered Foundation - NC20',
      brandName:'M.A.C',
      price:3950,
      dis:null,
      disPrice:3950,
      rating:4.5,
    },
    { img:'../assets/foundation/Lakeme3.png',
        name: 'Lakme Absolute Luminous Skin Tint Foundation - Cool Ivory',
        brandName:'Lakme',
        price:875,
        dis:'20%',
        disPrice:700,
        rating:3.8
  },
  {   img:'../assets/foundation/Huda4.png',
      name: 'Huda Beauty Mini Fauxfilter Luminous Matte Full Coverage Liquid Foundation - 140G Cashew',
      brandName:'Huda',
      price:1900,
      dis:null,
      disPrice:1900,
      rating:3.9,
    },
    { 
      img:'../assets/foundation/Forever5.png',
      name: 'Daily Life Forever52 Ultra Definition Liquid Foundation - FLF014 Honey',
      brandName:'Forever52',
      price:949,
      dis:'10%',
      disPrice:854,
      rating:4.8,
    },
    { 
        img:'../assets/foundation/Charlotte6.png',
        name: 'Charlotte Tilbury Airbrush Flawless Foundation - 4 Neutral',
        brandName:'Charlotte',
        price:4600,
        dis:null,
        disPrice:4600,
        rating:3.9,
    },
        { img:'../assets/foundation/Charmacy7.png',
        name: 'Charmacy Milano CMC Matte Foundation - 02',
        brandName:'Charmacy',
        price:1090,
        dis:'5%',
        disPrice:1040,
        rating:4.5,
    },
    {   img:'../assets/foundation/Nyka8.png',  
        name: 'Nykaa Cosmetics Matte to Last Pore Minimizing Foundation - 06Y Medium',
        brandName:'Nykaa',
        price:849,
        dis:'30%',
        disPrice:594,
        rating:3.9,
    },
    {   img:'../assets/foundation/Loreal9.png',    
        name: 'LOreal Paris Infallible 24H Fresh Wear Foundation in a Powder - 20 lvoire Ivory',
        brandName:'LOreal',
        price:1090,
        dis:'10%',
        disPrice:989,
        rating:3.4,
    },
]

let prdsDiv = document.getElementById("prds");
let valDiv = document.getElementById('valueDiv');

valDiv.addEventListener('change',sortByValue);

let cartAmount = JSON.parse(localStorage.getItem('cart'));
if(cartAmount){

      let badgeData = document.getElementById("badge");
      badgeData.textContent = cartAmount.length;
      badgeData.style.fontSize = '18px';
}    
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
    prdArray.forEach((obj,index) => {
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
                        <div class="btnDiv"><button class="bagBtn" value = ${obj.brandName}>Add To Bag</button></div>`
    
    prdsDiv.append(card);
    let btn = document.getElementsByClassName('bagBtn');
    
    btn[index].addEventListener('click',() => addToCart(obj));
    
    })
}
displayData(arr);

let form = document.getElementById('form');
let input = document.getElementsByClassName('inpt');
let brandArr = [];

function brandfilter() {
    brandArr = [];
    for(let i = 0; i<=7; i++){
    if(input[i].checked){
        brandArr.push(input[i].defaultValue);
    }
    }
  let filteredArray = arr.filter((obj) => brandArr.includes(obj.brandName));
    if(filteredArray.length == 0){
        displayData(arr);
    }
    else{
      prdsDiv.innerHTML="";
      displayData(filteredArray);
    }
}

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