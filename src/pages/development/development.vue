<template>
	<view class="content">
		<div>
			<div class="title">{{title}}</div>
		</div>
	</view>
</template>

<script>
export default {
  data() {
    return {
      title: '正在开发中...'
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

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
