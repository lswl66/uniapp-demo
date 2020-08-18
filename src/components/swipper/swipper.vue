<template>
	<view class="content">
		<swiper
      autoplay="true"
      circular="true"
      duration="300"
      @change="currentSwiperChange"
    >
      <swiper-item
        v-for="item in dataList"
        :key="item.id"
      >
        <navigator :url="item.url">
          <img :src="item.img" alt="swipper商品图片"/>
        </navigator>
      </swiper-item>
		</swiper>
    <!--重置小圆点的样式 -->
    <view class="dots">
      <div
        v-for="(item, index) in dataList"
        :key="item.id"
        class="dot"
        :class="[index === currentSwiper ? ' active' : '']">
      </div>
    </view>
	</view>
</template>

<script>
export default {
  props: {
    dataList: Array
  },
  data() {
    return {
      currentSwiper: 0
    }
  },
  methods: {
    currentSwiperChange(val) {
      // console.log(val)
      this.currentSwiper = val.detail.current
    }
  },
  mounted() {
    console.log('mounted')
  },
  created() {
    console.log('creaded')
  }
}
</script>

<style lang="scss" scoped>
.content{
  height: 100%;
  swiper{
    width: 100%;
    height: 240rpx;
    swiper-item{
      navigator{
        display: inline-block;
        width: 100%;
        height: 100%;
        img{
          width: 100%;
          height: 240rpx;
        }
      }
    }
  }
  /*用来包裹所有的小圆点 */
  .dots {
    width: 100%;
    height: 16rpx;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    bottom: 50rpx;
    background: transparent;
    /*未选中时的小圆点样式 */
    .dot {
      width: 16rpx;
      height: 16rpx;
      border-radius: 50%;
      background-color: rgba(255,255,255,0.3);
      margin-right: 5px;
    }
    /*选中以后的小圆点样式 */
    .active {
      background-color: rgb(255, 133, 42);
    }
  }
}
</style>
<style>
/* /deep/ uni-swiper .uni-swiper-dots-horizontal{
  bottom: 30rpx;
} */
</style>
