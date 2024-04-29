export class Extras {
    /**
     * Executes the provided callback function when the DOM content is loaded.
     * @param {domContentLoadedCallback} callback - The callback function to execute when the DOM content is loaded.
     */
    addAnimation(callback) {
        document.addEventListener("DOMContentLoaded", function () {
            const header = document.querySelector('.animated-header');
            const footer = document.querySelector('.animated-footer');

            setTimeout(() => {
                header.classList.add('animated-element');
                footer.classList.add('animated-element');
            }, 500);

            if (typeof callback === 'function') {
                callback();
            }
        });
    }

    /**
     * Moves the carousel to the next item every 3 seconds.
     */
    startCarousel() {
        setInterval(() => {
            const carousel = document.querySelector(".carousel");
            const firstItem = carousel.firstElementChild;

            carousel.style.transform = "translateX(-100%)";

            setTimeout(() => {
                carousel.append(firstItem);
                carousel.style.transition = "none";
                carousel.style.transform = "translateX(0)";
                setTimeout(() => {
                    carousel.style.transition = "";
                }, 500);
            }, 1000);
        }, 3000);
    }
}