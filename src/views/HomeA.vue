<template>
<!--    <main class="home-page">-->
<!--      <h1>Home</h1>-->
<!--      <p>This is the home page</p>-->
<!--    </main>-->

  <section class="home" id="home">
    <h1>Products</h1>
    <div class="box-container" >
      <div class="box" v-for="product in urunStore.product">
        <div class="image">
          <img :src="product.image" alt="">
        </div>
        <div class="content">
          <h3>{{product.name}}</h3>
          <h3>{{product.description}}</h3>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
// import productsData from "../../data/products.json"
import {useProductStore} from "../stores/ProductStore.js";
export default {
  setup(){
    const urunStore = useProductStore()
    urunStore.getProducts()
    return {urunStore}
  }
}
</script>

<style>
h1{
  text-align: center;
  padding: 2rem;
}
.home{
  background-color: #c8e8e9;
}
.home .box-container{
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.home .box-container .box{
  flex: 1 1 20rem;
  box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.1);
  border-radius: 5rem;
  border: .1rem solid rgba(0,0,0,.1);
  position: relative;
}
.home .box-container .box .image{
  position: relative;
  text-align: center;
  padding-top: 4rem;
  overflow: hidden;

}
.home .box-container .box .image img{
  height: 10rem;
  border-radius: 5rem;

}
.home .box-container .box:hover .image img{
  transform: scale(1.1);
}
.home .box-container .box .content{
  padding:2rem;
  text-align: center;
}
.home .box-container .box .content h3{
  font-size: 0.8rem;

}
</style>