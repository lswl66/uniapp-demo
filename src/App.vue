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
  }
  html,
  body{
    width: 100%;
    height: 100%;
    font-family: Helvetica;
    background-color: $backColorGrey;
  }
</style>
