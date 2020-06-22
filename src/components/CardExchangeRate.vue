<template>
  <v-card class="main_card">
    <div class="title_text">
      Future USD
    </div>

    <v-card
    class="white--text align-end"
    style="background-color:#29733C"
    height="60px"
    >
      <div class="subtitile_text">
        BUY
      </div>
      <div class="exchange">
        4.05
      </div>
    </v-card>
  </v-card>
</template>

<style scoped>
  .main_card {
    width: 150px;
    border-radius: 5% 5% 0 0;
    margin: 10px 0px 0px 10px;
  }

  .title_text {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 400;
    font-size: 100%;
  }

  .subtitile_text {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 90%;
    padding-top: 8px;
  }
  .exchange {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    font-size: 120%;
  }
</style>