<script>
export default {
  onLaunch: function() {
    console.log('App Launch')
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
	@import "../src/static/css/theme.scss";
	/*每个页面公共css */
  *{
    margin: 0px auto;
    padding: 0px;
    text-decoration: none;
  }
  html,
  body{
    width: 100%;
    height: 100%;
    font-family: Helvetica;
    background-color: $backColorGrey;
  }
// 设置iconfot图标的统一样式
  .iconfont{
    display: inline-block;
    margin-right: 2px;
  }
// 去除页面滚动条
  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;
    height: 0 !important;
    -webkit-appearance: none;
    background: transparent;
  }
</style>
