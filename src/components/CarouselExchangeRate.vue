<template>
  <div class="top_carousel">
    <v-carousel class="carousel_items" hide-delimiters style="height: 200px">
      <v-carousel-item>
        <CardExchangeRate/>
      </v-carousel-item>

      <v-carousel-item>
        <CardExchangeRate/>
        <div>aaaaa</div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>


<style scoped>
	.top_carousel {
    width: 50%;
  }
  .carousel_items {
    padding: 10px 10px 10px 40px;
  }
</style>