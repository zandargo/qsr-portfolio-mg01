<template>
  <q-page class="flex flex-box justify-between">

    <section class="q-pa-lg row q-gutter-lg">

      <CardSkills class="col-5"/>
      <CardStack class="col-6"/>

    </section>

  </q-page>
</template>

<script setup>
  import anime from 'animejs/lib/anime.es.js'
  import { onMounted } from 'vue'
  import TextGradient from 'components/atoms/TextGradient.vue'
  import CardSkills from 'src/components/cards/CardSkills.vue'
  import CardStack from 'src/components/cards/CardStack.vue'


  defineOptions({
    name: 'IndexPage'
  })

  // anime({
  //   targets: 'div',
  //   translateX: 250,
  //   rotate: '1turn',
  //   backgroundColor: '#FFF',
  //   duration: 800
  // })



</script>
