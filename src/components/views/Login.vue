<template>
  <div class="container-fluid">
    <div class="row">
      <div class="d-none d-md-block col-md-4 leftBlockImg">
        <img src="../../../public/bgmain.jpg" alt="Logo"/>
      </div>

      <div class="col-md-8 col-md-4 d-flex justify-content-center align-items-center p-4 p-md-5 rightText">
          <div class=" p-0 p-md-5 d-block">
        <h1 class="text-muted">
          <span>
          Добро пожаловать в систему управления продажами
            <b>БРОНЕВ</b>
          </span>
        </h1>
        <br>
            <h4 class="m-0">
            <span class="text-muted">Для продолжения работы необходимо пройти авторизацию</span>
            </h4>
        <hr>
        <button class="btn btn-outline-primary col-12 col-md-6">Войти</button>
        <hr>
          </div>
      </div>
    </div>


  </div>

</template>


<script setup>

</script>


<style>

.row {
  height: 100vh;
}

.container-fluid, .row, .leftBlockImg {
  padding: 0;
  margin: 0;
}

.col-md-4.leftBlockImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.rightText .d-block {
  width: 95%;
}
.rightText h1 {
  width: 80%;
}
</style>