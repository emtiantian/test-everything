<template>
  <div class="cube">
    <div class="square-box">
      <div class="face face-right">right</div>
      <div class="face face-left">left</div>
      <div class="face face-in">in</div>
      <div class="face face-out">out</div>
      <div class="face face-bottom">bottom</div>
      <div class="face face-top">top</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'react'
}
</script>
<style scoped lang="scss">
@function plane($translatex, $translatey, $translatez, $rotatex, $rotatey, $rotatez) {
  @return translate3d($translatex, $translatey, $translatez) rotate3d($rotatex, $rotatey, $rotateZ);
}
.cube {
  width: 320px;
  /* height: 400px; */
  height: 160px;
  perspective: 2000px;
    perspective-origin: 348% -239%;
}

.square-box {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  /* transform: translate3d(0, 0, -200px) rotateY(0deg); */

  font-size: 30px;
  color: white;
  /* -webkit-animation: xuanzhuan 10s infinite linear; */
}

.face {
  width: 100%;
  height: 100%;
  position: absolute;
  border: 1px solid;
  /* -webkit-backface-visibility: hidden; */
  /*background-color: #FFF;*/
  overflow: hidden;
  z-index: 10;
}
.face-out {
  border: 5px solid red;
  transform: translate3d(0px, 0, 160px);
}

.face-right {
  width: 160px;
  border: 5px solid blue;
  transform: translate3d(240px, 0px, 80px) rotateY(90deg);
}

.face-left {
  border: 5px solid pink;
  width: 160px;
  transform: translate3d(-80px, 0px, 80px) rotateY(90deg);
}

.face-in {
  border: 5px solid green;
  transform: translate3d(0px, 0, -0px) rotateY(0deg);
}

.face-bottom {
  border: 5px solid yellow;
  height: 160px;
  transform: translate3d(0px, 80px, 80px) rotateX(90deg);
}

.face-top {
  border: 5px solid black;
  height: 160px;
  transform: translate3d(0px, -80px, 80px) rotateX(90deg);
}
</style>
