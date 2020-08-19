<template>
	<view class="content">
    <div class="shelter"></div>
    <div class="nav-list">
      <scroll-view
        class="nav-list-inner"
        scroll-x="true"
        @scroll="scroll">
        <div
          class="nav-item"
          v-for="item in dataList"
          :key="item.id">
          <div class="inner">
            <navigator v-if="item.titleTop" :url="item.urlTop">
              <img :src="item.navIconTop" :alt="item.titleTop+'导航图标'">
              <div>{{item.titleTop}}</div>
            </navigator>
          </div>
          <div class="inner">
            <navigator v-if="item.titleBottom" :url="item.urlBottom">
              <img :src="item.navIconBottom" :alt="item.titleBottom+'导航图标'">
              <div>{{item.titleBottom}}</div>
            </navigator>
          </div>
        </div>
      </scroll-view>
    </div>
    <div class="slider">
      <div class="track">
        <div class="track-slider" :style="'transform: translate('+trackSliderX+'rpx)'"></div>
      </div>
    </div>
	</view>
</template>

<script>
export default {
  watch: {
    navListX(val) {
      // console.log(val / 5.75)
      this.trackSliderX = val / 5.75
    }
  },
  props: {
    dataList: Array
  },
  data() {
    return {
      navListX: 0,
      trackSliderX: 0,
      intervalId: ''
    }
  },
  created() {
    console.log('creaded')
  },
  mounted() {
    console.log('mounted')
    // this.scroll()
    // #ifdef H5
    // this.$refs['navList'].addEventListener('scroll', this.scroll)
    // #endif
  },
  methods: {
    scroll(val) {
      // console.log(val)
      // this.intervalId = setInterval(() => {
      //   if (this.intervalId) {
      //     clearInterval(this.intervalId)
      //   }
      //   this.navListX = val.detail.scrollLeft
      // }, 1000)
      this.navListX = val.detail.scrollLeft
      // #ifdef H5
      // this.navListX = this.$refs['navList'].childNodes.getBoundingClientRect().left
      // #endif
      // console.log(this.$refs['navList'].firstChild.getBoundingClientRect())
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../static/css/theme.scss";
.content{
  z-index: 1;
  .shelter{
    height: 20rpx;
    background-image: url("../../static/imgs/navbar/shelter.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .nav-list-inner{
    // display: flex;
    // flex-wrap: nowrap;
    // justify-content: flex-start;
    width: 100%;
    height: 312rpx;
    font-size: 22rpx;
    color: $fontColorGrey;
    background-color: #fff;
    white-space: nowrap;
    // overflow-x: auto;
    .nav-item{
      display: inline-block;
      width: 122rpx;
      height: 300rpx;
      margin-left: 23rpx;
      text-align: center;
      vertical-align: top;
      .inner:first-child{
        margin-top: 6rpx;
      }
      .inner:last-child{
        margin-top: 26rpx;
      }
      img{
        width: 122rpx;
        height: 96rpx;
      }
    }
  }
  .slider{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40rpx;
    background-color: #fff;
    .track{
      width: 100rpx;
      height: 6rpx;
      border-radius: 8rpx;
      background-color: $backColorGrey;
      &-slider{
        width: 40rpx;
        height: 6rpx;
        border-radius: 8rpx;
        margin: 0;
        background-color: $themeColor;
        transform: translate(0px);
      }
    }
  }
}
</style>
