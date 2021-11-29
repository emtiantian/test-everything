<template>
  <div class="storePlatform">
    <div class="title-bg">
      <div class="logo">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <div class="yc-title">上海烟草仓库监测平台</div>
    </div>
    <div class="content" :style="{ bottom: -bottomStyle + 'px' }">
      <react class="react react-1424" />
      <react class="react react-1413" />
      <!-- <reactLong class="react react-1423" /> -->
      <reactLong class="react react-1422" />
      <reactLong class="react react-1421" />
      <reactLong class="react react-1420" />
      <reactLong class="react react-1419" />
      <reactLong class="react react-1418" />
      <reactLong class="react react-1417" />
      <reactLong class="react react-1416" />
      <reactLong class="react react-1415" />
      <reactLong class="react react-1414" />
    </div>
  </div>
</template>
<script>
import react from './react.vue'
import reactLong from './reactLong.vue'
export default {
  name: 'StorePlatform',
  data() {
    return {
      bottom: 0
    }
  },
  components: { react, reactLong },
  created() {
    window.onresize = () => {
      console.log('11', document.body.clientHeight)
      if (document.body.clientHeight < 1000) {
        this.bottom = 60
      } else {
        this.bottom = 0
      }
    }
  },
  computed: {
    bottomStyle() {
      return this.bottom
    }
  }
}
</script>
<style scoped lang="scss">
.storePlatform {
  width: 100%;
  height: 100%;
  background: url('../../assets/img/bg.png') no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
  position: relative;
  .title-bg {
    width: 100%;
    height: 74px;
    background: url('../../assets/img/title.png') no-repeat center center;
    background-size: 100% 100%;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    .logo {
      height: 28px;
      position: absolute;
      left: 15px;
      top: 12px;
      img {
        height: 100%;
        width: auto;
      }
    }
    .yc-title {
      font-size: 36px;
      font-family: 'Source Han Sans CN';
      font-weight: bold;
      color: #ffffff;
      line-height: 70px;
      background: linear-gradient(0deg, #63bfee 0%, #90cae7 37.109375%, #e0f0f8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: 4px;
    }
  }
  .content {
    width: 100%;
    height: 960px;
    // border: 1px solid red;
    background: url('../../assets/img/4lou.png') no-repeat center center;
    background-size: 1920px 960px;
    position: absolute;
    bottom: 0px;
    // transform-style: preserve-3d;
    .react {
      position: absolute;
    }
    .react-1424 {
      left: 45%;
      top: 60%;
      z-index: 99;
    }
    ::v-deep .react-1424 .square-box {
      transform: rotateZ(17deg);
    }
    .react-1413 {
      left: 20.5%;
      top: 45.5%;
      z-index: 99;
    }
    ::v-deep .react-1413 .square-box {
      transform: translateZ(-450px) translateX(-30px) translateY(-10px) rotateX(-30deg) rotateY(-40deg) rotateZ(-2deg);
    }
    .react-1423 {
      left: 42.5%;
      top: 59%;
      z-index: 88;
    }
    ::v-deep .react-1423 .square-box {
      transform: translateZ(-380px) translateX(50px) translateY(-5px) rotateX(-30deg) rotateY(-40deg) rotateZ(-2deg);
    }
    .react-1422 {
      left: 35%;
      top: 59%;
      z-index: 66;
    }
    ::v-deep .react-1422 .square-box {
      transform: translateZ(-600px) translateX(380px) translateY(-120px) rotateX(-30deg) rotateY(-40deg) rotateZ(0deg);
    }
    .react-1421 {
      top: 52%;
      left: 41.8%;
      z-index: 55;
    }
    ::v-deep .react-1421 .square-box {
      transform: translateZ(-720px) translateX(350px) translateY(-120px) rotateX(-30deg) rotateY(-35deg) rotateZ(2deg);
    }
    .react-1420 {
      top: 45%;
      left: 48%;
      z-index: 44;
    }
    ::v-deep .react-1420 .square-box {
      transform: translateZ(-900px) translateX(320px) translateY(-120px) rotateX(-32deg) rotateY(-35deg) rotateZ(-1deg);
    }
    .react-1419 {
      top: 39%;
      left: 52%;
      z-index: 33;
    }
    ::v-deep .react-1419 .square-box {
      transform: translateZ(-1000px) translateX(320px) translateY(-120px) rotateX(-32deg) rotateY(-35deg) rotateZ(-2deg);
    }
    .react-1418 {
      top: 29%;
      left: 24%;
      z-index: 33;
    }
    ::v-deep .react-1418 .square-box {
      transform: translateZ(-1600px) translateX(420px) translateY(-220px) rotateX(-32deg) rotateY(-40deg) rotateZ(-5deg);
    }
    .react-1417 {
      top: 32%;
      left: 20%;
      z-index: 33;
    }
    ::v-deep .react-1417 .square-box {
      transform: translateZ(-1600px) translateX(420px) translateY(-220px) rotateX(-32deg) rotateY(-40deg) rotateZ(-5deg);
    }
    .react-1416 {
      top: 37%;
      left: 14%;
      z-index: 33;
    }
    ::v-deep .react-1416 .square-box {
      transform: translateZ(-1400px) translateX(420px) translateY(-210px) rotateX(-32deg) rotateY(-40deg) rotateZ(-3deg);
    }
    .react-1415 {
      top: 42.5%;
      left: 8%;
      z-index: 33;
    }
    ::v-deep .react-1415 .square-box {
      transform: translateZ(-1300px) translateX(420px) translateY(-210px) rotateX(-32deg) rotateY(-40deg) rotateZ(-1deg);
    }
    .react-1414 {
      top: 49.5%;
      left: 1.5%;
    }
    ::v-deep .react-1414 .square-box {
      transform: translateZ(-1100px) translateX(400px) translateY(-220px) rotateX(-32deg) rotateY(-45deg) rotateZ(-1deg);
    }
  }
}
</style>
