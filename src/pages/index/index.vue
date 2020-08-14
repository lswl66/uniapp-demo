<template>
	<div>
		<div class="header">
			<div class="header-bg">
				<a href="#">
					<span>
						<i class="iconfont iconsearch"></i>
						寻找宝贝店铺
					</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      title: '首页'
    }
  },
  methods: {

  },
  created() {
    console.log('creaded')
  },
  mounted() {
    console.log('mounted')
  }
}
</script>

<style lang="scss" scoped>
	@import "../../static/css/theme.scss";
	.header {
		width: 100%;
		height: 74rpx;
		background-color: $themeColor;
		&-bg{
			height: 50rpx;
			line-height: 50rpx;
			text-align: center;
			color: rgb(240,224,220);
			font-size: 13px;
			padding: 12rpx 18rpx 12rpx 84rpx;
			background-image: url(/static/imgs/index/taobaoLogo.png);
			background-repeat: no-repeat;
			background-size: 54rpx 40rpx;
			background-position: 18rpx center;
			a{
				display: block;
				width: 100%;
				border-radius: 8rpx;
				background-color: $themeDeepColor;
			}
		}
	}
</style>
