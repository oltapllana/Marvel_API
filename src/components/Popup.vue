<template>
	<div class="popup">
		<div class="popup-inner">
			<slot />
			<button class="popup-close" @click="TogglePopup()">
				Close
			</button>
		</div>
	</div>
</template>

<script>
export default {
    name: 'pop-up',
	props: ['TogglePopup']
}
</script>

<style lang="css" scoped>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.2);
	
	display: flex;
	align-items: center;
	justify-content: center;
	
}
.popup-inner {
		background: rgb(188, 147, 147);
		padding: 32px;
	}
</style>