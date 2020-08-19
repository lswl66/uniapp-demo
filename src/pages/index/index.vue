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
			<navBar :dataList="navList"/>
		</div>
    <div class="coverAd">
      <div class="inner">
        <div class="item left">
          <div class="type1">
            <div class="title">
              <span class="font">聚划算</span>
              <span class="icon"></span>
            </div>
            <div class="type1-inner">
              <div class="type1-inner-item type1-inner-item-left">
                <div class="textView">品牌折扣</div>
                <div class="imageView">
                  <div class="shelter"></div>
                  <img src="../../static/imgs/index/goodsImg1.png" alt=""/>
                </div>
              </div>
              <div class="type1-inner-item type1-inner-item-right">
                <div class="textView">抢大爆款</div>
                <div class="imageView">
                  <div class="shelter"></div>
                  <img src="../../static/imgs/index/goodsImg2.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div class="type2">
            <div class="type2-title">
              <div class="title">
                <span class="font">淘抢购</span>
                <span class="icon"></span>
              </div>
              <div class="title">
                <span class="font">天天特卖</span>
                <span class="icon"></span>
              </div>
            </div>
            <div class="type2-inner">
              <div class="type2-inner-item type2-inner-item-left">
                <div class="textView">限时半价</div>
                <div class="imageView">
                  <div class="shelter"></div>
                  <img src="../../static/imgs/index/goodsImg3.png" alt=""/>
                </div>
              </div>
              <div class="type2-inner-item type2-inner-item-right">
                <div class="textView">9.9包邮</div>
                <div class="imageView">
                  <div class="shelter"></div>
                  <img src="../../static/imgs/index/goodsImg4.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div class="type3">
            <div class="title">
              <span class="font">每日好店</span>
              <span class="icon">精选</span>
            </div>
            <div class="type3-inner">
              <div class="type3-inner-item type3-inner-item-left">
                <div class="textView">挖深藏的店</div>
                <div class="imageView">
                  <div class="shelter"></div>
                  <img src="../../static/imgs/index/goodsImg6.png" alt=""/>
                </div>
              </div>
              <div class="type3-inner-item type3-inner-item-right">
                <div class="imageView">
                  <div class="shelter"></div>
                  <img src="../../static/imgs/index/goodsImg5.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item right">
          <div class="type4">
            <div class="title">
              <span class="font">淘宝直播</span>
              <span class="icon">LIVE</span>
            </div>
            <div class="type4-inner">
              <div class="type4-inner-item type4-inner-item-left">
                <div class="textView">解锁夏日王炸</div>
                <div class="imageView">
                  <div class="shelter"></div>
                  <img src="../../static/imgs/index/goodsImg6.png" alt=""/>
                </div>
              </div>
              <div class="type4-inner-item type4-inner-item-right">
                <div class="imageView">
                  <div class="shelter"></div>
                  <img src="../../static/imgs/index/goodsImg5.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div class="type5">
            <div class="title">
              <span class="font">有好货</span>
              <span class="icon">品质好物</span>
            </div>
            <div class="type5-inner">
              <div class="type5-inner-item type5-inner-item-left">
                <div class="textView">全民口碑推荐</div>
                <div class="imageView">
                  <div class="shelter"></div>
                  <img src="../../static/imgs/index/goodsImg6.png" alt=""/>
                </div>
              </div>
              <div class="type5-inner-item type5-inner-item-right">
                <div class="imageView">
                  <div class="shelter"></div>
                  <img src="../../static/imgs/index/goodsImg5.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div class="type6">
            <div class="title">
              <span class="font">哇哦视频</span>
              <span class="icon">亲测</span>
            </div>
            <div class="type6-inner">
              <div class="type6-inner-item type6-inner-item-left">
                <div class="textView">粉丝都爱看</div>
                <div class="imageView">
                  <div class="shelter"></div>
                  <img src="../../static/imgs/index/goodsImg6.png" alt=""/>
                </div>
              </div>
              <div class="type6-inner-item type6-inner-item-right">
                <div class="imageView">
                  <div class="shelter"></div>
                  <img src="../../static/imgs/index/goodsImg5.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="toutiao">
      <div class="inner"></div>
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
      title: '首页',
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
      ],
      navList: [
        {
          id: '1',
          titleTop: '天猫新品',
          titleBottom: '充值中心',
          navIconTop: '../../static/imgs/navbar/tianmaoxinpin.png',
          navIconBottom: '../../static/imgs/navbar/chongzhi.png',
          urlTop: '../development/development',
          urlBottom: '../development/development'
        },
        {
          id: '2',
          titleTop: '今日爆款',
          titleBottom: '机票酒店',
          navIconTop: '../../static/imgs/navbar/jinribaokuan.png',
          navIconBottom: '../../static/imgs/navbar/jipiaojiudian.png',
          urlTop: '../development/development',
          urlBottom: '../development/development'
        },
        {
          id: '3',
          titleTop: '天猫国际',
          titleBottom: '金币庄园',
          navIconTop: '../../static/imgs/navbar/tianmaoguoji.png',
          navIconBottom: '../../static/imgs/navbar/jinbizhuangyuan.png',
          urlTop: '../development/development',
          urlBottom: '../development/development'
        },
        {
          id: '4',
          titleTop: '饿了么',
          titleBottom: '阿里拍卖',
          navIconTop: '../../static/imgs/navbar/eleme.png',
          navIconBottom: '../../static/imgs/navbar/alipaimai.png',
          urlTop: '../development/development',
          urlBottom: '../development/development'
        },
        {
          id: '5',
          titleTop: '天猫超市',
          titleBottom: '淘宝吃货',
          navIconTop: '../../static/imgs/navbar/tianmaochaoshi.png',
          navIconBottom: '../../static/imgs/navbar/taobaochihuo.png',
          urlTop: '../development/development',
          urlBottom: '../development/development'
        },
        {
          id: '6',
          titleTop: '分类',
          titleBottom: '闲鱼',
          navIconTop: '../../static/imgs/navbar/fenlei.png',
          navIconBottom: '../../static/imgs/navbar/xianyu.png',
          urlBottom: '../development/development',
          urlTop: '../development/development'
        },
        {
          id: '7',
          titleTop: '天猫美食',
          titleBottom: '会员中心',
          navIconTop: '../../static/imgs/navbar/tianmaomeishi.png',
          navIconBottom: '../../static/imgs/navbar/huiyuanzhongxin.png',
          urlBottom: '../development/development',
          urlTop: '../development/development'
        },
        {
          id: '8',
          titleTop: '阿里健康',
          titleBottom: '造点新货',
          navIconTop: '../../static/imgs/navbar/alijiankang.png',
          navIconBottom: '../../static/imgs/navbar/zaodianxinhuo.png',
          urlBottom: '../development/development',
          urlTop: '../development/development'
        },
        {
          id: '9',
          titleTop: '口碑生活',
          titleBottom: '土货鲜食',
          navIconTop: '../../static/imgs/navbar/koubeishenghuo.png',
          navIconBottom: '../../static/imgs/navbar/tuhuoxianshi.png',
          urlBottom: '../development/development',
          urlTop: '../development/development'
        },
        {
          id: '10',
          titleTop: '小黑盒',
          titleBottom: '',
          navIconTop: '../../static/imgs/navbar/xiaoheihe.png',
          navIconBottom: '',
          urlBottom: '',
          urlTop: '../development/development'
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
  .coverAd{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 726rpx;
    margin-top: 20rpx;
    .inner{
      display: flex;
      justify-content: space-between;
      width: 714rpx;
      height: 100%;
      .item{
        display: flex;
        flex-direction: column;
        width: 316rpx;
        padding: 0rpx 20rpx;
        height: 100%;
        background-color: #fff;
        font-size: 26rpx;
        &.left{
          border-top-left-radius: 24rpx;
        }
        &.right{
          border-top-right-radius: 24rpx;
        }
        .title{
          width: 50%;
          height: 40rpx;
          margin-top: 13rpx;
          .font{
            font-size: 34rpx;
            font-weight: 600;
          }
          .icon{
            font-size: 22rpx;
            color: #fff;
            margin-left: 12rpx;
            border-radius: 5rpx;
          }
        }
        .shelter{
          position: absolute;
          width: 124rpx;
          height: 124rpx;
        }
        .type1{
          width: 100%;
          &-inner{
            display: flex;
            justify-content: space-between;
            height: 176rpx;
            margin-top: 13rpx;
            &-item{
              width: 144rpx;
              font-weight: bold;
              border-radius: 12rpx;
              text-align: center;
              .textView{
                margin-top: 10rpx;
              }
              .imageView{
                display: flex;
                justify-content: center;
                position: relative;
                img{
                  width: 124rpx;
                  height: 124rpx;
                }
              }
              &-left{
                color: rgb(254, 78, 80);
                background-color: rgb(253,245,242);
                .shelter{
                  background-color: rgba(214, 67, 0, 0.05);
                }
              }
              &-right{
                color: rgb(255, 117, 24);
                background-color: rgb(252, 249, 243);
                .shelter{
                  background-color: rgba(195, 144, 27, 0.05);
                }
              }
            }
          }
        }
        .type2{
          width: 100%;
          position: relative;
          &-title{
            display: flex;
            justify-content: flex-start;
            :last-child{
              text-align: center;
            }
          }
          &-inner{
            display: flex;
            justify-content: space-between;
            height: 176rpx;
            margin-top: 13rpx;
            &-item{
              width: 144rpx;
              font-weight: bold;
              border-radius: 12rpx;
              text-align: center;
              .textView{
                margin-top: 10rpx;
              }
              .imageView{
                display: flex;
                justify-content: center;
                img{
                  width: 124rpx;
                  height: 124rpx;
                }
              }
              &-left{
                color: rgb(254, 78, 80);
                background-color: rgb(253,245,242);
                .shelter{
                  background-color: rgba(214, 67, 0, 0.05);
                }
              }
              &-right{
                color: rgb(255, 117, 24);
                background-color: rgb(252, 249, 243);
                .shelter{
                  background-color: rgba(195, 144, 27, 0.05);
                }
              }
            }
          }
        }
        .type3{
          width: 100%;
          .title{
            width: 100%;
            .icon{
              background-color: #ffc32c;
              padding: 0 5rpx;
              border-radius: 6rpx;
              font-weight: 200;
              position: relative;
              top: -5rpx;
            }
          }
          &-inner{
            display: flex;
            justify-content: space-between;
            height: 176rpx;
            margin-top: 13rpx;
            &-item{
              width: 144rpx;
              font-weight: bold;
              border-radius: 12rpx;
              text-align: center;
              .textView{
                margin-top: 10rpx;
              }
              .imageView{
                display: flex;
                justify-content: center;
                img{
                  width: 124rpx;
                  height: 124rpx;
                }
              }
              &-left{
                color: rgb(249, 165, 0);
                font-weight: 400;
                font-size: 26rpx;
                // background-color: rgb(253,245,242);
              }
              &-right{
                color: rgb(255, 117, 24);
                // background-color: rgb(252, 249, 243);
                .imageView{
                  margin-top: 16rpx;
                  img{
                    width: 136rpx;
                    height: 160rpx;
                  }
                }
              }
            }
          }
        }
        .type4{
          width: 100%;
          .title{
            width: 100%;
            .icon{
              background-color: #ffc32c;
              padding: 0 5rpx;
              border-radius: 6rpx;
              font-weight: 200;
              position: relative;
              top: -5rpx;
            }
          }
          &-inner{
            display: flex;
            justify-content: space-between;
            height: 176rpx;
            margin-top: 13rpx;
            &-item{
              width: 144rpx;
              font-weight: bold;
              border-radius: 12rpx;
              text-align: center;
              .textView{
                margin-top: 10rpx;
              }
              .imageView{
                display: flex;
                justify-content: center;
                img{
                  width: 124rpx;
                  height: 124rpx;
                }
              }
              &-left{
                color: rgb(249, 165, 0);
                font-weight: 400;
                font-size: 26rpx;
                // background-color: rgb(253,245,242);
              }
              &-right{
                color: rgb(255, 117, 24);
                // background-color: rgb(252, 249, 243);
                .imageView{
                  margin-top: 16rpx;
                  img{
                    width: 136rpx;
                    height: 160rpx;
                  }
                }
              }
            }
          }
        }
        .type5{
          width: 100%;
          .title{
            width: 100%;
            .icon{
              background-color: #ffc32c;
              padding: 0 5rpx;
              border-radius: 6rpx;
              font-weight: 200;
              position: relative;
              top: -5rpx;
            }
          }
          &-inner{
            display: flex;
            justify-content: space-between;
            height: 176rpx;
            margin-top: 13rpx;
            &-item{
              width: 144rpx;
              font-weight: bold;
              border-radius: 12rpx;
              text-align: center;
              .textView{
                margin-top: 10rpx;
              }
              .imageView{
                display: flex;
                justify-content: center;
                img{
                  width: 124rpx;
                  height: 124rpx;
                }
              }
              &-left{
                color: rgb(249, 165, 0);
                font-weight: 400;
                font-size: 26rpx;
                // background-color: rgb(253,245,242);
              }
              &-right{
                color: rgb(255, 117, 24);
                // background-color: rgb(252, 249, 243);
                .imageView{
                  margin-top: 16rpx;
                  img{
                    width: 136rpx;
                    height: 160rpx;
                  }
                }
              }
            }
          }
        }
        .type6{
          width: 100%;
          .title{
            width: 100%;
            .icon{
              background-color: #ffc32c;
              padding: 0 5rpx;
              border-radius: 6rpx;
              font-weight: 200;
              position: relative;
              top: -5rpx;
            }
          }
          &-inner{
            display: flex;
            justify-content: space-between;
            height: 176rpx;
            margin-top: 13rpx;
            &-item{
              width: 144rpx;
              font-weight: bold;
              border-radius: 12rpx;
              text-align: center;
              .textView{
                margin-top: 10rpx;
              }
              .imageView{
                display: flex;
                justify-content: center;
                img{
                  width: 124rpx;
                  height: 124rpx;
                }
              }
              &-left{
                color: rgb(249, 165, 0);
                font-weight: 400;
                font-size: 26rpx;
                // background-color: rgb(253,245,242);
              }
              &-right{
                color: rgb(255, 117, 24);
                // background-color: rgb(252, 249, 243);
                .imageView{
                  margin-top: 16rpx;
                  img{
                    width: 136rpx;
                    height: 160rpx;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .toutiao{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80rpx;
    margin-top: 2rpx;
    .inner{
      display: flex;
      width: 714rpx;
      height: 100%;
      background-color: #fff;
      border-bottom-left-radius: 24rpx;
      border-bottom-right-radius: 24rpx;
    }
  }
</style>
