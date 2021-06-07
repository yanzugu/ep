const app = {
    data() {
        return {
            bulletin: bulletin,
            honors: honors,
            slides: slides,
            slideIndex: 1,
            honorRange: 0,
            bulletinRange: 0
        }
    },
    methods: {
        plusSlides(n) {
            this.showSlides(this.slideIndex += n);
        },
        currentSlide(n) {
            this.showSlides(this.slideIndex = n);
        },
        showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) { this.slideIndex = 1 }
            if (n < 1) { this.slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.slideIndex - 1].style.display = "block";
            dots[this.slideIndex - 1].className += " active";
        },
        currentHonorPage(n) {
            this.honorRange = n;
        },
        currentBulletinPage(n) {
            this.bulletinRange = n;
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        }
    },
    computed: {
        showHonor() {
            return this.honors.slice(this.honorRange * 12, this.honorRange * 12 + 12)
        },
        showBulletin() {
            return this.bulletin.slice(this.bulletinRange * 10, this.bulletinRange * 10 + 10)
        },
        bulletinPageNumber() {
            return Math.ceil(this.bulletin.length / 10)
        },
        honorPageNumber() {
            return Math.ceil(this.honors.length / 10)
        }
    },
    watch: {
        honorRange: {
            handler: "scrollToTop"
        },
        bulletinRange: {
            handler: "scrollToTop"
        }
    },
    components: {
        'nav-component': nav,
        'footer-component': footer
    },
    mounted() {
        this.showSlides(this.slideIndex)
        setInterval(() => (this.showSlides(this.slideIndex += 1)), 8000)
    }
}

Vue.createApp(app).mount('#app')