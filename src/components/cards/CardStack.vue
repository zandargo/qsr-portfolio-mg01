<template>
  <q-card class="row">
    <div v-for="(src, index) in svgs" :key="index" class="col-3 flex flex-center">
      <img
      	:src="src"
      	:alt="'SVG ' + index"
        width="64"
      />
    </div>

  </q-card>
</template>

<script setup>
  import { ref } from 'vue'

  // Import all SVG files from the folder
  const svgs = ref([])
  const svgModules = import.meta.glob('../../../public/stack/*.svg')
  // const svgModules = import.meta.glob('/stack/*.svg')

  // Load the SVG files into the reactive variable
  for (const path in svgModules) {
    svgModules[path]().then((module) => {
      svgs.value.push(module.default)
    })
  }
</script>

<style lang="scss" scoped>

</style>
