<template>

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg" class="d-block w-100" alt="...">
            
            <div class="carousel-caption d-none d-md-block">
                <h1  class="inner-text">Our Solutions and Services</h1>
                <div>
                    <p class="inner-paragraph">Our mission is to form long-term partnerships with our clients,
                         adding value wherever possible to their enterprise through application 
                         development services.</p>
                </div>
                <Button class="inner-btn">Contact us</Button>
              </div>
              
        </div>
          
          <div class="carousel-item">
            <img src="https://images.pexels.com/photos/89955/pexels-photo-89955.jpeg?cs=srgb&dl=pexels-deyvi-romero-89955.jpg&fm=jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h1 class="inner-text">We Can Be Your IT Resource..</h1>
                <div>
                    <p class="inner-paragraph">NexWEB is an information technology firm that provides full IT support 
                        and services for small and medium-sized companies.</p>
                </div>
                <Button class="inner-btn">Learn more</Button>
              </div>
        </div>

        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container-fluid mt-5 ">
        <div class="row">
           <div class="col-md-6">
                <div class="second-part">
                    <h6 class="second-h5">ABOUT COMPANY</h6>
                    <div>
                        <h2 class="second-h2">We work with you to address critical business priorities.</h2>
                        <p class="paragraph">
                            NexWeb is a leading Blockchain, Mobile, Web application, AR/VR,<br/> IoT, and Custom Software Development 
                            company with a team of <br/>experts capable of pushing the limits of the latest technologies for<br/> your business needs.
                        </p>
                    </div>
                </div>
                <div class="Pics-all">
                    <div>
                        <img src='../assets/pic1.png' class="pics"/>
                        <h6><a>Business analysis</a></h6>
                    </div>
                    <div>
                        <img src='../assets/pic2.png' class="pics"/>
                       
                        <h6><a> Prototype Software</a></h6>
                    </div>
                </div>
                <div class="Pics-all">
                    <div>
                        <img src='../assets/pic3.png' class="pics"/>
                        <h6><a>Implementation and <br/>
                            operation support</a></h6>
                    </div>
                    <div>
                        <img src='../assets/pic4.png' class="pics"/>
                        <h6><a>Data Analysis</a></h6>
                    </div>
                </div>
           </div>
           <div class="col-md-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrKBYlaoFixYF2H3MHlIEJ92XogGiPgFGYpA&usqp=CAU" 
            class="second-pic"/>
           </div>
        </div>
      </div>
  
     
     
     

</template>

<script >



export default{
    name: "HomePage",
    components: {  },

}


</script>

<style>
img.d-block {
    height: 70vh;
}
.d-md-block {
    display: block !important;
    top: 29%;
}
.inner-text {
    font-size: 32px;
    font-weight: bold;
    font-family: monospace;
}
.inner-paragraph {
    font-size: 18px;
    font-weight: 800;
    font-family: monospace;
}
button.inner-btn {
    padding: 15px;
    margin: 15px;
    border-radius: 7px;
    font-size: 15px;
    font-weight: bold;
    box-shadow: 0px 0px 13px 2px #e9530b;
    border: none;
}
button.inner-btn:hover {
    background-color: #198754;
    color: white;
    box-shadow: 0px 0px 13px 2px white;
}
h6.second-h5 {
    font-size: 17px;
    font-weight: bold;
    color: #32328d;
}
.second-part {
    text-align: start;
    margin-left: 27%;
}
h2.second-h2 {
    font-size: 32px;
    font-weight: bold;
}
.paragraph{
    font-size: 15px;
    font-weight: bold;
}
.second-pic {
    width: 79%;
    height: 80vh;
}
.Pics-all {
    margin-top: 40px;
    display: flex;
    margin-left: 10%;
    justify-content: space-evenly;
}
.pics{
width: 70px;
height: 70px;
}
.mt-5 {
    margin-bottom: 10px;
}
</style>