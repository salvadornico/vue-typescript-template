<template lang="pug">
#app
	h1 Hello World
	router-view
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
	metaInfo: {
		titleTemplate: "%s | Vue Typescript Template",
	},
})
export default class App extends Vue {}
</script>

<style lang="stylus">
#app h1
	center(XY, absolute)
</style>
