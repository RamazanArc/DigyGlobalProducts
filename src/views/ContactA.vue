
<!--<template>-->
<!--  <main>-->
<!--    <h1>Contact</h1>-->
<!--    <p>This is contact page</p>-->
<!--  </main>-->

<!--</template>-->
<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <div class="containerr">
    <div class="content">
      <div class="left-side">
        <div class="adress details">
        <span class="material-symbols-outlined">location_on</span>
          <div class="topic">Adress</div>
          <div class="text-one">Doğuyaka Mahallesi, 1219 Sokak, No:9, Daire: 236</div>
          <div class="text-two">ASSİM – Muratpaşa Bld. Abdullah S. Sivil Toplum ve İnovasyon Mrk.</div>
          <div class="text-three">07300 Muratpaşa – Antalya – Türkiye</div>
        </div>
        <div class="phone details">
          <span class="material-symbols-outlined">call</span>
          <div class="topic">Phone</div>
          <div class="text-one"> Çağrı Merkezi 08503039005</div>
          <div class="text-two">WhatsApp Hattı +905346747154</div>
        </div>
        <div class="email details">
          <span class="material-symbols-outlined">email</span>
          <div class="topic">Email</div>
          <div class="text-one">sales@digyglobal.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>Do you have questions or comments about our products?</p>
        <p>Contact us for detailed information and to benefit from our services.</p>
      </div>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name">
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email">
        </div>
        <div class="input-box message-box">
          <textarea></textarea>
        </div>
        <div class="button">
          <input type="button" value="Send Now">
        </div>
      </form>
    </div>
  </div>

</template>
<script>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins" , sans-serif;
}

body{
  min-height: 100vh;
  width: 100%;
  background: #c8e8e9;
  display: flex;
  align-items: center;
}
.containerr{
  width: 80%;
  background: #c8e8e9;
  border-radius: 6px;
  padding: 20px 60px 40px 40px;
  box-shadow: 0 5px 10px rgb(0, 0, 0, 0.2);
}
.containerr .content{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.containerr .content .left-side{
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  position: relative;
}
.containerr .left-side .details{
  margin: 14px;
  text-align: center;
}

.content .left-side .details span{
  font-size: 30px;
  color: #3e2093;
  margin-bottom: 10px;
}
.content .left-side:before{
  content: '';
  position: absolute;
  height: 70%;
  width: 2px;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  background: #afadb6;
}
.content .left-side .details .topic{
  font-size: 18px;
  font-weight: 500;
}
.content .left-side .details .text-one,
.content .left-side .details .text-two,
.content .left-side .details .text-three{
  font-size: 14px;
  color: #afadb6;

}

.containerr .content .right-side{
  width: 75%;
  margin-left: 75px;
}
.content .right-side .topic-text{
  font-size: 23px;
  font-weight: 600;
  color: #3e2093;

}
.input-box{
  height: 50px;
  width: 100%;

}
.right-side.input-box input,
.right-side.input-box textarea{
  height: 100%;
  width: 100%;
  border: none;
  font-size: 16px;
  border-radius: 6px;
  background-color: #f0f1f8;
  padding: 0 15px;
  resize: none;

}
.message-box{
  min-height: 50px;


}
.button{
  display: inline-block;
  margin-top: 12px;
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