/* ============================ SHOW SIDEBAR ========================= */

/* ============================  SIDEBAR SHOW ========================= */
/* Validate if constant existS */

/* ============================ SIDEBAR HIDDEN ========================= */
/* Validate if constant existS */

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

/* ============================ Link Active Work ========================= */
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
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
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
/* ============================ SCROLL SECTION ACTIVE LINK ========================= */
// get all sections that have an id defined
const sections = documents.querySelectorAll("section[id]");

//add an event listner listening for scroll
window.addEventListener("scroll", naviHighlighter);

function naviHighlighter() {
    // get current scroll position
    let scrollY = window.pageYOffset;
    // now we loop through sections to get height, top and id values for each

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop = 50,
        sectionId = current.getAttribute("ïd");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    });
}