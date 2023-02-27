<template>
<footer class="footer-section">
        <div class="container">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span> C-133 First Floor, Phase 8, mohali</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>9876543210</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>sjeetsingh2806202201@.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABfVBMVEX/////kU0AAAD/iz//2sn/j0j/7uX/llPycDj6+vr/jUT/jkf29vb/zbHR0dHw8PDU1NRtbW0pKSnp6emhoaFYWFjk5OTHx8e4uLj/n2bm5uY/Pz80NDSzs7Pb29uZmZlISEj/mVvyay4cHByLi4uDg4MjIyP/3Mn/sYX/rH7/pHC/v7/+9vLyaSr97ORPT09eXl51dXX/07z/wqH2n3z5vKP1kGYUFBQwMDD/vpn/5dVgbnj4sZX5xK/zeEH3pYP0gVD/2MD/hTL/uJDY5f2mrbL0h1b70cL2on/849r4tZnxYxr1jWL/roL95tP5/fSvyfpPjvaQtfmU0KP2jAD4rGj0d1fxUyWLyUKEvifE3554pfhQtWt9iJFwfYb9y6P61dLznJf94JnI2v35wr9clPaIsPjky9jvYlT9013+5bH/yDLsu7HyhX7rPCs+Ul/0dxfykHig0WnS6LT/y0altdrjcWB9xOteteX+6rslntr7tQ391Xr3sKz/+eakrtYUAAAMYUlEQVR4nO2cjX/axhnHj8MySOgNCyMESLwYLBAythFgA8bvNiV1lpeu7brEWZqXLm2XOeu6tetL/vY9J2EHbJytn2GItfs6CL2cjvvd83InCYKCfgfN+R1EoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCi/FduuVvv9qm3PuiE3Q7W2VSc0j4+bO93qrJszcXo7W92+bbMIsfb8XKMZbvbYWbdpkvS3LhnN7tfDJz2yMpsGTRi70R0jpFpfqdvVO9NvzuSpNvoj23af/Pyhb6Pa7u7Wrg+MWO0Nieh3PzreDgP58Pbxzg6s3un1+teffBuw2+9Wu83t3Xqj1yf0GvVd0BleWdm53WZkLzKM3Tg+bvSH1dhzdZDYmEGrJsmFornjZu/K0cZKeOW2Kxxgb51c1Yfs5k51q3m7nXSAXR8bbHYXbDznB4XVZndoy+51uxe/lfOHj9r1YQ+tNiF/huue5fr12TRpwmyNhGB9hYyHKzvuxo4vFHaHXRT1wx7bZBip5rdm1KhJcmnq2VvxFOZJKG593B1/0q2iMXpV0csPjAhztXZ4xQc/z61espK960rMH8N8p573w8T7ytV8z51574LxuvkVH4ShfXUqM3ccDp+AwLntfNgHNzOqly6N7Lmdk21y6dTc2c7n/TDe90cDrdfMb9e3mhCK+TzEog+iEI3kyn7z4xWwX7PX8AaMMZPx28ewk1bv3Gk0GjuQTLu7RODOzFo1Scakkupxvtkk6dQHaQaNv1vYC++egAl9MFIQxl4WnoR3/aNwLFtkWuNrhV0y+8774mbwNXgK/TDcX4fnpX64cLqOpnt54YMLp+vou1cXZNbtqwdsQ7hOGt5lfavQu1NDBgufCrS9KCTTbt6fEre8W1Hbtl9tWIMrw5PdcP6jWTfkppjbXtntkls17mWVD404tx2+Y6OdvG8npXPb9SoZD/Mnfrh/MYa5ujuP2VnZvuWP7q+j6t2XqYbDfp6SAnVfX1UAcx/7XKDd9LnAS08T/Yg/biFSKBTKBPDpvJlCuY3EZdHFGN4pi/y1J7CifKkGcVCDdz+Dv1KVIUqjZ0ijRW4SKZPGA1LD91vSWLz2nCReHpUfPa9ioajApohTw0cXsLiIK6NV6HhxSnd3DNC3lHbZXBs+8BsVLrtVLGO8oYLRNkaqWl02FnFitIqpKYwv43RFGnckheVxu12SeOGywpj7zqureGzPrM7MhlGcGtLHGnFvxTBAoW4YRAerxC+KSHGF7CIK+XicH6omNljj13CKH9QjDYpAPas4ZhiSW5uhEGnTUihiPBzwMt50xbAYKykSVtDxiSy8r7l2kUm4pXTXS4vgkAuFc+nvFKLkEq7IJA4lUmS5wA/iEIAyKllZVKenMIaz6jnglHG8RBIFUvCGlMLpVEqFEngj7WkVocXpDYwLoBDYXADl/BWFqIiLBijkoWcWvCKbROFmarMCuqAKeCWmprCA35GF7SWc8Rq5yKYgnlhkgCAWSVG8ILFZvKiwPEhWFTCOyLLqMqi9olDHa0RhES+oLFvZgCJpojABtcWXcFFipXW8oSSmpDCDl1ID0lHYTmC8rqpRYrKUmzEKOCXLoqxuYF3Ey65TFsA5sZc4KhiPUxg1cPa8SAIcP30+WsTwKpHFQlROS6EOTWF5D/cDi549C8hTyK5dmLiQwIMhgAUvXXLdU1nG0hWFa7gACo1Bf/AYJy8UrnsuAh27Pi2FMFjow9uQ83AaAiUqoazbpiheyoKBs9lUrIJX3TKKnFQGo4WygL3kO6RQxViWcRZCOukWwTiexvKa+znFgVcXpqcQenNkoCriTZXlIXgyJBYR8as0yT0KDB8QkpADSQYBL71QmLykUNzE65Cis/zmeUgThUYGnMV1WdIj8c0pKmQh5qK6OphV8gO9Ok7z8Q28mOD5NM7qYmyBtAcSREbVVyFNKFcVFt25bWJ9A69K7qxNJyFdWceeDcGfs7oELpKOiTFwkukpRGzxXTZNGZAy3Z0wHpI0AnqNBS/RgiUlLyiX1ItZ25CXXgAO7s1LL/I0UegONTEUTw32TVEhzDgyq5sLhOU1Y2PRbTm7uQmK4gUYD5EUyy4s6l5rEmub2QwcUTaybjlp1Rs/UXHZrWEhW/CmBm5SEtfT6SKEpbK6AdMKJZOGqSkfW1xYjcU2CiqO+uS5atEbIPwKq67jyxcV/iLuTUZ9jLK2PrUreQqFQpky8x8qk3qOMh9hPkyCwqQUMoEPE25iCmet5DpuVCHzPruSg5eOM5HhPZH3tTvCBLjZKwyaZnCgxGt4pKW5K+7CdLiQwA1LYjRzz8x5O5hApHR+4qArzvuLvEVKplnj3GJOqVRmRgpMTSGj1WqgqFwOMFY5F8oF3BejcTloUSBkmoEc9EA5FwFRoQAc4/bKQS6Qg1VOK2uBthViylokkLNyoXIoELG0SAhKkUOBXJvZF1pMztKCTikEu8s5JmJZ48x6gwo56F0nWBMcbk8QhFIr6JQFTTAda8/Z40Bh6yBkBvccM2dy5XZQKDOcGYK27wXLTnmv1bLmnRyULOXmW+2aAwWE2kG5XTvYax0wjFULQv9o804755RapZYJBRwBPmqqCoNmgDMZE8zS3rcEEAsKrZq1L5RCbbCaCcdNbS/UcgTLMUNtLuApNINl4cC0gkEzmDP3c3Nabd8p7be5dsgyy8K+s2cFA0xZIH1kwWaJKHTK+zXN1HLt4HS9dN4050EIM1C4T2xY04hVHVehUDattuNYZad2cBcaFzRDkQioKgsgEjqAA7UhU6sFnYNgm5l3nNJdh4vAIY6x9oIRbc8Sgq0DV2EpKJCqDsZkp5tTyJSEfbCXedeKtK2WAF1sEhtqXEvIaSQOuVDbBAFaKDQvhNpgFM6pWeVQ23KEnGWZwbaVa2uOMFDImZaWKwmcZllt0NEuWW3rXCG8gjVrr6TlphqHjAU6NCsnCIwGcRg8EEqQMyBlMC3BgTbeZbiDMmcJgsYcgGySZbkDwQlYwoEFJ2gRS9A0wWFyZZJjSgxUVM5ZEfcE6CDwbY5sapamwSsCucwRSmOy6U16qbfgYEQIWgIX4cho56Z6LuIdhkGNgcPkPeKWjpDCHBnrOHKIrAe8k4h+so+c4BZ135iLv/MCU1U4TM6a2aRucgr/4wRmRkxu5h36QGEmpZBCofzf8Lv5kU0buHfv3owa819x/8GDh6N72E/e91jp958i1N4/l2l/9vnnx3/44os/3lTzxiOLrCHLSJZZSTZkCZayJLGyHJdk8uSTLJMIeY95Hz4CkaOK7j2+MMkp4k/JI0XlFBbs0RMVbPinEmtzsMt91HihUFEQayQvPc5gdeVGBBb0SjxaqUjRylo8kVUrYjGRMApisSJnYrECQrCM6WLc/XYB/8A75+mXLxB69uwtOnz4/PDxvRdfej8tOUN8x4ijuNwxDKR2RBVJqjL/aVubR53KiMJEBokFnkcSy5KF+w8Zibh+TSP/J9ag4QWFV3SUkdA6EkXy5aCCHFNQRkFRFmVEOYaiRVYF00kvEfrq0aM/v3r66sXXz7759vDB4cv7j//y+sVf3ZucZ0dHnaNTdHp0dvrkyDhLIOnsqCOab+6+6T95Qixv/+2zz+rffffd3ysxXtdllfSlGqvERD2pqxk1pmbGfn9wAgqjuiytFYrIU1jIgMJ1Xcok0TooBFAlhmTynwo8IC14ABZ8+vpnhL7/x310eP/xP1+/fsqOKOwQe8qnpxUw1am2hxofPXEdkP3hxx9/+Prr77+pyHoFFBbAM9kYiiV1UUcxWZVu5EEqmEnKQKDoLCiMIlWEN6kgwmdlFD5KlkS3juJExPOXz58/evj01dPXL75/9q9vD18ePgIbvnr6pacQvDTxROqInbjRkVSxk+hIR0etu/PNxhP30T77408//fDzzz8/S0gFhdhQN3Sk67Cs6HosXuELN2HDZKGgQKjxIkrwCITEIWL4ipKJJdQM+UICLA2UlMlR4PCrr54j9OL1rwj98stb9Pzhw/ufoF9fv3Cr6iCpw2fOjpB61okrnTO10umc2nebb3bQ0Rl/rvBbUMgj+GNZlIRYZJMsr5AlhKTyoT3uP3x0+Oj5e44fHSH0pvZu+0LhjbdsYhzef59AJEmXfrDCSxL/9u3bD3rIp1AoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFMo4/g32UaL/4j3YqAAAAABJRU5ErkJggg==" class="img-fluid" alt="logo"
                                    style="height:150px; width:100%"></a>
                            </div>
                            <div class="footer-text">
                                <p>.........</p>
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address">
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Kuldeep Sharma</a></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>


