/* ============================ SHOW SIDEBAR ========================= */
document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.getElementById('sidebar'),
          navToggle = document.getElementById('nav-toggle'),
          navClose = document.getElementById('nav-close')
/* ============================  SIDEBAR SHOW ========================= */

if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-sidebar")
    })
}


/* ============================ SIDEBAR HIDDEN ========================= */
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-sidebar")
    })
}

})


/* ============================ SCROLL SECTION ACTIVE LINK ========================= */
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav_link');

    // Function to set the initial active link
    function setInitialActiveLink() {
        navLinks.forEach(link => {
            link.classList.remove('active-link');
        });
        // Add 'active-link' class to the Home link
        document.querySelector('.nav_link[href="#home"]').classList.add('active-link');
    }

    // Call the function to set the initial active link
    setInitialActiveLink();

    window.addEventListener('scroll', function() {
        let current = '';

        // Iterate over each section to determine which one is in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3 && 
                pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        // Remove the 'active-link' class from all navigation links
        navLinks.forEach(link => {
            link.classList.remove('active-link');
        });

        // Add the 'active-link' class to the navigation link corresponding to the current section
        const currentNavLink = document.querySelector('.nav_link[href="#' + current + '"]');
        if (currentNavLink) {
            currentNavLink.classList.add('active-link');
        }
    });
});


/* ============================ SKILLS TABS ========================= */
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('[data-target]'),
          tabContent = document.querySelectorAll('[data-content]');

    console.log("tabs:", tabs);
    console.log("tabContent:", tabContent);

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target);

            // Add a check for null
            if (!target) {
                console.error("Target element not found");
                return;
            }

            console.log('target:', target);

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills_active');
            });

            target.classList.add('skills_active');

            tabs.forEach(tab => {
                tab.classList.remove('skills_active');
            });

            tab.classList.add('skills_active');
        });
    });
});


/* ============================ MIXITUP FILTER PORTFOLIO ========================= */
document.addEventListener('DOMContentLoaded', function () {
   let mixerPortfolio = mixitup('.work_container', {
        selectors: {
            target: '.work_card'
        },
        animation: {
            duration: 300
        }
    });
});

/* ============================ Active Work item ========================= */
document.addEventListener('DOMContentLoaded', function () {
    let linkWork = document.querySelectorAll('.work_item')
    
    function activeWork() {
        linkWork.forEach(l => l.classList.remove('active-work'))
        this.classList.add('active-work')
    }

    linkWork.forEach(l => l.addEventListener("click", activeWork))
});
/* ============================ Work popup ========================= */
document.addEventListener("DOMContentLoaded", function () {
    const portfolioPopup = document.querySelector(".portfolio_popup");
    const portfolioCloseBtn = document.querySelector(".portfolio_popup-close");

    // Event listener for clicking on work buttons
    document.querySelectorAll(".work_button").forEach(button => {
        button.addEventListener("click", function() {
            const workCard = this.closest(".work_card");
            const workTitle = workCard.querySelector(".work_title").textContent;
            const detailsTitle = workCard.querySelector(".details_title").textContent;
            const detailsDescription = workCard.querySelector(".details_description").innerHTML;
            const detailsInfo = workCard.querySelector(".details_info").innerHTML;
            const thumbnailSrc = workCard.querySelector(".work_img").src;

            document.querySelector(".portfolio_popup-subtitle span").textContent = workTitle;
            document.querySelector(".details_title").textContent = detailsTitle;
            document.querySelector(".details_description").innerHTML = detailsDescription;
            document.querySelector(".details_info").innerHTML = detailsInfo;
            document.querySelector(".portfolio_popup-img").src = thumbnailSrc;

            portfolioPopup.classList.add("open");
        });
    });

    // Event listener for closing the portfolio popup
    portfolioCloseBtn.addEventListener("click", function() {
        portfolioPopup.classList.remove("open");
    });
});

/* ============================ SERVICES MODAL ========================= */
document.addEventListener("DOMContentLoaded", function () {
    const modalBtns = document.querySelectorAll('.services_button');
    const modalCloses = document.querySelectorAll('.services_modal-close');

    modalBtns.forEach((modalBtn) => {
        modalBtn.addEventListener('click', () => {
            const modal = modalBtn.nextElementSibling;
            modal.classList.add('active-modal');
        });
    });

    modalCloses.forEach((modalClose) => {
        modalClose.addEventListener('click', () => {
            const modal = modalClose.closest('.services_modal');
            modal.classList.remove('active-modal');
        });
    });
});

/* ============================ SWIPER TESTIMONEAL ========================= */
document.addEventListener('DOMContentLoaded', function () {
    let swiper = new Swiper(".testimonials_container", {
        spaceBetween: 24,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          },
      });
}); 
/* ============================ INPUT ANIMATION ========================= */
document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc() {
        let parent = this.parentNode;
        if(this.value == "") {
            parent.classList.remove("focus");
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    }); 

});


/* ================= send email =============================*/
function sendMail() {
    let parms = {
        name : document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_datexoa", "template_id8bxhb", parms).then(function(response) {
        console.log("Email sent successfully:", response);
        alert("Submitted Successfully!");
    }, function(error) {
        console.error("Email sending failed:", error);
        alert("Submission failed. Please try again later.");
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".nav_toggle");
    const navLinks = document.querySelectorAll(".nav_link");
    const navClose = document.querySelector(".nav_close");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function() {
           navClose.click();
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const contactHomeButton = document.getElementById("home_contact-btn");
    const contactSection = document.getElementById("contact");

    contactHomeButton.addEventListener("click", function() {
    contactSection.scrollIntoView({ behavior: "smooth" });
});

})


/* ==================== scroll up button ================== */
// Function to scroll to the top of the page smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Function to toggle the visibility of the scroll-up button based on the scroll position
function toggleScrollButton() {
    var scrollButton = document.getElementById("scrollUpBtn");
    var footerSection = document.getElementById("footer");

    // Check if the contact section exists and is in view
    if (footerSection) {
        var footerSectionRect = footerSection.getBoundingClientRect();

        // Show the scroll-up button if the contact section is in view
        if (footerSectionRect.top < window.innerHeight && footerSectionRect.bottom >= 0) {
            scrollButton.style.bottom = "20px"; // Adjust to show the button
        } else {
            scrollButton.style.bottom = "-50px"; // Adjust to hide the button
        }
    }
}

// Add event listeners for page load and scroll events
window.addEventListener("load", toggleScrollButton);
window.addEventListener("scroll", toggleScrollButton);


