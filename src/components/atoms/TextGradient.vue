<template>
  <div>
    <span class="1text-bold gradient-text1 shadow-text1" :data-text="text">
      {{ text }}
    </span>
  </div>
</template>

<!-- <script>
  export const name = "TextGradient"
</script> -->

<script setup>
  // defineOptions({
  //   name: 'TextGradient'
  // })

  const props = defineProps({
    text: {
      type: String,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  // .gradient-text1 {
  //   background: linear-gradient(to bottom, #00ff00, #007700);
  //   -webkit-background-clip: text;
  //   background-clip: text;
  //   color: transparent;
  //   position: relative;
  // }

  // .shadow-text1::after {
  //   content: attr(data-text);
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   color: transparent;
  //   background: linear-gradient(to bottom, #00ff00, #007700);
  //   -webkit-background-clip: text;
  //   background-clip: text;
  //   z-index: -1;
  //   filter: blur(4px);
  //   opacity: 0.5;
  // }
</style>
