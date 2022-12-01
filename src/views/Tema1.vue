<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <em>Talking about technology</em>
    
    .bg_grad-04
      .bg_grad-05
        .row.mb-5
          .col-lg-4(data-aos="fade-right")
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema1/1.svg", alt="alt")
          .col-lg-8
            TraduccionT.color-acento-botones.mt-5(:dialogo="dialogo1")(data-aos="flip-up")

        .row.mb-5.justify-content-center
          .col-lg-10
            SlyderF.mgb(columnas="col-lg-6 col-xl-4")
              .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}" style='height: 500px').pst_2
                .tarjeta.bgr_1.p-3
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema1/1.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  h4.text-center.colr <em>Innovative: </em>
                    span.colr_1 / Innovador:
                  p.text-center.colr <em>An adjective that refers to the use of new ideas or ways to do something. </em>
                    span.colr_1 / Adjetivo que se refiere al uso de nuevas ideas o formas de hacer algo.
              .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/3.png')})`}" style='height: 500px').pst_2
                .tarjeta.bgr_1.p-3
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema1/2.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  h4.text-center.colr <em>Develop: </em>
                    span.colr_1 / Desarrollar:
                  p.text-center.colr <em>To change for better, it means to improve something. </em>
                    span.colr_1 / Cambiar para mejor, significa mejorar algo.
              .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/4.png')})`}" style='height: 500px').pst_2
                .tarjeta.bgr_1.p-3
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema1/3.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  h4.text-center.colr <em>Device: </em>
                    span.colr_1 / Dispositivo:
                  p.text-center.colr <em>An object or machine that has been made for a certain purpose. In technology, it is used as a tool. </em>
                    span.colr_1 / Un objeto o máquina que se ha hecho para un propósito determinado. En tecnología se utiliza como herramienta.
              .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/5.png')})`}" style='height: 500px').pst_2
                .tarjeta.bgr_1.p-3
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema1/4.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  h4.text-center.colr <em>Indispensable: </em>
                    span.colr_1 / Indispensable:
                  p.text-center.colr <em>Something that is needed, it is mandatory to use it. </em>
                    span.colr_1 / Algo que se necesita, es obligatorio usarlo.
              .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/6.png')})`}" style='height: 500px').pst_2
                .tarjeta.bgr_1.p-3
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema1/5.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  h4.text-center.colr <em>E-commerce: </em>
                    span.colr_1 / Comercio electrónico:
                  p.text-center.colr <em>Buying and selling goods and services through the Internet. </em>
                    span.colr_1 / Compra y venta de bienes y servicios a través de Internet.
              .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/7.png')})`}" style='height: 500px').pst_2
                .tarjeta.bgr_1.p-3
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema1/6.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  h4.text-center.colr <em>Modify: </em>
                    span.colr_1 / Modificar:
                  p.text-center.colr <em>to change something in order to make it better. </em>
                    span.colr_1 / Cambiar algo para mejorarlo.
              .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/8.png')})`}" style='height: 500px').pst_2
                .tarjeta.bgr_1.p-3
                  Audio.color-acento-botones.m-auto.mb-3(
                    :audio="require('@/assets/componentes/audios/tema1/7.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
                  h4.text-center.colr <em>Breakthrough: </em>
                    span.colr_1 / Avance:
                  p.text-center.colr <em>An important discovery that helps improve a situation or answer a question. </em>
                    span.colr_1 / Un descubrimiento importante que ayuda a mejorar una situación o a responder una pregunta.
                  
      
        .row.justify-content-center.mb-5(data-aos="flip-up")
          .col-lg-10
            .tarjeta.bgr_2.p-3
              .row.d-flex.align-items-center.justify-content-center
                .col-lg-2.mb-3.mb-lg-0
                  figure.d-flex.justify-content-center
                    img.w-auto(src="@/assets/curso/tema1/9.svg", alt="alt")
                .col-lg-10.col-xl-5.mb-3.mb-xl-0
                  p.mb-0.colr <em>The topic of technology has a lot of words that you can use according to your profession and personal life. Please, check the next web to increase the vocabulary: </em> 
                    span.colr_1 / El tema de la tecnología tiene muchas palabras que puede usar de acuerdo con su profesión y vida personal. Por favor, revise la siguiente web para incrementar su vocabulario.
                .col-lg-8.col-xl-3
                  a.anexo(href="https://www.ieltsadvantage.com/2015/04/21/technology-vocabulary/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p Enlace <em>web. Technology Vocabulary. IELTS Advantage.</em>
    
    p.colr.mb-5 <em>Now, practice. Try to organize adjectives, nouns, collocations, and adverbs that are related to the word; then, make sentences and speak around the word for 3 minutes. For example:</em> 
      span.colr_1 Ahora, practique. Trate de organizar adjetivos, sustantivos, colocaciones y adverbios que estén relacionados con la palabra; luego, haga oraciones y hable alrededor de la palabra durante 3 minutos. Por ejemplo:

    .bg_grad-06
      .row.justify-content-center
        .col-lg-3(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/10.png", alt="alt")
        .col-lg-7.d-flex.align-items-center
          div
            .titulo-sexto.color-acento-contenido
              h5 Figure 1
              span <em>Organize ideas around the word “indispensable”</em>
            figure.d-flex.justify-content-center
              img.w-auto(src="@/assets/curso/tema1/11.svg", alt="alt")
    
    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 <em>Modals</em>
   
    .row.mb-5
      .col-lg-8
        TraduccionT.color-acento-botones(:dialogo="dialogo2")(data-aos="flip-up")
      .col-lg-4(data-aos="fade-left")
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/12.png", alt="alt")
    
    p.colr.text-center.mb-5 <em>Here we have a list of most of the modal verbs known in the English language with their uses:</em>

    .row.justify-content-center.mb-5
      .col-lg-6
        .bgr_3.p-4
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido.mb-5
                h5 Table 1
                span <em>List of the most common modal verbs  in English</em>
              .color-acento-botones.mb-5 
                table
                  thead.bgr_4
                    tr 
                      th.bgr_5(colspan='2') 
                        Audio.color-acento-botones.m-auto(
                          :audio="require('@/assets/componentes/audios/tema1/8.mp3')"
                          @audio-hover="mostrarIndicadorAudio = false"
                        )
                          .indicador--click(v-if="mostrarIndicadorAudio")
                    tr.text-center
                      th.bgr_5 <em>MODAL VERBS</em>
                      th.bgr_5 <em>FUNCTION</em>
                  tbody.text-center.bgr_1
                    tr
                      td.bgr_5 <em>Will</em>
                      td.bgr_5 
                        p <em>asking</em>
                        p <em>possibility</em>
                        p <em>suggestion</em>
                    tr
                      td.bgr_5 <em>Would</em>
                      td.bgr_5 <em>Requesting</em>
                    tr
                      td.bgr_5 <em>Shall</em>
                      td.bgr_5 
                        p <em>asking</em>
                        p <em>possibility</em>
                    tr
                      td.bgr_5 <em>Should</em>
                      td.bgr_5 
                        p <em>suggestion</em>
                        p <em>seeking advice</em>
                    tr
                      td.bgr_5 <em>Can</em>
                      td.bgr_5 
                        p <em>ability</em>
                        p <em>possibility</em>
                    tr
                      td.bgr_5 <em>Could</em>
                      td.bgr_5 
                        p <em>ability</em>
                        p <em>requesting</em>
                    tr
                      td.bgr_5 <em>May</em>
                      td.bgr_5 
                        p <em>possibility</em>
                        p <em>permission</em>
                        p <em>offering</em>
                    tr
                      td.bgr_5 <em>Might</em>
                      td.bgr_5 
                        p <em>possibility</em>
                        p <em>suggestion</em>
                    tr
                      td.bgr_5 <em>Must</em>
                      td.bgr_5 
                        p <em>obligation</em>
                        p <em>certainty</em>
                        p <em>strong probability</em>
                        p <em>prohibition</em>
                    tr
                      td.bgr_5 <em>Dare</em>
                      td.bgr_5 
                        p <em>have the courage</em>
                        p <em>challenge</em>
                        p <em>negative force</em>
                        p <em>interrogation</em>
                    tr
                      td.bgr_5 <em>Need</em>
                      td.bgr_5 
                        p <em>prohibition</em>
                        p <em>interrogation</em>
                    tr
                      td.bgr_5 <em>Used to</em>
                      td.bgr_5 
                        p <em>habitual action in the past</em>
                    tr
                      td.bgr_5 <em>Ought too</em>
                      td.bgr_5 
                        p <em>obligation</em>
                        p <em>strong likelihood</em>
    
    .row.mb-5.justify-content-center
      .col-lg-2.mb-3.mb-lg-0
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/13.svg", alt="alt")
      .col-lg-8 
        TraduccionT.color-acento-botones(:dialogo="dialogo3")(data-aos="flip-up")

    .bg_grad-07
      .row.mb-5
        .col-lg-4
          TraduccionAudio.color-acento-botones(:dialogo="dialogo4")(data-aos="flip-up")
        .col-lg-8
          .tarjeta.bgr_4.p-4
            .row.justify-content-center.mb-3
              .col-lg-6
                .bgr_1.tarjeta.pt-2.px-2
                  .row.justify-content-center
                    .col-lg-8.mt-2.mb-3.mb-lg-0
                      h4.mb-0.text-center <em>Modal verbs conjugation</em> 
                    .col-lg-2
                      Audio.color-acento-botones.m-auto.mb-3(
                        :audio="require('@/assets/componentes/audios/tema1/10.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorAudio")
            SlyderF.mgb(columnas="col-lg-6 col-xl-6")
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/11.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold.colr <em>COULD</em>
                p.text-center.colr <em>I COULD</em>
                p.text-center.colr <em>YOU COULD</em>
                p.text-center.colr <em>WE COULD</em>
                p.text-center.colr <em>HE COULD</em>
                p.text-center.colr <em>SHE COULD</em>
                p.text-center.colr <em>IT COULD</em>
                p.text-center.colr <em>THEY COULD</em>
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/12.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold.colr <em>SHOULD</em>
                p.text-center.colr <em>I SHOULD</em>
                p.text-center.colr <em>YOU SHOULD</em>
                p.text-center.colr <em>WE SHOULD</em>
                p.text-center.colr <em>HE SHOULD</em>
                p.text-center.colr <em>SHE SHOULD</em>
                p.text-center.colr <em>IT SHOULD</em>
                p.text-center.colr <em>THEY SHOULD</em>
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/13.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold.colr <em>MUST</em>
                p.text-center.colr <em>I MUST</em>
                p.text-center.colr <em>YOU MUST</em>
                p.text-center.colr <em>WE MUST</em>
                p.text-center.colr <em>HE MUST</em>
                p.text-center.colr <em>SHE MUST</em>
                p.text-center.colr <em>IT MUST</em>
                p.text-center.colr <em>THEY MUST</em>
      
      p.mb-5.text-center <em>Now, we are going to practice the structure in use with some sentences: </em>/ Ahora, vamos a practicar la estructura en uso con algunas oraciones:

      .row.mb-5.justify-content-center
        .col-lg-5.col-xl-5.mb-3.mb-lg-0(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/14.svg", alt="alt")
        .col-lg-5.col-xl-3.d-flex.justify-content-center
          TraduccionAudio.color-acento-botones(:dialogo="dialogo5")(data-aos="flip-up")
                    
    .bg_grad-08
      .row.mb-5
        .col-lg-4
          TraduccionT.color-acento-botones(:dialogo="dialogo6")(data-aos="flip-up")
        .col-lg-4.mb-3.mb-lg-0
          .tarjeta.bgr_4.p-4
            .row.justify-content-center.mb-3
              .col-lg-11
                .bgr_1.tarjeta
                  .row.justify-content-center.p-2
                    .col-lg-9.d-flex.align-items-center.justify-content-center.mb-3.mb-lg-0
                      h4.mb-0 <em>Modal verbs negative form</em> 
                    .col-lg-2.d-flex.align-items-center
                      Audio.color-acento-botones.m-auto(
                        :audio="require('@/assets/componentes/audios/tema1/15.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorAudio")
            SlyderF.mgb(columnas="col-lg-12 col-xl-12")
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/16.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold.colr <em>COULD + NOT</em>
                p.text-center.colr <em>I COULDN’T</em>
                p.text-center.colr <em>YOU COULDN’T</em>
                p.text-center.colr <em>WE COULDN’T</em>
                p.text-center.colr <em>HE COULDN’T</em>
                p.text-center.colr <em>SHE COULDN’T</em>
                p.text-center.colr <em>IT COULDN’T</em>
                p.text-center.colr <em>THEY COULDN’T</em>
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/17.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold.colr <em>SHOULD + NOT</em>
                p.text-center.colr <em>I  SHOULDN’T</em>
                p.text-center.colr <em>YOU SHOULDN’T</em>
                p.text-center.colr <em>WE SHOULDN’T</em>
                p.text-center.colr <em>HE SHOULDN’T</em>
                p.text-center.colr <em>SHE SHOULDN’T</em>
                p.text-center.colr <em>IT SHOULDN’T</em>
                p.text-center.colr <em>THEY SHOULDN’T</em>
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/18.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold.colr <em>MUST + NOT</em>
                p.text-center.colr <em>I MUSTN’T</em>
                p.text-center.colr <em>YOU MUSTN’T</em>
                p.text-center.colr <em>WE MUSTN’T</em>
                p.text-center.colr <em>HE MUSTN’T</em>
                p.text-center.colr <em>SHE MUSTN’T</em>
                p.text-center.colr <em>IT MUSTN’T</em>
                p.text-center.colr <em>THEY MUSTN’T</em>
        .col-lg-4
          .tarjeta.bgr_4.p-4
            .row.justify-content-center.mb-3
              .col-lg-11
                .bgr_1.tarjeta
                  .row.justify-content-center.p-2
                    .col-lg-9.d-flex.align-items-center.justify-content-center.mb-3.mb-lg-0
                      h4.mb-0 <em>Modal verbs question form</em> 
                    .col-lg-2.d-flex.align-items-center
                      Audio.color-acento-botones.m-auto(
                        :audio="require('@/assets/componentes/audios/tema1/45.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorAudio")
            SlyderF.mgb(columnas="col-lg-12 col-xl-12")
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/46.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold.colr <em>COULD</em>
                p.text-center.colr <em>COULD I?</em>
                p.text-center.colr <em>COULD YOU?</em>
                p.text-center.colr <em>COULD WE?</em>
                p.text-center.colr <em>COULD HE?</em>
                p.text-center.colr <em>COULD SHE?</em>
                p.text-center.colr <em>COULD IT?</em>
                p.text-center.colr <em>COULD THEY?</em>
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/47.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold.colr <em>SHOULD</em>
                p.text-center.colr <em>SHOULD I?</em>
                p.text-center.colr <em>SHOULD YOU?</em>
                p.text-center.colr <em>SHOULD WE?</em>
                p.text-center.colr <em>SHOULD HE?</em>
                p.text-center.colr <em>SHOULD SHE?</em>
                p.text-center.colr <em>SHOULD IT?</em>
                p.text-center.colr <em>SHOULD THEY?</em>
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/48.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold.colr <em>MUST</em>
                p.text-center.colr <em>MUST I?</em>
                p.text-center.colr <em>MUST YOU?</em>
                p.text-center.colr <em>MUST WE?</em>
                p.text-center.colr <em>MUST HE?</em>
                p.text-center.colr <em>MUST SHE?</em>
                p.text-center.colr <em>MUST IT?</em>
                p.text-center.colr <em>MUST THEY?</em>
      .row.mb-5.justify-content-center
        .col-lg-6.col-xl-6.mb-3.mb-lg-0(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/15.svg", alt="alt")
        .col-lg-6.col-xl-4.d-flex.justify-content-center
          TraduccionAudio.color-acento-botones(:dialogo="dialogo7")(data-aos="flip-up")
    
    .bg_grad-09
      .row.mb-5
        .col-lg-4
          TraduccionT.color-acento-botones(:dialogo="dialogo8")(data-aos="flip-up")
        .col-lg-8
          .tarjeta.bgr_6.p-4
            .row.justify-content-center.mb-3
              .col-lg-6
                .bgr_1.tarjeta.pt-2.px-2
                  .row.justify-content-center
                    .col-lg-9.mt-2.d-flex.justify-content-center.mb-3.mb-lg-0
                      h4.mb-0 <em>Modal verbs verb + verb rule</em> 
                    .col-lg-2
                      Audio.color-acento-botones.m-auto.mb-3(
                        :audio="require('@/assets/componentes/audios/tema1/20.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorAudio")
            SlyderF.mgb(columnas="col-lg-6 col-xl-6")
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/21.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold.colr <em>COULD</em>
                p.text-center.colr <em>I COULD GO</em>
                p.text-center.colr <em>YOU COULD EAT</em>
                p.text-center.colr <em>WE COULD COME</em>
                p.text-center.colr <em>HE COULD SEE</em>
                p.text-center.colr <em>SHE COULD BE</em>
                p.text-center.colr <em>IT COULD DO</em>
                p.text-center.colr <em>THEY COULD TAKE</em>
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/22.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold.colr <em>SHOULD</em>
                p.text-center.colr <em>I   SHOULD GO</em>
                p.text-center.colr <em>YOU  SHOULD EAT</em>
                p.text-center.colr <em>WE  SHOULD COME</em>
                p.text-center.colr <em>HE  SHOULD SEE</em>
                p.text-center.colr <em>SHE  SHOULD BE</em>
                p.text-center.colr <em>IT  SHOULD DO</em>
                p.text-center.colr <em>THEY  SHOULD TAKE</em>
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/23.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold.colr <em>MUST</em>
                p.text-center.colr <em>I MUST GO</em>
                p.text-center.colr <em>YOU MUST EAT</em>
                p.text-center.colr <em>WE MUST COME</em>
                p.text-center.colr <em>HE MUST SEE</em>
                p.text-center.colr <em>SHE MUST BE</em>
                p.text-center.colr <em>IT MUST DO</em>
                p.text-center.colr <em>THEY MUST TAKE</em>
      
      p <em>Now, we are going to practice the structure in use with some sentences: </em> / Ahora, vamos a practicar la estructura en uso con algunas oraciones:

      .row.mb-5.justify-content-center
        .col-lg-6.col-xl-6.mb-3.mb-lg-0(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/16.svg", alt="alt")
        .col-lg-5.col-xl-4.d-flex.justify-content-center
          TraduccionAudio.color-acento-botones(:dialogo="dialogo9")(data-aos="flip-up")
    
    .bg_grad-10
      .row.mb-5
        .col-lg-4
          TraduccionT.color-acento-botones(:dialogo="dialogo10")(data-aos="flip-up")
        .col-lg-8
          .tarjeta.bgr_6.p-4
            .row.justify-content-center.mb-3
              .col-lg-6
                .bgr_1.tarjeta.pt-2.px-2
                  .row.justify-content-center
                    .col-lg-7.mt-2.d-flex.justify-content-center.mb-3.mb-lg-0
                      h4.mb-0 <em>Modal Verb HAVE  TO</em> 
                    .col-lg-2
                      Audio.color-acento-botones.m-auto.mb-3(
                        :audio="require('@/assets/componentes/audios/tema1/25.mp3')"
                        @audio-hover="mostrarIndicadorAudio = false"
                      )
                        .indicador--click(v-if="mostrarIndicadorAudio")
            SlyderF.mgb(columnas="col-lg-6 col-xl-6")
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/26.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold.colr <em>CONJUGATION</em>
                p.text-center.colr <em>I HAVE TO…</em>
                p.text-center.colr <em>YOU HAVE TO…</em>
                p.text-center.colr <em>WE HAVE TO…</em>
                p.text-center.colr <em>THEY HAVE TO…</em>
                p.text-center.colr <em>SHE HAVE TO…</em>
                p.text-center.colr <em>IT HAVE TO…</em>
                p.text-center.colr <em>HE HAVE TO…</em>
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/27.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold.colr <em>NEGATIVE FORM</em>
                p.text-center.colr <em>I DON’T HAVE TO…</em>
                p.text-center.colr <em>YOU DON’T HAVE TO…</em>
                p.text-center.colr <em>WE DON’T HAVE TO…</em>
                p.text-center.colr <em>THEY DON’T HAVE TO…</em>
                p.text-center.colr <em>SHE DON’T HAVE TO…</em>
                p.text-center.colr <em>IT DON’T HAVE TO…</em>
                p.text-center.colr <em>HE DON’T HAVE TO…</em>
              .tarjeta.bgr_1.p-3
                Audio.color-acento-botones.m-auto.mb-3(
                  :audio="require('@/assets/componentes/audios/tema1/28.mp3')"
                  @audio-hover="mostrarIndicadorAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorAudio")
                p.text-center.text-bold.colr <em>QUESTION FORM</em>
                p.text-center.colr <em>DO I HAVE TO… ?</em>
                p.text-center.colr <em>DO YOU HAVE TO… ?</em>
                p.text-center.colr <em>DO WE HAVE TO… ?</em>
                p.text-center.colr <em>DO THEY HAVE TO… ?</em>
                p.text-center.colr <em>DOES SHE HAVE TO… ?</em>
                p.text-center.colr <em>DOES IT HAVE TO… ?</em>
                p.text-center.colr <em>DOES HE HAVE TO… ?</em>
      
      p <em>Now, we are going to practice the structure in use with some sentences: </em> / Ahora, vamos a practicar la estructura en uso con algunas oraciones:

      .row.mb-5.justify-content-center
        .col-lg-6.col-xl-4.order-md-2.order-lg-1(data-aos="fade-right")
          figure.d-flex.justify-content-center
            img.w-auto(src="@/assets/curso/tema1/17.svg", alt="alt")
        .col-lg-6.col-xl-4.mb-3.mb-lg-0.d-flex.justify-content-center.order-md-1.order-lg-2
          TraduccionAudio.color-acento-botones(:dialogo="dialogo11")(data-aos="flip-up")
                        
    TraduccionT.color-acento-botones(:dialogo="dialogo12").mb-5(data-aos="flip-up")    

    .row.mb-5
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="bgr_7 tarjeta")
          .row(titulo="<em>Could have + past participle verb</em>").bgr_1.tarjeta.p-4
            .col-lg-8.mb-4.mb-lg-0
              .row.bgr_8.p-3
                .col-lg-2
                  Audio.color-secundario.m-auto(
                      :audio="require('@/assets/componentes/audios/tema1/30.mp3')"
                      @audio-hover="mostrarIndicadorAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorAudio")
                .col-lg-10
                  p.colr <em>We use it to talk about something that could have happened or that someone could have done, but in the end it did not happen.</em>
                ul.lista-ul--color
                  li 
                    i.fas.fa-sun.colr_2
                    | <em>I could have studied languages, but I studied math.</em>
                  li 
                    i.fas.fa-sun.colr_2
                    | <em>She could have been an excellent teacher.</em>
                  li 
                    i.fas.fa-sun.colr_2
                    | <em>They could have won the match, but they needed more practice.</em> 
                  li 
                    i.fas.fa-sun.colr_2
                    | <em>He could have broken the window; fortunately, it didn’t happen.</em>  
            .col-lg-4
              p <em><b>Note:</b> we can also use it to guess something that happened in the past, but we are not sure. For example:</em>
          div(titulo="<em>Should have + past participle verb</em>").bgr_1.tarjeta.p-4
            .row.bgr_8.p-3
              .col-lg-2
                Audio.color-secundario.m-auto(
                    :audio="require('@/assets/componentes/audios/tema1/31.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
              .col-lg-10
                p.colr <em>This modal is used to talk about something that we should have done, it is like an advice we did not receive. For example:</em>
              ul.lista-ul--color
                li 
                  i.fas.fa-sun.colr_2
                  | <em>We should have studied more for the English exam.</em>
                li 
                  i.fas.fa-sun.colr_2
                  | <em>You should have called Elisa first.</em>
                li 
                  i.fas.fa-sun.colr_2
                  | <em>They should have gone to the university. </em> 
                li 
                  i.fas.fa-sun.colr_2
                  | <em>He should have bought the blue shirt.  </em> 
      .col-lg-4(data-aos="fade-left")
        figure.d-flex.justify-content-center
          img.w-auto.d-none.d-lg-flex(src="@/assets/curso/tema1/18.png", alt="alt")
      
    .row.mb-5
      .col-lg-4(data-aos="fade-right")
        figure.d-flex.justify-content-center
          img.w-auto.d-none.d-lg-flex(src="@/assets/curso/tema1/19.png", alt="alt")
      .col-lg-8
        AcordionA(tipo="b" clase-tarjeta="bgr_7 tarjeta")
          div(titulo="<em>Must have + past participle verb</em>").bgr_1.tarjeta.p-4
            .row.bgr_8.p-3
              .col-lg-2
                Audio.color-secundario.m-auto(
                    :audio="require('@/assets/componentes/audios/tema1/32.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
              .col-lg-10
                p.colr <em>We use this modal when we assume that something happened because it is a logical conclusion from the facts:</em>
              ul.lista-ul--color
                li 
                  i.fas.fa-sun.colr_2
                  | <em>William graduated with great grades. He must have studied a lot.</em>
                li 
                  i.fas.fa-sun.colr_2
                  | <em>Elisa graduated from the University with honors. She must have studied very hard.</em>
                li 
                  i.fas.fa-sun.colr_2
                  | <em>That is a beautiful house! It must have cost a lot!</em> 
          div(titulo="<em>Would have + past participle verb</em>").bgr_1.tarjeta.p-4
            .row.bgr_8.p-3
              .col-lg-2
                Audio.color-secundario.m-auto(
                    :audio="require('@/assets/componentes/audios/tema1/33.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
              .col-lg-10
                p.colr <em>This modal is used as a way to say we wish to have done something but it was not possible because something happened.</em>
              ul.lista-ul--color
                li 
                  i.fas.fa-sun.colr_2
                  | <em>I would have danced with you, but I cannot dance vallenato well. </em>
                li 
                  i.fas.fa-sun.colr_2
                  | <em>We would have bought the flat, but we didn't have any money. </em>
          div(titulo="<em>Might have + past participle verb</em>").bgr_1.tarjeta.p-4
            .row.bgr_8.p-3
              .col-lg-2
                Audio.color-secundario.m-auto(
                    :audio="require('@/assets/componentes/audios/tema1/34.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
              .col-lg-10
                p.colr <em> This modal verb is used when you are not sure that something occurred in the past. The structure is might have + past participle to express past probability.</em>
              ul.lista-ul--color
                li 
                  i.fas.fa-sun.colr_2
                  | <em>Paula isn’t here. She might have missed the bus.</em>
                li 
                  i.fas.fa-sun.colr_2
                  | <em>The road might have been blocked.</em>
    
    .bg_grad-11
      TraduccionT.color-acento-botones(:dialogo="dialogo13")(data-aos="flip-up")
      .row.justify-content-center.mb-5
        .col-md-8.col-lg-3.mb-3.mb-lg-0
          .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/20.png')})`}" style='height: 500px').pst_2
            .tarjeta.bgr_1.p-3
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema1/35.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              p.text-center <em>Technology could have been more useful in schools if the rules to use mobile were clearer and stricter.</em>
        .col-md-8.col-lg-3.mb-3.mb-lg-0
          .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/21.png')})`}" style='height: 500px').pst_2
            .tarjeta.bgr_1.p-3
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema1/36.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              p.text-center <em>Apps would be more useful if parents, teachers and students could communicate effectively.</em>
        .col-md-8.col-lg-3
          .tarjeta.p-4.d-flex.align-items-end.justify-content-center(:style="{'background-image': `url(${require('@/assets/curso/tema1/22.png')})`}" style='height: 500px').pst_2
            .tarjeta.bgr_1.p-3
              Audio.color-acento-botones.m-auto.mb-3(
                :audio="require('@/assets/componentes/audios/tema1/37.mp3')"
                @audio-hover="mostrarIndicadorAudio = false"
              )
                .indicador--click(v-if="mostrarIndicadorAudio")
              p.text-center <em>Teachers could use technology as a way to improve learning.</em>
    
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 <em>Predictions</em>
    
    .row.mb-5
      .col-lg-7
        TraduccionT.color-acento-botones(:dialogo="dialogo14")(data-aos="flip-up")
      .col-lg-5
        .titulo-sexto.color-acento-contenido
          h5 Figure 2
          span <em>The structure “will”. “Will” expresses predictions based on evidence”</em>
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/23.svg", alt="alt")

    p.colr.mb-5 <em>We also use “going to” when we want to make a prediction about the future. A prediction is a statement that we make about the future. When a person makes a prediction, they say what they think will happen in the future. </em>
      span.colr_1 / También usamos “<em>going to</em>” cuando queremos hacer una predicción sobre el futuro. Una predicción es una declaración que hacemos sobre el futuro. Cuando una persona hace una predicción, dice lo que cree que sucederá en el futuro.
    
    .row.mb-5.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figure 3
          span <em>The structure “going to” . “Going to” expresses predictions with no evidence.</em>
        figure.d-flex.justify-content-center
          img.w-auto(src="@/assets/curso/tema1/24.svg", alt="alt")
    
    p.colr.mb-5 <em>Now, we are going to practice. Listen to each audio, then complete the missing word and review again if it is necessary. Let’s go: </em>
      span.colr_1 / Ahora, vamos a practicar. Escuche cada audio, luego complete la palabra que falta y vuelva a revisar si es necesario. Vamos:
    
    Dialogo.color-primario(:dialogo="dialogo")(data-aos="zoom-in")
      template(#nombre-actividad) Arrastrar y Soltar
      template(#titulo-actividad) <em>Dialogue Technology and regrets</em> - Completa la conversación.
      template(#descripcion-actividad) Arrastra y suelta cada una de las palabras en el orden correcto.
    
    

               
                        
                      



      
</template>

<script>
import TraduccionT from '../components/TraduccionT.vue'
import TraduccionAudio from '../components/TraduccionAudio.vue'
export default {
  name: 'Tema1',
  components: {
    TraduccionT,
    TraduccionAudio,
  },
  data: () => ({
    dialogo1: [
      {
        textoIng:
          '<em>Tech affects the form people communicate, learn, and think, so it helps to interact through different channels. The tech plays an important paper in the society nowadays and has positive and negative effects, it is around our reality and that is the reason why we invite you to learn and practice some vocabulary that is shown next:</em>',
        textoEsp:
          'La tecnología afecta la forma en que las personas se comunican, aprenden y piensan, por lo que ayuda a interactuar a través de diferentes canales. La tecnología juega un papel importante en la sociedad actual y tiene efectos positivos y negativos, está en torno a nuestra realidad y es por esta razón que lo invitamos a aprender y practicar el vocabulario que se muestra a continuación:',
      },
    ],
    dialogo2: [
      {
        textoIng:
          '<em>First of all, let us remind you that modal verbs are used to express different intentions, such as assumptions, obligation, permission, ability, offers and requests, and advice, possibility and probability. Every single modal verb can have more than one use, it depends on the context in which the sentence is being used.</em>',
        textoEsp:
          'Antes que nada, déjenos recordarle que los verbos modales se usan para expresar diferentes intenciones, como suposiciones, obligación, permiso, habilidad, ofertas y solicitudes, y consejo, posibilidad y probabilidad. Cada verbo modal puede tener más de un uso, esto depende del contexto en el que se usa la oración.',
      },
    ],
    dialogo3: [
      {
        textoIng:
          '<em>It is also important to remember that all the modal verbs can talk in all the English tenses: present, past, or future. Most of them require a little help with an additional time expression to show the specific tense they need to refer to.</em>',
        textoEsp:
          'También es importante recordar que todos los verbos modales pueden hablar en todos los tiempos en inglés: presente, pasado o futuro. La mayoría de ellos requieren un poco de ayuda con una expresión de tiempo adicional para mostrar el tiempo específico al que necesitan referirse.',
      },
    ],
    dialogo4: [
      {
        textoIng:
          '<em>Let’s review some  main principles about modal verbs. There are three important rules to consider, the first one is the modal verbs are verbs of only one conjugation, this means all the pronouns work in the same way with these verbs:</em>',
        textoEsp:
          'Repasemos algunos principios fundamentales sobre los verbos modales. Hay tres reglas importantes a tener en cuenta, la primera es que los verbos modales son verbos de una sola conjugación, esto significa que todos los pronombres funcionan de la misma manera con estos verbos.',
        audio: require('@/assets/componentes/audios/tema1/9.mp3'),
      },
    ],
    dialogo5: [
      {
        textoIng:
          '<em><b>Structure in use</b><br><br>I could go to the party but I do not want to.<br>She should be the best student in the class.<br>They must practice twice a week.</em>',
        textoEsp:
          'Yo pude ir a la fiesta, pero no quise.<br>Ella debería ser la mejor estudiante en la clase.<br>Ellos deben practicar dos veces a la semana.',
        audio: require('@/assets/componentes/audios/tema1/14.mp3'),
      },
    ],
    dialogo6: [
      {
        textoIng:
          '<em>Now, remember that modal verbs do not require an auxiliary verb to work in a negative sentence or question, this refers to the fact that modals verbs present the negative form by themselves as they could do for question forms, too.</em>',
        textoEsp:
          'Ahora, recuerde que los verbos modales no requieren un verbo auxiliar para funcionar en una oración negativa o interrogativa, esto se refiere al hecho de que los verbos modales presentan la forma negativa por sí mismos como también lo hacen para las formas interrogativas.',
      },
    ],
    dialogo7: [
      {
        textoIng:
          '<em><b>Structure in use</b><br><br>I couldn’t talk to my boss today.<br>Could you help me please?<br>You shouldn’t leave before noon.<br>Should she go to see her doctor?<br>We mustn’t use cellphones in the cinema.<br>Must he pick up his trash?</em>',
        textoEsp:
          'Hoy no pude hablar con mi jefe.<br>¿Usted me podría ayudar, por favor?<br>-	No debes salir antes del mediodía.<br>¿Debe ir ella a ver a su médico?<br>No debemos utilizar celulares en el cine.<br>¿Debe él recoger su basura?',
        audio: require('@/assets/componentes/audios/tema1/19.mp3'),
      },
    ],
    dialogo8: [
      {
        textoIng:
          '<em>The third rule is about the verb + verb rule. This rule mentions that every single English verb which comes after another verb must be used in infinitive form (TO + verb) or in gerund form (verb + -ing), but in the case of the modal verbs, they do not follow this rule; all the verbs used after a modal verb are used in a bare infinitive form, this means without TO.</em>',
        textoEsp:
          'La tercera regla es la regla verbo + verbo. Esta regla menciona que todo verbo en inglés que viene después de otro verbo debe usarse en infinitivo (<em>TO</em> + verbo) o en gerundio (verbo + -ing), pero en el caso de los verbos modales, estos no siguen esta regla; todos los verbos que se usan después de un verbo modal se usan en forma de infinitivo simple, es decir, sin <em>TO</em>.',
      },
    ],
    dialogo9: [
      {
        textoIng:
          '<em><b>Structure in use</b><br><br>I could <b>help</b> you if you want<br>We should <b>save</b> money for our trip<br>It must <b>be</b> easy to do.</em>',
        textoEsp:
          'Yo podría ayudarte si quieres.<br>Debemos ahorrar dinero para nuestro viaje.<br>Debe ser fácil de hacer.',
        audio: require('@/assets/componentes/audios/tema1/24.mp3'),
      },
    ],
    dialogo10: [
      {
        textoIng:
          '<em>Finally, all the three rules mentioned before apply to all the modals verbs but the modal verb HAVE TO. This is because this modal verb has two conjugation forms, it does require an auxiliary verb to create the negative and question forms, and finally it has the particle TO between the modal and the verbs that comes after it.</em>',
        textoEsp:
          'Finalmente, las tres reglas mencionadas antes se aplican a todos los verbos modales excepto al verbo modal <em>HAVE TO</em>. Esto se debe a que este verbo modal tiene dos formas de conjugación, requiere verbos auxiliares para crear las formas negativa y de pregunta, y finalmente tiene la partícula <em>TO</em> entre el modal y los verbos que le siguen.',
      },
    ],
    dialogo11: [
      {
        textoIng:
          '<em><b>Structure in use</b><br><br>They have to study hard.<br>The dog has to be quiet<br>You don’t have to pay for that.<br>He doesn’t have to wear a uniform.<br>Do we have to work together?<br>Does it have to work here?</em>',
        textoEsp:
          'Tienen que estudiar duro.<br>El perro debe estar callado.<br>No tienes que pagar por eso.<br>Él no tiene que llevar uniforme.<br>¿Tenemos que trabajar juntos?<br>¿Tiene que funcionar aquí?',
        audio: require('@/assets/componentes/audios/tema1/44.mp3'),
      },
    ],
    dialogo12: [
      {
        textoIng:
          '<em>Now, let’s talk about how we can use modal verbs in <b>past tense</b>. These modal verbs can be combined with the present perfect (verb have + past participle of the main verb of the sentence) to refer to something that has already happened and we regret it happened or we did not do something to avoid it:</em>',
        textoEsp:
          'Ahora, hablemos sobre cómo podemos usar verbos modales en tiempo pasado. Estos verbos modales se pueden combinar con el presente perfecto (verbo have + participio pasado del verbo principal de la oración) para referirse a algo que ya pasó y que nos arrepentimos de que pasó o no hicimos algo para evitarlo:',
      },
    ],
    dialogo13: [
      {
        textoIng:
          '<em>Finally, remember that modals are used to talk about technology in the future. As nobody has the reason or way things will be, it is mandatory to predict with expressions such as: could have, would be, might be. According to the level of certainty the modals can change. For example:</em>',
        textoEsp:
          'Finalmente, recuerde que los modales se usan para hablar de tecnología en el futuro. Como nadie tiene la razón o la forma en que serán las cosas, es obligatorio predecir con expresiones como: <em>could have, would be, might be</em>. Según el nivel de certeza, los modales pueden cambiar. Por ejemplo:',
      },
    ],
    dialogo14: [
      {
        textoIng:
          '<em>The way to express predictions in most cases is by using the auxiliary verb of the future: will. There are so many things that can be predicted, for example, the weather or the help we can provide to someone as the situation comes. Also, when we are not sure about something, for instance, we have not planned well.</em>',
        textoEsp:
          'La forma de expresar predicciones en la mayoría de los casos es usando el verbo auxiliar del futuro: “<em>will</em>”. Hay tantas cosas que se pueden predecir, por ejemplo, el clima o la ayuda que podemos brindarle a alguien según se presenta la situación. Además, cuando no estamos seguros de algo, por ejemplo, no lo hemos planificado bien.:',
      },
    ],
    dialogo: {
      personajes: [
        {
          nombre: 'JHON',
          img: require('@/assets/curso/tema1/26.svg'),
        },
        {
          nombre: 'LUCY',
          img: require('@/assets/curso/tema1/25.svg'),
        },
      ],
      dialogo: [
        {
          personaje: 'JHON',
          textoIng: 'Lucy, do you remember the *** that I bought last week? ',
          textoEsp: 'Lucy, ¿recuerdas la cámara que compré la semana pasada?',
          audio: require('@/assets/componentes/audios/tema1/38.mp3'),
          palabra: 'camera',
        },
        {
          personaje: 'LUCY',
          textoIng: ' Sure, it was very ***. What happened to it? ',
          textoEsp: 'Claro, fue muy cara, ¿qué le pasó?',
          audio: require('@/assets/componentes/audios/tema1/39.mp3'),
          palabra: 'expensive',
        },
        {
          personaje: 'JHON',
          textoIng:
            'It is not working. And I cannot take it back. I lost the ***. I should have kept it properly.',
          textoEsp:
            'No está funcionando y no puedo devolverla porque perdí el recibo, debería haber guardado el recibo de manera apropiada.',
          audio: require('@/assets/componentes/audios/tema1/40.mp3'),
          palabra: 'receipt',
        },
        {
          personaje: 'LUCY',
          textoIng:
            ' I am so sorry. Did you check your ***? Maybe the shop sent you a copy. ',
          textoEsp:
            'Lo siento mucho. ¿Chequeaste el correo? Tal vez puedas pedir a la tienda que te envíe una copia.',
          audio: require('@/assets/componentes/audios/tema1/41.mp3'),
          palabra: 'email',
        },
        {
          personaje: 'JHON',
          textoIng:
            'I should have *** to you before; you always give me good advice. ',
          textoEsp:
            'Debí haber hablado contigo antes, siempre me das buen consejo.',
          audio: require('@/assets/componentes/audios/tema1/42.mp3'),
          palabra: 'talked',
        },
        {
          personaje: 'LUCY',
          textoIng: 'That’s what *** are for.',
          textoEsp: 'Para eso son los amigos.',
          audio: require('@/assets/componentes/audios/tema1/43.mp3'),
          palabra: 'friends',
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
