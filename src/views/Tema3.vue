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
        .col-lg-4(data-aos="fade-left")
          figure.d-flex.justify-content-center.mb-3
            img.w-auto(src="@/assets/curso/tema3/1.svg", alt="alt")
      
      .row.mb-5.justify-content-center
        .col-lg-10
           SlyderF.mgb(columnas="col-md-6 col-xl-4")
            .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema3/2.png')})`}" style='height: 500px').pst_2
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema3/1.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.colr <em> Ask personal questions to people who you are talking to, so it will be easy for everybody to answer and get involved in the conversation.</em>
            .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema3/3.png')})`}" style='height: 500px').pst_2
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema3/2.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.colr <em>Try to memorize new vocabulary, like expressions similar to BY THE WAY, THAT REMINDS ME and others.</em>
            .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema3/4.png')})`}" style='height: 500px').pst_2
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema3/3.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.colr <em> Use direct questions to explore people’s opinion about particular new topics, in this way you can have control of the direction of the conversation.</em>
            .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema3/5.png')})`}" style='height: 500px').pst_2
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema3/4.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.colr <em>Use polite expressions as ice breakers to get people to talk and be open to new conversation ideas.</em>
            .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema3/6.png')})`}" style='height: 500px').pst_2
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema3/5.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.colr <em>Try to find likes in common, so you can propose new topics that can be more familiar to everybody.</em>
            .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema3/7.png')})`}" style='height: 500px').pst_2
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema3/6.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.colr <em>Think about possible future personal plans to ask about, because future plans in common are a good idea to talk about.</em>
            .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema3/8.png')})`}" style='height: 500px').pst_2
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema3/7.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.colr <em>Engage the senses with appealing visual or audio influence to get other people more open to talk.</em>
            .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema3/9.png')})`}" style='height: 500px').pst_2
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema3/8.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.colr <em>Take advantage of all the extra information you have in your hands about the people involved in the conversation.</em>
            .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema3/10.png')})`}" style='height: 500px').pst_2
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema3/9.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.colr <em>A transition has to feel and sound natural, the conversation needs to continue with a natural flow, without unnatural breaks. </em>
      .bg_grad-17
        .row.mb-5.justify-content-center
          .col-lg-3(data-aos="fade-right")
            figure.d-flex.justify-content-center.mb-3
              img.w-auto(src="@/assets/curso/tema3/11.svg", alt="alt")  
          .col-lg-7
            p.mt-lg-5.mt-0.colr <em>Learn how to switch topics in English. Sometimes, we are in a conversation and we need to change the subject. So it is necessary to practice to learn how to change the topic and talk about something else smoothly, so that the listener won't even notice you changed the subject! Listen and learn:</em>
            .row.bgr_4.p-4.tarjeta
              .col-lg-4.d-flex.align-items-center.justify-content-center.order-2.order-lg-1.mb-3.mb-lg-0
                p.mb-0.text-white.text-bold <em>Play the audio then download the transcript.</em>
              .col-lg-7.order-3.order-lg-2
                a.anexo(:href="obtenerLink('downloads/anexo2.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p.mb-0 Anexo. <em>How_to_Switch_Topics_in_English</em>
              .col-lg-1.d-flex.align-items-center.order-1.order-lg-3.mb-3.mb-lg-0
                Audio.color-acento-botones.m-auto(
                  :audio="require('@/assets/componentes/audios/tema3/10.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
      
    p.colr <em>Now, we are going to practice. Listen to each audio, then complete the missing word and review again if it is necessary. Let’s go: </em>
      span.colr_1 / Ahora, vamos a practicar. Escuche cada audio, luego complete la palabra que falta y vuelva a revisar si es necesario. Vamos:

    Dialogo.color-primario(:dialogo="dialogo")(data-aos="zoom-in")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Switching the opinion</em> - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
    
    


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
    dialogo: {
      personajes: [
        {
          nombre: 'CAMILA',
          img: require('@/assets/curso/tema3/12.svg'),
        },
        {
          nombre: 'SEBASTIAN',
          img: require('@/assets/curso/tema3/13.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'CAMILA',
          textoIng: 'Sebas, tell me why you look so ***.',
          textoEsp: 'Sebas, dime por qué luces tan preocupado.',
          audio: require('@/assets/componentes/audios/tema3/11.mp3'),
          palabra: 'worried',
        },
        {
          personaje: 'SEBASTIAN',
          textoIng: 'I think I made a *** in the office this morning.',
          textoEsp: 'Pienso que cometí un error en la oficina esta mañana.',
          audio: require('@/assets/componentes/audios/tema3/12.mp3'),
          palabra: 'mistake',
        },
        {
          personaje: 'CAMILA',
          textoIng: 'What do you ***? What have you done?',
          textoEsp: '¿Qué quieres decir? ¿Qué has hecho?',
          audio: require('@/assets/componentes/audios/tema3/13.mp3'),
          palabra: 'mean',
        },
        {
          personaje: 'SEBASTIAN',
          textoIng: 'I should have sent a *** to my boss but I forgot.',
          textoEsp:
            'Debí haber enviado un reporte a mi jefe, pero se me olvidó.',
          audio: require('@/assets/componentes/audios/tema3/14.mp3'),
          palabra: 'report',
        },
        {
          personaje: 'CAMILA',
          textoIng: 'Is there *** you can do?',
          textoEsp: '¿Hay algo que puedas hacer?',
          audio: require('@/assets/componentes/audios/tema3/15.mp3'),
          palabra: 'anything',
        },
        {
          personaje: 'SEBASTIAN',
          textoIng: 'I should have called to let know the delay.',
          textoEsp: 'Debería haber llamado para hacer saber del retraso.',
          audio: require('@/assets/componentes/audios/tema3/16.mp3'),
        },
      ],
    },
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
