<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg_grad-02
      .row.bg_grad-03.mb-5
        img.pst(src="@/assets/curso/introduccion/2.svg", alt="alt")
        img.pst_1(src="@/assets/curso/introduccion/3.svg", alt="alt")
        .col-lg-3(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/introduccion/1.svg", alt="alt")
        .col-lg-9.p-3
          TraduccionT.color-acento-botones.mt-5.mt-md-0(:dialogo="dialogo1")(data-aos="flip-up")
      
      figure.mb-5(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/vzqJZssajTU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10
        .tarjeta.bgr.p-4
          .row.d-flex.align-items-center
            .col-lg-4.mb-3.mb-lg-0
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/introduccion/4.svg", alt="alt")
            .col-lg-4.mb-3.mb-lg-0
              p.mb-0.colr Si desea practicar, el siguiente PDF presenta los textos del video anterior, tanto en inglés como en español. 
            .col-lg-4
              a.anexo(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p Anexo. Guion esp and ingl_Video introductorio


    
</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
export default {
  name: 'Introduccion',
  components: {
    TraduccionT,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>To talk about technology, it can be useful to learn to use the modal verbs and conditionals. It is going to be mandatory to handle pronunciation as well as the use of grammar. In formal and informal conversations, it is useful to learn ways and expressions to switch the conversation and share the own opinion related to some topics. Let’s study the expressions and the conjugations through exercises and examples building on the above. We welcome you to the study of this component and, to begin, you are invited to explore the video below:</em>',
        textoEsp:
          'Para hablar de tecnología, puede ser útil aprender a usar los verbos modales y los condicionales. Será obligatorio manejar la pronunciación, así como el uso de la gramática. En conversaciones formales e informales, es útil aprender formas y expresiones para cambiar la conversación y compartir la propia opinión relacionada con algunos temas. Partiendo de lo anterior, le damos la bienvenida al estudio de este componente formativo y, para comenzar, se le invita a explorar el video que se presenta a continuación:',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
