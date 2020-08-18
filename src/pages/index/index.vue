<template>
	<div>
		<div class="header">
			<div class="header-bg">
				<a href="#">
					<div>
						<i class="iconfont">&#xe610;</i>
						<span>寻找宝贝店铺</span>
					</div>
				</a>
			</div>
		</div>
		<div class="swipper">
			<Swipper :dataList="swiperList"/>
		</div>
		<div class="navBar">
			<navBar/>
		</div>
	</div>
</template>

<script>
import Swipper from '../../components/swipper/swipper'
import NavBar from '../../components/navBar/navBar'
export default {
  components: {
    Swipper,
    NavBar
  },
  data() {
    return {
      title: '首页1',
      swiperList: [
        {
          id: '1',
          url: '../goodsDetails/goodsDetails',
          img: '/static/imgs/index/swipperList1.jpg'
        },
        {
          id: '2',
          url: '../goodsDetails/goodsDetails',
          img: '/static/imgs/index/swipperList2.jpg'
        },
        {
          id: '3',
          url: '../goodsDetails/goodsDetails',
          img: '/static/imgs/index/swipperList3.jpg'
        },
        {
          id: '4',
          url: '../goodsDetails/goodsDetails',
          img: '/static/imgs/index/swipperList4.jpg'
        },
        {
          id: '5',
          url: '../goodsDetails/goodsDetails',
          img: '/static/imgs/index/swipperList5.jpg'
        },
        {
          id: '6',
          url: '../goodsDetails/goodsDetails',
          img: '/static/imgs/index/swipperList6.jpg'
        },
        {
          id: '7',
          url: '../goodsDetails/goodsDetails',
          img: '/static/imgs/index/swipperList7.jpg'
        },
        {
          id: '8',
          url: '../goodsDetails/goodsDetails',
          img: '/static/imgs/index/swipperList8.jpg'
        }
      ]
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
				color: rgb(240,224,220);
				font-size: 13px;
				i{
					margin-top: 1px;
					font-size: 13px;
				}
			}
		}
	}
	.swipper{
		height: 240rpx;
	}
	.navBar{
		height: 372rpx;
		position: relative;
		z-index: 1;
		margin-top: -20rpx;
	}
</style>
