window.addEventListener('DOMContentLoaded', () => {


    // MENU CLICKED
    let headerMenus = document.querySelectorAll('#header-menu-wr ul li a');

    // MOBILE MENU
    let mobileMenuTrigger = document.querySelector('.hc-col3-col-2');
    let mobileMenu = document.getElementById('hc-col-2');
    let mobileMenuCloseTrigger = document.querySelector('.close-button-menu');


    
    if(window.innerWidth <= 600) {

        mobileMenuTrigger.addEventListener('click', () => {
            mobileMenu.classList.add('show');
            document.body.style.overflow = 'hidden';
        })

        mobileMenuCloseTrigger.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            document.body.style.overflow = 'visible';
        })


    }

    headerMenus.forEach(headerMenu => {
        headerMenu.addEventListener('click', (e) => {
            e.preventDefault();

            if(window.innerWidth <= 600) {
                mobileMenu.classList.remove('show');
                document.body.style.overflow = 'visible';
            } 

            // AMBIL DATA BUTTON
            let dataButton = headerMenu.getAttribute('data-btn');

            switch(dataButton) {
                case 'about':

                window.scrollTo(0, 0);

                break;

                case 'project':

                let projectSection = document.getElementById('myproject-section');

                projectSection.scrollIntoView();

                break;

                case 'contact':

                let contactSection = document.getElementById('contact-section');

                contactSection.scrollIntoView();

                break;
            }

        })
    })


});
