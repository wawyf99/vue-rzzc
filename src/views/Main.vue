<template>
  <div>
    <Header></Header>
    <SwiperBox></SwiperBox>
    <div class="main">
      {{msg}}
    </div>
    <Footer></Footer>
  </div>

</template>
<style>
  @import '../assets/style/main.scss';
</style>
<script>
  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import SwiperBox from '../components/SwiperBox'
  export default {
    components: {Header, Footer, SwiperBox},
    name: 'Main',
    data () {
      return {
        msg: '这里是SECTION'
      }
    }
  }
</script>
