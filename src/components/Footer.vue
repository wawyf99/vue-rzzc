<template>
  <div class="ui-footer">
    <div class="ui-invite">亦柔邀请你加入群聊</div>
    <input type="button" value="加入群聊" class="ui-btn" @click="show">
    <div class="ui-role">
      <p>1.您和群里其他人都不是朋友关系，请注意隐私安全。</p>
      <p>2.该群聊人数较多，为减少新信息给您带来的打扰，建议进群后屏蔽消息通知。</p>
    </div>
  </div>
</template>
<script>
  import { XButton} from 'vux'
  export default {
    components: {
      XButton
    },
    data () {
      return {
        title: ''
      }
    },
    methods:{
      show(){
        this.$router.push({name: '邀您加入群聊'});
      }
    }
  }
</script>
<style scoped lang="scss" >
  @import '../assets/style/footer.less';
</style>
