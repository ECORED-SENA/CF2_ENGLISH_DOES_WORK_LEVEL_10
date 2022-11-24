<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 <em>Switching the topic in a conversation</em>
    
    .bg_grad-16
      .row.mb-5
        .col-lg-8
          TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")
        .col-lg-4
          figure.d-flex.justify-content-center.mb-3
            img.w-auto(src="@/assets/curso/tema3/1.svg", alt="alt")
    


</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
import TraduccionAudio from '../components/TraduccionAudio.vue'
export default {
  name: 'Tema3',
  components: {
    TraduccionT,
    TraduccionAudio,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>When you are in the middle of a conversation, it is important to be able to switch from one topic to another. There are some tips that you can follow in order to master this skill. Please, feel free to put them into practice in every single activity you develop in your daily life. It will show how much you know the language.</em>',
        textoEsp:
          'Cuando está en medio de una conversación, es importante poder cambiar de un tema a otro. Hay algunos consejos que puede seguir para dominar esta habilidad. Por favor, siéntase libre de ponerlos en práctica en cada una de las actividades que desarrolle en su vida diaria, demostrará cuánto sabe del idioma.',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
