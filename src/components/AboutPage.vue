<template>
<div class="hero-section">
    <div class="about-text hover-target">

        <router-link class="nav-link" to='/'>home</router-link>
    </div>

    <div class="contact-text hover-target">
     <router-link class="nav-link" to='/ContactUs'>contact</router-link>
    </div>
    <div class="section-center">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <h1>Kuldeep Sharma</h1>
                </div>
                <div class="col-12 text-center mb-2">
                    <div class="dancing">photos</div>
                </div>
                <div class="col-12 text-center mt-4 mt-lg-5">
                    <p>
                        <span class="travel hover-target">
                        <router-link class="nav-link" to='/OfficePic'>pic</router-link>
                        </span>
                        <span class="wildlife hover-target">location</span>
                        <span class="nature hover-target">
                         <router-link class="nav-link" to='/ProjectPic'>project</router-link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

<a href="https://www.excellencetechnology.in/" class="link-to-portfolio hover-target" target=”_blank”></a>
</template>

<script>
export default {
    name: 'AboutPage'
}
</script>

<style>
a {
    cursor: pointer;
}

a:hover {
    text-decoration: none;
}

::selection {
    color: #c4c3ca;
    background-color: #000;
}

::-moz-selection {
    color: #c4c3ca;
    background-color: #000;
}

/* #Cursor
================================================== */

.cursor,
.cursor2,
.cursor3 {
    position: fixed;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    pointer-events: none;
    left: -100px;
    top: 50%;
    mix-blend-mode: difference;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
}

.cursor {
    background-color: #fff;
    height: 0;
    width: 0;
    z-index: 99999;
}

.cursor2,
.cursor3 {
    height: 36px;
    width: 36px;
    z-index: 99998;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out
}

.cursor2.hover,
.cursor3.hover {
    -webkit-transform: scale(2) translateX(-25%) translateY(-25%);
    transform: scale(2) translateX(-25%) translateY(-25%);
    border: none
}

.cursor2 {
    border: 2px solid #fff;
}

.cursor2.hover {
    background: rgba(255, 255, 255, 1);
    border-color: transparent;
}

@media screen and (max-width: 1200px) {

    .cursor,
    .cursor2,
    .cursor3 {
        display: none
    }
}

/* #Primary style
================================================== */

.hero-section {
    position: relative;
    width: 100%;
    display: block;
    overflow: hidden;
    height: 100vh;
    background-image: url('http://www.ivang-design.com/svg-load/portfolio/photo.jpg');
    background-size: cover;
    background-position: center;
    transform: scale(1) rotateX(0);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
    -webkit-transition-delay: 400ms;
    transition-delay: 400ms;
    transform-origin: center top;
}

.hero-section h1 {
    color: #fff;
    font-size: 5vw;
    line-height: 1;
    font-weight: 900;
}

.hero-section .dancing {
    font-family: 'Dancing Script', cursive;
    letter-spacing: 1px;
    color: #866BAF;
    font-size: 26px;
    line-height: 1;
    font-weight: 700;
}

@media screen and (max-width: 580px) {
    .hero-section .dancing {
        font-size: 18px;
    }
}

.hero-section p {
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
    color: #fff;
    letter-spacing: 1px;
}

.hero-section p span {
    margin-left: 15px;
    margin-right: 15px;
    position: relative;
    display: inline-block;
    cursor: pointer;
    padding-bottom: 35px;
}

.hero-section p span:before {
    position: absolute;
    content: '';
    bottom: 10px;
    left: 50%;
    height: 30px;
    width: 30px;
    margin-left: -15px;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px 30px;
    background-image: url('http://www.ivang-design.com/svg-load/portfolio/down.svg');
    opacity: 0.2;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}

.hero-section p span:hover:before {
    opacity: 1;
    bottom: 5px;
}

body.about-on .hero-section {
    transform: scale(0.75);
    -webkit-transition-delay: 0ms;
    transition-delay: 0ms;
}

body.contact-on .hero-section {
    transform: scale(0.75);
    -webkit-transition-delay: 0ms;
    transition-delay: 0ms;
}

body.travel-on .hero-section {
    transform: rotateX(-10deg);
    -webkit-transition-delay: 0ms;
    transition-delay: 0ms;
}

body.wildlife-on .hero-section {
    transform: rotateX(-10deg);
    -webkit-transition-delay: 0ms;
    transition-delay: 0ms;
}

body.nature-on .hero-section {
    transform: rotateX(-10deg);
    -webkit-transition-delay: 0ms;
    transition-delay: 0ms;
}

.about-text {
    position: absolute;
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 2px;
    top: 50%;
    left: 40px;
    cursor: pointer;
    z-index: 2;
    -webkit-writing-mode: vertical-lr;
    writing-mode: vertical-lr;
    transform: translateY(-50%);
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}

.about-text:before {
    position: absolute;
    content: '';
    top: 50%;
    left: -25px;
    height: 30px;
    width: 30px;
    margin-top: -15px;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px 30px;
    background-image: url('http://www.ivang-design.com/svg-load/portfolio/left.svg');
    opacity: 0.2;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}

.about-text:hover:before {
    opacity: 1;
    left: -30px;
}

.about-section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    overflow: hidden;
    height: 100vh;
    background-color: rgba(31, 32, 41, 1);
    transform: translateX(-100%);
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
    z-index: 10;
}

body.about-on .about-section {
    transform: translateX(0);
    -webkit-transition-delay: 400ms;
    transition-delay: 400ms;
}

.about-close {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
    display: block;
    overflow: hidden;
    height: 30px;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 36px 36px;
    background-image: url('http://www.ivang-design.com/svg-load/portfolio/close.svg');
    cursor: pointer;
    z-index: 11;
}

.about-close:hover {
    transform: rotate(90deg);
}

.section-center {
    position: absolute;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
}

.about-section img {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    display: block;
    margin: 0 auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.about-section p span {
    font-family: 'Dancing Script', cursive;
    letter-spacing: 1px;
    color: #866BAF;
    font-size: 25px;
    font-weight: 400;
}

.contact-text {
    position: absolute;
    font-size: 17px;
    line-height: 20px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 2px;
    top: 50%;
    right: 40px;
    cursor: pointer;
    z-index: 2;
    -webkit-writing-mode: vertical-lr;
    writing-mode: vertical-lr;
    transform: translateY(-50%) rotate(180deg);
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}

.contact-text:before {
    position: absolute;
    content: '';
    top: 50%;
    left: -25px;
    height: 30px;
    width: 30px;
    margin-top: -15px;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30px 30px;
    background-image: url('http://www.ivang-design.com/svg-load/portfolio/left.svg');
    opacity: 0.2;
    -webkit-transition: all 200ms linear;
    transition: all 200ms linear;
}

.contact-text:hover:before {
    opacity: 1;
    left: -30px;
}

.contact-section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    overflow: hidden;
    height: 100vh;
    background-color: rgba(31, 32, 41, 1);
    transform: translateX(100%);
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
    z-index: 10;
}
</style>
