<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <em>Informal language</em>
    
    .bg_grad-12
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/1.svg", alt="alt")
        .col-lg-8
          TraduccionT.color-acento-botones(:dialogo="dialogo1")(data-aos="flip-up")
      .row.mb-5
        .col-lg-8
          TabsA.color-acento-botones.mb-5
            .tarjeta.color-acento-botones--borde.p-4(titulo="Formal language")
              TraduccionAudio.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up")
              p.text-bold <em>Improvements cannot be made due to budget restrictions.</em>
            .tarjeta.color-acento-botones--borde.p-4(titulo="Informal language")
              TraduccionAudio.color-acento-botones(:dialogo="dialogo3")(data-aos="flip-up")
              p.text-bold <em>The improvements can’t be made due to budget cuts.</em>
            .tarjeta.color-acento-botones--borde.p-4(titulo="Contractions")
              TraduccionAudio.color-acento-botones(:dialogo="dialogo4")(data-aos="flip-up")
              .row
                .col-lg-6
                  p.text-bold.mb-0 <em>can’t = can not</em>
                  p.text-bold.mb-0 <em>couldn’t = could not</em>
                  p.text-bold.mb-0 <em>didn’t = did not</em>
                  p.text-bold.mb-0 <em>doesn’t = does not</em>
                .col-lg-6
                  p.text-bold.mb-0 <em>don’t = do not</em>
                  p.text-bold.mb-0 <em>hadn’t = had not</em>
                  p.text-bold.mb-0 <em>hasn’t =  has not</em>
        .col-lg-4(data-aos="fade-left")
          figure.d-flex.justify-content-center
            img.w-auto.d-none.d-lg-flex(src="@/assets/curso/tema2/2.png", alt="alt")
      
      .row.justify-content-center.mb-3.mb-lg-0
        .col-lg-2.mb-3.mb-lg-0
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/3.svg", alt="alt")
        .col-lg-5.mb-3.mb-lg-0
          p.mb-0 <em>One contraction that is not on the above list is “it’s.” It is useful to note that “it’s,” a contraction, is often confused with “its,” a possessive pronoun. Remember:</em>
        .col-lg-3
          h3.bgr_9.p-2.mb-2  <em>it’s = it is</em>
          h3.bgr_9.p-2 <em>its = possessive pronoun</em>
      
      .bg_grad-13
        .row.mb-5.justify-content-center
          .col-lg-3(data-aos="fade-right")
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema2/4.png", alt="alt")
          .col-lg-7
            TraduccionT.color-acento-botones.mt-5(:dialogo="dialogo5")(data-aos="flip-up")
    
    p.colr <em>Finally, when you want to have an informal conversation, like fluent conversation with a friend, it's necessary to recognize the use of phrasal verbs and slang: </em>
      span.colr_1 / Finalmente, cuando quiera tener una conversación informal, como una conversación fluida con un amigo, es necesario reconocer el uso de <em>phrasal verbs y slang</em>:
    
    .row
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="bgr_7 tarjeta")
          div(titulo="<em>Phrasal verbs</em>").bgr_1.tarjeta.p-4
            p.colr <em>Phrasal verbs are especially common in daily informal conversation. Using phrasal verbs in your informal speech makes it sound natural. There are phrasal verbs that can be used in formal and informal writing:</em>
            .row.bgr_8.p-3
              .col-xl-5.order-lg-2.order-xl-1.mb-3.mb-xl-0
                table
                  thead
                    tr.text-center
                      th.bgr_5.bgr_4 <em>Phrasal verb</em>
                      th.bgr_5.bgr_2 <em>Verb</em>
                    tr.text-center
                      th.bgr_5.bgr_4 <em>Informal</em>
                      th.bgr_5.bgr_2 <em>Formal</em>
                  tbody.text-center.bgr_1
                    tr
                      td.bgr_5 <em>Ask out</em>
                      td.bgr_5 <em>Invite</em>  
                    tr
                      td.bgr_5 <em>Break out</em>
                      td.bgr_5 <em>Erupt</em>
                    tr
                      td.bgr_5 <em>Bring up</em>
                      td.bgr_5 <em>Mention (a topic / event)</em>
                    tr
                      td.bgr_5 <em>Call on</em>
                      td.bgr_5 <em>Visit</em>
                    tr
                      td.bgr_5 <em>Check out</em>
                      td.bgr_5 <em>Investigate</em>
              .col-xl-2.order-lg-1.order-xl-2.mb-3.mb-xl-0
                Audio.color-secundario.m-auto(
                    :audio="require('@/assets/componentes/audios/tema2/4.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
              .col-xl-5.order-lg-3.order-xl-3
                figure.d-flex.justify-content-center
                  img.w-auto(src="@/assets/curso/tema2/6.svg", alt="alt")
          .row(titulo="<em>Slang and colloquialism</em>").bgr_1.tarjeta.p-4
            .col-xl-8.bgr_8.p-3.mb-3.mb-xl-0
              p.colr <em>It refers to the informal use of language consisting of words, phrases and aphorisms used by common people. See it as a form of everyday use of language, commonplace parlance in other words, which is more appropriate in the conversational form or the speech form.</em>
              p.colr <em>It’s important to keep in mind that colloquial language is more formal than slang as it does not come across as offensive as the latter.</em>
              .row
                .col-lg-10
                  ul.lista-ul--color
                    li 
                      i.fas.fa-sun.colr_2
                      span.colr.text-bold <em>Professors still count on students to use correct grammar and punctuation in essays.</em>
                    li 
                      i.fas.fa-sun.colr_2
                      span.colr.text-bold <em>Professors expect students to use correct grammar and punctuation in essays.</em>
                .col-lg-2
                  Audio.color-secundario.m-auto(
                      :audio="require('@/assets/componentes/audios/tema2/5.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
            .col-xl-4
              figure.d-flex.justify-content-center
                img.w-auto(src="@/assets/curso/tema2/7.svg", alt="alt") 
      .col-lg-4(data-aos="fade-left")
        figure.d-flex.justify-content-center
          img.w-auto.d-none.d-lg-flex(src="@/assets/curso/tema2/5.png", alt="alt")  

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 <em>Communicating with great pronunciation</em>    
    
    .bg_grad-14
      .row.justify-content-center.mb-5(data-aos="zoom-in")
        .col-lg-10
          .bgr_10.tarjeta.p-4
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema2/8.svg", alt="alt")
            SlyderA(tipo="b")
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema2/6.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-bold.text-center.colr_3 <em>American or British</em>
                p.text-center <em>Choose between one of the two main English pronunciations: American or British. Remember that both English pronunciations have big differences in the way most of the words sound. It is important that you decide to select one pronunciation line and try to avoid mixing up the pronunciation patterns.</em>
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema2/7.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-bold.text-center.colr_3 <em>Sounds from English</em>
                p.text-center <em>Practice a number of basic sounds from the English language every day. Start with a few words. And these are letters and syllables. Breaking the words into syllables will make it easy for you to pronounce. After practicing the sounds of each syllable, switch to the pronunciation of the entire word, and then use the words in a sentence.</em>
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema2/8.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-bold.text-center.colr_3 <em>Talk and talk</em>
                p.text-center <em>Talk slower, this is important to avoid making mistakes and reinforcing bad habits. That way you can identify possible errors and have the chance to correct them.</em>
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema2/9.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-bold.text-center.colr_3 <em>Imitate sounds</em>
                p.text-center <em>Imitating native English speakers using massive media will let you follow an example even if you don’t have the meaning clear, you can always focus on imitating sounds and intonation.</em>
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema2/10.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-bold.text-center.colr_3 <em>Face your fear</em>
                p.text-center <em>Face your fear of making mistakes. It is important to take yourself to the edge, and to make mistakes in front of other people is a good option, don’t forget to ask other people to correct you.</em>
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema2/11.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-bold.text-center.colr_3 <em>Listen to yourself</em>
                p.text-center <em>Listening to yourself as a way to identify your own pronunciation mistakes is a good way to start correcting them. Use any audio recording device to record your own voice, then listen to yourself and identify errors.</em>
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema2/12.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-bold.text-center.colr_3 <em>Practice</em>
                p.text-center <em>Find a friend to practice and reinforce your confidence. This is a good way to gain speed, fluency and confidence.</em>
    
    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 <em>English speech</em> 
    
    .bg_grad-15
      .row.mb-5
        .col-lg-8
          TraduccionT.color-acento-botones(:dialogo="dialogo6")(data-aos="flip-up")
        .col-lg-4(data-aos="fade-left")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema2/9.svg", alt="alt")
      
      .bgr_11.p-4
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.bgr_12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.w-auto(src="@/assets/curso/tema2/11.svg", alt="alt")
            .bgr_1.tarjeta.p-4
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema2/13.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              p.text-center.colr <em>Listening and reading are good ways to improve your vocabulary bank, this will give you a lot of options of words at the moment of talking so you don’t have to pause when you think about the correct word to say.</em>
          .tarjeta.bgr_12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.w-auto(src="@/assets/curso/tema2/12.svg", alt="alt")
            .bgr_1.tarjeta.p-4
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema2/14.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              p.text-center.colr <em>Prepare in advance the vocabulary of the topic that you will talk about. In this way, you can master the topic and be fluent in the topic conversations you will be involved in.</em>
          .tarjeta.bgr_12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.w-auto(src="@/assets/curso/tema2/13.svg", alt="alt")
            .bgr_1.tarjeta.p-4
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema2/15.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              p.text-center.colr <em>Learn phrases rather than single words. When you learn or memorize complete phrases you can use them as model samples at the moment of speaking, this way you don’t have to worry about making grammar mistakes because you only need to modify a few things in the phrases in order to say what you need in that moment. </em>
          .tarjeta.bgr_12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.w-auto(src="@/assets/curso/tema2/14.svg", alt="alt")
            .bgr_1.tarjeta.p-4
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema2/16.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              p.text-center.colr <em>Listen, memorize, and repeat English songs to improve fluency. The music will help you learn and practice the rhythm of some English words, along with learning pronunciation.</em>
          .tarjeta.bgr_12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.w-auto(src="@/assets/curso/tema2/15.svg", alt="alt")
            .bgr_1.tarjeta.p-4
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema2/17.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              p.text-center.colr <em>Memorize short stories, jokes, or recipes. This gives you a feeling of sureness when you are retelling information, so every time that you repeat it you will be getting better and better.</em>
          .tarjeta.bgr_12.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.w-auto(src="@/assets/curso/tema2/16.svg", alt="alt")
            .bgr_1.tarjeta.p-4
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema2/18.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              p.text-center.colr <em>Create small talk every time that you have the chance. In this way, you will be able to practice your English language skills with daily chats in different contexts, like weather, sports, security, and entertainment.</em>
                






</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
import TraduccionAudio from '../components/TraduccionAudio.vue'
export default {
  name: 'Tema2',
  components: {
    TraduccionT,
    TraduccionAudio,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>Knowing when to use formal or informal English at work will depend on the job you have, the people you are speaking with, and what you are talking about. When you do not know people well, using formal language helps you show respect and education.</em>',
        textoEsp:
          'Saber cuándo usar el inglés formal o informal en el trabajo, dependerá del trabajo que tenga, las personas con las que esté hablando y de qué esté hablando. Cuando no conoce bien a las personas, usar un lenguaje formal le ayuda a mostrar respeto y educación.',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em><b>Formal language</b><br><br>Formal language can be used when writing business emails, academic writing/articles, and professional academic situations. When talking in presentations or reporting to a large public. Official documents, speaking to superiors, writing legal documents, speeches, lectures, and job interviews.</em>',
        textoEsp:
          'El lenguaje formal se puede usar al escribir correos electrónicos comerciales, artículos/redacciones académicas y situaciones académicas profesionales. Al hablar en presentaciones o informar a un gran público. Documentos oficiales, hablar con superiores, escribir documentos legales, discursos, conferencias y entrevistas de trabajo.',
        audio: require('@/assets/componentes/audios/tema2/1.mp3'),
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em><b>Informal language</b><br><br>Informal language is used in situations that are more relaxed and that involve people that you know well or know each other well, In everyday conversations, personal emails, social media, advertising, spontaneous speech, text messages, talking to peers, some meeting notes, networking or socializing with clients and team meetings. </em>',
        textoEsp:
          'El lenguaje informal se usa en situaciones que son más relajadas y que involucran a personas que conoce bien o se conocen bien, en conversaciones cotidianas, correos electrónicos personales, redes sociales, publicidad, discurso espontáneo, mensajes de texto, hablar con compañeros, algunas actas de reuniones, establecer contactos o socializar con clientes y reuniones de equipo.',
        audio: require('@/assets/componentes/audios/tema2/2.mp3'),
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em><b>Contractions</b><br><br>In informal language, it is very common to use contractions as part of the language. Let’s see some of them. Here are some common contractions and the groups of words that they represent.</em>',
        textoEsp:
          'En el lenguaje informal, es muy común utilizar las contracciones como parte del lenguaje. Veamos algunas de ellas. Aquí hay algunas contracciones comunes y los grupos de palabras que representan.',
        audio: require('@/assets/componentes/audios/tema2/3.mp3'),
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em><b>Remember</b><br><br>You probably use contractions when you speak to your friends and family members every day; however, it is important to note that contractions are often considered inappropriate in formal writing. Professors, employers, and other professionals like to see that you have taken your time on a document, and using contractions is sometimes seen as a shortcut. To be safe, never use contractions when writing for a class or when writing a professional document, such as a personal statement or cover letter.</em>',
        textoEsp:
          'Probablemente, usted use contracciones cuando habla con sus amigos y familiares todos los días, sin embargo, es importante tener en cuenta que las contracciones a menudo se consideran inapropiadas en la escritura formal. A los profesores, empleadores y otros profesionales les gusta ver que se ha tomado su tiempo en un documento, y el uso de contracciones a veces se considera un atajo. Para estar seguro, nunca use contracciones cuando escriba para una clase o cuando escriba un documento profesional, como una declaración personal o una carta de presentación.',
      },
    ],
    dialogo6: [
      {
        textoIng:
          '<em>The speech is something that is mastered with practice and training, there is no person who can say or affirm he or she got a great speech just because. Most of the time, it requires practice, grammar, use of English, and listening. Here, you will find some tips to improve that.</em>',
        textoEsp:
          'El discurso es algo que se domina con la práctica y el entrenamiento, no hay una persona que pueda decir o afirmar que él o ella obtuvo un gran discurso simplemente porque sí. La mayoría de las veces, requiere práctica, gramática, uso del inglés y comprensión auditiva. Aquí encontrará algunos consejos para mejorarlo:',
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
