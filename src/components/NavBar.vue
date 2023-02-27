<template>
<div class='container-fluid icon-container '>
    <div class='row'>
        <div class='col-md-12 p-0'>
          <div class='top-icon '>
          <!-- <a><img src='../assets/email.png' class='iconphn'/></a> -->
          <a><img src='../assets/insta.png' class='icon'/></a>
          <a><img src='../assets/whats.png' class='icon'/></a>
          <a><img src='../assets/phn.png' class='iconphn'/></a>
          
         
          </div>
        </div>
    </div>
</div>
<nav class="navbar navbar-expand-lg navbar-light bg-dark nav sticky-top ">

    <div class="container-fluid logo">
       

        <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGD0zbdMGOJMD0QyIJXltUVJqn6WUAiuXuTg&usqp=CAU" class="logo img-fluid" /> -->
        <img src="../assets/images.png" class="logo img-fluid" />

        <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success Search-button" type="submit">Search</button>
        </form>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="list-of-navbar">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <!-- <a class="nav-link " aria-current="page" href="Home">Home</a> -->
                    <router-link class="nav-link" to='/'>Home</router-link>
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link" href="Link">About</a> -->
                    <router-link class="nav-link" to='/About'>About</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Our Solutions & Services
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Mobile App</a></li>
                        <li><a class="dropdown-item" href="#">Web Site</a></li>
                        <li><a class="dropdown-item" href="#">Vue js</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Industries</a> -->
                    <router-link class="nav-link" to='/Industries'>Industries</router-link>
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Our Technologies</a> -->
                    <router-link class="nav-link" to='/Our Technologies'>Our Technologies</router-link>
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Contact us</a> -->
                     <router-link class="nav-link" to='/ContactUs'>Contact us</router-link>
                </li>



            </ul>

        </div>

    </div>
</nav>

<router-view></router-view>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style>

.top-icon{
    background-color:darkorange;
      display: flex;
    justify-content: end;
    padding-right: 6%;
   
}
.top_container {
    padding: 0px;
    margin: 0px;
}
.bg-top {
    background-color: darkorange;
  
}
.icon {
    height:30px;
    width:30px;
    margin-left: 20px;
       cursor: pointer;
}

.iconphn {
    height:21px;
    width:25px;
    margin-left: 20px;
     cursor: pointer;
}

a.navbar-brand {
    color: white;
}

.img-fluid {
    margin-right: 5%;
    height: 30px;
}
.d-flex {
    margin-right: 5%;
}
a.nav-link:hover {
    color: darkorange;
}

a.dropdown-item:hover {
    color: darkorange;
    font-size: larger;
}

.Search-button {
    background-color: darkorange;
    color: black;
    border-color: black;
}

.active {
    color: white;
    margin-right: 10%;
}

.nav-link {
    color: white
}
</style>
