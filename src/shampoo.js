let isLoggedIn = localStorage.getItem('isLoggedIn') || "false";
if(isLoggedIn != "true"){
    window.location.href = "../index.html";
}

let arr = [
    { img:'../assets/shampoo/Redken1.png',
      name: 'Redken Damaged Hair Combo - Acidic Bonding Concentrate Shampoo & Conditioner',
      brandName:'Redken',
      price:4500,
      dis:'10%',
      disPrice:4050,
      rating:4.5,
    },
    { img:'../assets/shampoo/Olaplex2.png',
      name: 'Olaplex No. 4 Bond Maintenance Strengthening Shampoo',
      brandName:'Olaplex',
      price:1700,
      dis:null,
      disPrice:1700,
      rating:2.5,
    },
    { img:'../assets/shampoo/Moroccanoil3.png',
      name: 'Moroccanoil Hydrating Shampoo',
      brandName:'Moroccanoil',
      price:2340,
      dis:null,
      disPrice:2340,
      rating:3.5,
    },
    { img:'../assets/shampoo/Defabulous4.png',
      name: 'De Fabulous Reviver Hair Repair Shampoo + Conditioner',
      brandName:'DeFabulous',
      price:2880,
      dis:null,
      disPrice:2880,
      rating:3.0,
    },
    { img:'../assets/shampoo/Ola5.png',
      name: 'Olaplex Daily Cleanse & Condition Duo',
      brandName:'Olaplex',
      price:6450,
      dis:null,
      disPrice:6450,
      rating:3.5,
    },
    { img:'../assets/shampoo/Forest6.png',
      name: 'Forest Essentials Hair Cleanser Bhringraj & Shikakai Shampoo for Hair Fall & Dandruff',
      brandName:'ForestEssentials',
      price:4250,
      dis:null,
      disPrice:4250,
      rating:3.5,
    },
    { img:'../assets/shampoo/DeFab7.png',
      name: 'De Fabulous Marula Oil Sulphate Free Shampoo - All Hair Types',
      brandName:'DeFabulous',
      price:1620,
      dis:null,
      disPrice:1620,
      rating:4.7,
    },
    { img:'../assets/shampoo/Redken8.png',
      name: 'Redken Anti Breakage Combo - Extreme Shampoo & Strength Builder Plus Mask Infused With Protein',
      brandName:'Redken',
      price:3900,
      dis:'10%',
      disPrice:3510,
      rating:3.5,
    },
    { img:'../assets/shampoo/ForestEssential9.png',
      name: 'Forest Essentials Hair Cleanser Amla, Honey & Mulethi Natural Shampoo for Dull & Dry Hair',
      brandName:'ForestEssentials',
      price:1575,
      dis:null,
      disPrice:1575,
      rating:3.5,
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
    for(let i = 0; i<8; i++){
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