<template>
	<view class="content">
		<img src="/static/logo.png" alt="logo.png" class="logo"/>
		<div>
			<div class="title">{{title}}</div>
		</div>
	</view>
</template>

<script>
export default {
  data() {
    return {
      title: '商品详情'
    }
  },
  created() {
    console.log('creaded')
  },
  onLoad() {
    console.log('onload')
  },
  onShow() {
    console.log('onshow')
  },
  mounted() {
    console.log('mounted')
  },
  onReady() {
    console.log('onReady')
  },
  methods: {

  }
}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
