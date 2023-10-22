<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleağis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1
,600;1,700&display=swap" rel="stylesheet">

<template>
    <section class="about">
      <div class="main">
        <img src="../assets/digyy-removebg-preview.png">
        <div class="about-text">
          <h1>About Us</h1>
          <h5>DigyGlobal Software and Technology</h5>
          <p>We offer turnkey solutions that combine Hardware, Software and Content for Hotel, Restaurant, Bar and Spa businesses. In our software, we prepare the content that the user needs professionally in our database, so that the user can choose the information they need and start using it.</p>
          &nbsp;
          <p>In our commercial life, which we started as Calculus Software in 2010, DigyGlobal A.Ş. We started to continue. Our team consists of Hotel professionals, Computer Engineers, Electronics Engineer, Content Managers, Translators and support teams.</p>
          &nbsp;
          <p>With the development of Smart Devices, all hardware can now be managed remotely. We can make room automation, air conditioning automation, online lock and engine components centrally and online manageable in hotels.</p>
          <a href="http://127.0.0.1:5173/contact">
            <input type="button" value="Contact Us">
          </a>
        </div>
      </div>
    </section>
</template>
<script setup>
</script>

<style>
*{
  padding: 0;
  margin: 0;
  font-family: 'Josefin Sans', sans-serif;
  box-sizing: border-box;
}
.about{
  width: 100%;
  padding: 78px 0px;
  background-color: #c8e8e9;
}
.about img{
  height: auto;
  width: 420px;

}
.about-text{
  width: 550px;
}
.main{
  width: 1130px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.about-text h1{
  color: black;
  font-size: 80px;
  text-transform: capitalize;
  margin-bottom: 20px;
}
.about-text h5{
  color: black;
  font-size: 25px;
  text-transform: capitalize;
  margin-bottom: 25px;
  letter-spacing: 2px;
}
.about-text p{
  letter-spacing: 1px;
  line-height: 28px;
  font-size: 18px;
  margin-bottom: 45px;

}
input[type="button"]{
  display: inline-block;
  margin-top: 12px;
  text-decoration: none;
  border: 2px solid transparent;
  font-weight: bold;
  padding: 13px 30px;
  border-radius: 30px;
  transition: .4s;
}
input[type="button"]:hover{
  background: #5029bc;
}
</style>