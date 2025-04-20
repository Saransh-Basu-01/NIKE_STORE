const sliderWrapper = document.querySelector('.sliderWrapper');
const navBottom = document.querySelector('.navbottom'); // common parent of all .navlist items

const slider = function (index) {
    sliderWrapper.style.transform = `translateX(${-100 * index}vw)`;
};

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        description: "The Black Air Force 1 is a popular sneaker by Nike, known for its sleek and iconic design. These shoes are typically made with a premium, black leather upper and feature the classic Air Force 1 silhouette with its exaggerated sole. The shoe also includes the Nike Air cushioning for comfort and support, making it suitable for everyday wear while maintaining a bold street-style appeal.",
        colors: [
            {
                code: "black",
                img: "./images/air.png",
            },
            {
                code: "darkblue",
                img: "./images/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 2000,
        description: "The Air Jordan is a legendary sneaker that blends sport performance with unmatched style. Originally designed for Michael Jordan, this shoe has become a cultural icon. Featuring a high-top design, responsive cushioning, and bold colorways, it offers great ankle support and comfort. Whether you're on the court or hitting the streets, the Air Jordan is built to turn heads and deliver performance.",
        colors: [
            {
                code: "lightgray",
                img: "./images/jordan.png",
            },
            {
                code: "green",
                img: "./images/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 150,
        description: "The Nike Blazer is a vintage-inspired sneaker that captures the essence of 70s basketball culture with a modern twist. Constructed with a durable upper and a solid rubber sole, the Blazer delivers reliable traction and support. Its minimalist yet timeless design makes it a versatile choice for both casual and fashion-forward looks. Perfect for those who appreciate retro vibes with modern comfort.",
        colors: [
            {
                code: "lightgray",
                img: "./images/blazer.png",
            },
            {
                code: "green",
                img: "./images/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 300,
        description: "The Crater is a futuristic sneaker crafted with sustainability in mind. Made using recycled materials, it showcases Nike’s commitment to reducing waste while still delivering style and performance. With its speckled midsole, bold shape, and soft foam cushioning, the Crater offers a unique look and cloud-like comfort. It’s the perfect blend of eco-conscious innovation and cutting-edge design.",
        colors: [
            {
                code: "black",
                img: "./images/crater.png",
            },
            {
                code: "lightgray",
                img: "./images/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 100,
        description: "The Nike Hippie is designed for the environmentally conscious trendsetter. Made from at least 50% recycled materials, this shoe is a symbol of sustainability and creative expression. Its unique patchwork design and comfortable sole make it ideal for those seeking individuality and eco-friendly fashion. Whether you’re out for a walk or making a statement, the Hippie has your back—stylish and sustainable.",
        colors: [
            {
                code: "gray",
                img: "./images/hippie.png",
            },
            {
                code: "black",
                img: "./images/hippie2.png",
            },
        ],
    },
];
let choosenProduct = products[0]; // Default selected product
const curproductImg = document.querySelector('.productIcon');
const curproductTitle = document.querySelector('.productTitle');
const curproductPrice = document.querySelector('.productPrice');
const curproductDesc = document.querySelector('.productDesc');
const curproductColors = document.querySelectorAll('.color');
const curSizes = document.querySelectorAll('.size');

navBottom.addEventListener('click', (event) => {
    // Check if the clicked element has the 'navlist' class
    if (event.target.classList.contains('navlist')) {
        // Convert NodeList to array to get index
        const navItems = Array.from(navBottom.querySelectorAll('.navlist'));
        const index = navItems.indexOf(event.target);
        slider(index);
        choosenProduct = products[index]; // Update the chosen product based on the index
        curproductTitle.innerText = choosenProduct.title;
        curproductPrice.innerText = "$" + choosenProduct.price;
        curproductDesc.innerText = choosenProduct.description;
        curproductImg.src = choosenProduct.colors[0].img; // Set default color image

        curproductColors.forEach((curelem, index) => {
            curelem.style.backgroundColor = choosenProduct.colors[index].code;
        });
    }
});
curproductColors.forEach((curElem, index) => {
    curElem.addEventListener('click', () => {
        curproductImg.src = choosenProduct.colors[index].img;
    });
});
let selectedSize = null; // Variable to store the selected size
curSizes.forEach((curElem) => {
    curElem.addEventListener('click', () => {
        curSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        curElem.style.backgroundColor = "black";
        curElem.style.color = "white";
        selectedSize = curElem;
    });
});
const payment = document.querySelector('.payment');
const productButton = document.querySelector('.productButton');
const close = document.querySelector('.close');

productButton.addEventListener('click', () => {
    if (selectedSize) {
        payment.style.display = "flex";
    }
    else {
        alert("Please select a size");
    }
});
close.addEventListener('click', () => {
    payment.style.display = "none";
});
