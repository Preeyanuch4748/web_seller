function increaseQuantity(element) {
    let quantityElement = element.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity += 1;
    quantityElement.textContent = quantity;
}

function decreaseQuantity(element) {
    let quantityElement = element.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantity -= 1;
        quantityElement.textContent = quantity;
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    if (slides[slideIndex - 1].querySelector("video")) {
        slides[slideIndex - 1].querySelector("video").play();
    }
    
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

// เลือก elements ที่เกี่ยวข้อง
const slideshowContainer = document.querySelector('.slideshow-container');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0; // เก็บค่าลำดับของรูปภาพปัจจุบัน

// เปลี่ยนรูปภาพตามลำดับ
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// ฟังก์ชันเลื่อนรูปภาพไปหน้าถัดไป
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// เรียกใช้งานฟังก์ชันแสดงรูปภาพแรก
showSlide(currentIndex);

// กำหนดให้ฟังก์ชัน nextSlide เรียกขึ้นมาเมื่อคลิกที่ container
slideshowContainer.addEventListener('click', nextSlide);

function updateCartTotal(newTotal) {
    const cartTotalElement = document.getElementById('cart-total');
    const totalPriceElement = document.getElementById('total-price');
    
    cartTotalElement.textContent = `฿ ${newTotal.toFixed(2)}`;
    
    const totalWithDiscount = newTotal > 1000 ? newTotal * 0.9 : newTotal;
    totalPriceElement.textContent = `฿ ${totalWithDiscount.toFixed(2)}`;
}
function addToCart(button) {
    const productCard = button.parentElement.parentElement;
    const productPrice = parseFloat(productCard.querySelector('.price').textContent.split(' ')[1]);

    const quantity = parseInt(quantityElement.textContent);
    const productTotalPrice = productPrice * quantity;

    const currentCartTotal = parseFloat(document.getElementById('cart-total').textContent.split(' ')[1]);
    const newCartTotal = currentCartTotal + productTotalPrice;
    
    updateCartTotal(newCartTotal);

    alert('Product added to cart!');
}

