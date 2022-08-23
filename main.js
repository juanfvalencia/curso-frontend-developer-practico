/*Desktop Menu*/

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamburger = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

const aside = document.querySelector(".product-detail");
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");
const cardsContainer = document.querySelector(".cards-container");


const toggleDesktopMenu = () => {

    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');  
}


/*Mobile Menu*/

const toggleMobileMenu = () => {

    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
}


/* Shopping Cart*/ 

const toggleCartAside = () => {

    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    if(!isMobileMenuClosed){
        menuMobile.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleCartAside);


const productList = [];

productList.push({
    name: 'mouse',
    price: '$' + 150,
    img: './assets/mouse.jpg'
});

productList.push({
    name: 'computer',
    price: '$'+ 1500,
    img: './assets/computer.jpg'
});

productList.push({
    name: 'ssd',
    price: '$'+ 200,
    img: './assets/ssd.jpg'
});

productList.push({
    name: 'PC Macbook',
    price: '$'+ 2000,
    img: './assets/macbook.jpg'
});

/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
*/

const cardList = (arr) => {

    for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);

    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = product.price;
    
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productCard.setAttribute('src', '../icons/bt_add_to_cart.svg')
    
    productInfoFigure.appendChild(productImgCard);
    
    productInfo.append(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard)
}
}

cardList(productList)
