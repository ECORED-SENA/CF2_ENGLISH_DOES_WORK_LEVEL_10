<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .bg_grad-01
      .row.mb-5
        .col-lg-3
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/sintesis/1.png", alt="alt")
        .col-lg-9
          TraduccionAudio.color-acento-botones.mt-5(:dialogo="dialogo1")(data-aos="flip-up")

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
import TraduccionAudio from '../components/TraduccionAudio.vue'
export default {
  name: 'Sintesis',
  components: {
    TraduccionAudio,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>In this component, we were able to talk about technology, using modals and predictions; to create the predictions, we had to practice the “will” and “going to” expressions; it was easier to identify the auxiliary by the purpose than because of the grammar. In informal language,  we could communicate with great pronunciation using the right English speech and practicing with intonation and pitch. We also learned to use strategies for switching the topic in a conversation.</em>',
        textoEsp:
          'En este componente, pudimos hablar de tecnología, usando modales y predicciones; para crear las predicciones, teníamos que practicar las expresiones “<em>will</em>” y “<em>going to</em>”; fue más fácil identificar los auxiliares por el propósito que por la gramática. En lenguaje informal, pudimos comunicarnos con una gran pronunciación usando el habla correcta en inglés y practicando con la entonación y el tono. También aprendimos a utilizar estrategias para cambiar de tema en una conversación.',
        audio: require('@/assets/componentes/audios/sintesis/1.mp3'),
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
