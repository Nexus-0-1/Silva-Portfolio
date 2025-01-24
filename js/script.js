/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });




// /*========== contact form ==========*/
// document.querySelector("#sendWhatsApp").addEventListener("click", function (e) {
//   e.preventDefault();

//   const phone = "2348139302498";
//   const fullName = document.querySelector("#fullName").value;
//   const email = document.querySelector("#email").value;
//   const mobile = document.querySelector("#phone").value;
//   const subject = document.querySelector("#subject").value;
//   const message = document.querySelector("#message").value;

//   if (!fullName || !email || !mobile || !subject || !message) {
//     alert("Please fill in all fields before sending the message.");
//     return;
//   }

//   const whatsappMessage = `
//     *Contact Form Submission*
//     Name: ${fullName}
//     Email: ${email}
//     Phone: ${mobile}
//     Subject: ${subject}
//     Message: ${message}
//   `.trim();

//   const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(whatsappMessage)}`;
//   window.open(whatsappURL, "_blank");
// });


document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission and page reload

    // Replace this with your WhatsApp number
    const phone = "2348139302498"; 

    // Get the form inputs
    const fullName = document.querySelector("#fullName").value.trim();
    const email = document.querySelector("#email").value.trim();
    const mobile = document.querySelector("#mobile").value.trim();
    const subject = document.querySelector("#subject").value.trim();
    const message = document.querySelector("#message").value.trim();

    // Construct the WhatsApp message
    const whatsappMessage = `Hello, you have a new message from your website:\n\n` +
        `Name: ${fullName}\n` +
        `Email: ${email}\n` +
        `Mobile: ${mobile}\n` +
        `Subject: ${subject}\n` +
        `Message: ${message}`;

    // Generate the WhatsApp URL with your number
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");
});