<script>
export default {
    name: 'FooterMain'
}
</script>

<style>
ul {
    margin: 0px;
    padding: 0px;
}
.footer-section {
  background: #151414;
  position: relative;
}
.footer-cta {
  border-bottom: 1px solid darkorange;
}
.single-cta i {
  color: #ff5e14;
  font-size: 30px;
  float: left;
  margin-top: 8px;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;
}
.cta-text h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}
.cta-text span {
  color:#878787 ;
  font-size: 15px;
}
.footer-content {
  position: relative;
  z-index: 2;
}
.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}
.footer-logo {
  margin-bottom: 30px;
}
.footer-logo img {
    max-width: 200px;
}
.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
  color:#878787;
  line-height: 28px;
}
.footer-social-icon span {
  color: #fff;
  display: block;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
}
.footer-social-icon a {
  color: #fff;
  font-size: 16px;
  margin-right: 15px;
}
.footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}
.facebook-bg{
  background: darkorange;
}
.twitter-bg{
  background: darkorange;
}
.google-bg{
  background: darkorange;
}
.footer-widget-heading h3 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}
.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: darkorange;
}
.footer-widget ul li {
  display: inline-block;
  float: left;
  width: 50%;
  margin-bottom: 12px;
}
.footer-widget ul li a:hover{
  color: darkorange;
}
.footer-widget ul li a {
  color:#878787;
  text-transform: capitalize;
}
.subscribe-form {
  position: relative;
  overflow: hidden;
}
.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: #2E2E2E;
  border: 1px solid #2E2E2E;
  color: #fff;
}
.subscribe-form button {
    position: absolute;
    right: 0;
    background: darkorange;
    padding: 13px 20px;
    border: 1px solid darkorange;
    top: 0;
}
.subscribe-form button i {
  color: #fff;
  font-size: 22px;
  transform: rotate(-6deg);
}
.copyright-area{
  background: #202020;
  padding: 25px 0;
}
.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: #878787;
}
.copyright-text p a{
  color: darkorange;
}
.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}
.footer-menu li:hover a{
  color: darkorange;
}
.footer-menu li a {
  font-size: 14px;
  color: #878787;
}
</style>
