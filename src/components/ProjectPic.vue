<template>

<section class="gallery">
  <div class="container">
    <div class="grid">
      <div class="column-xs-12 column-md-4">
        <figure class="img-container">
         <img src='../assets/r1.jpg' class='imgs'/>
         <img src='../assets/r1.jpg' class='imgs'/>
          
          <span class="img-content-hover">
            <h2 class="title">Eatmate</h2>
          
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-4">
        <figure class="img-container">
           <img src='../assets/r2.jpg' class='imgs'/>
           <img src='../assets/r2.jpg' class='imgs' />
          
          <span class="img-content-hover">
            <h2 class="title">Campyfy</h2>
           
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-4">
        <figure class="img-container">
                <img src='../assets/r4.jpg' class='imgs'/>
           <img src='../assets/r4.jpg' class='imgs' />
          <figcaption class="img-content">
            <h2 class="title">Coffee</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Coffee</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-6">
        <figure class="img-container">
          <img src="https://source.unsplash.com/JYGnB9gTCls" />
          <figcaption class="img-content">
            <h2 class="title">Phone</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Phone</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-6">
        <figure class="img-container">
          <img src="https://source.unsplash.com/-RBuQ2PK_L8" />
          <figcaption class="img-content">
            <h2 class="title">Keyboard</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Keyboard</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12">
        <figure class="img-container">
          <img src="https://source.unsplash.com/P44RIGl9V54" />
          <figcaption class="img-content">
            <h2 class="title">Wrist Watch</h2>
            <h3 class="category">Showcase</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Wrist Watch</h2>
            <h3 class="category">Showcase</h3>
          </span>
        </figure>
      </div>
    </div>
  </div>
</section>


</template>

<script>

export default{
    name:'ProjectPic'
}

</script>

<style>


.title {
  color: $black;
  font-size: 1.5rem;
  font-weight: 700;
}

.category {
  font-size: 1rem;
  color: $gray;
}

.img-content {
  display: none;
}

.social, .copyright {
  margin: 1rem;
}

.social li {
  display: inline-block;
}

footer {
  padding: 1rem 0;
  background: $footer;
  text-align: center;
}

@supports (display: grid) {
  .gallery .grid {
    grid-gap: 1rem;
  }
}

@media(min-width: $md) {
  nav ul {
    justify-content: flex-end;
  }
}

@media screen and (max-width: 1024px) {
  img:hover {
    transform: none;
  }
  
  .img-container {
    height: 100%;
    &:hover .img-content-hover {
      display: none;
    }
  }

  .img-content {
    display: block;
    padding: 1rem 0;
  }
}
</style>
