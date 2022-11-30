export default {
  global: {
    componenteFormativo: '<em>I would like to...</em><br> “Me gustaría...”',
    descripcionCurso:
      'Este componente va a ser la introducción al vocabulario sobre tecnología, el uso de modales, la forma de predicciones, el lenguaje informal, la comunicación con gran pronunciación, el habla y la forma de cambiar de tema en una conversación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/flot1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/flot2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/flot3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/flot4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/flot5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/flot6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/flot7.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em>Talking about technology</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em>Modals</em>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '<em>Predictions </em>',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Informal language</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '<em>Communicating with great pronunciation</em>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<em>English speech</em>',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Switching the topic in a conversation</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '<em>Talking about technology</em>',
      referencia:
        '<em>Yaccob, N. y Yunus, M. (2019). Language Games in Teaching and Learning English Grammar: A Literature Review. Arab World English Journal, 10(1), p. 209-217.</em>',
      tipo: 'Artículo',
      link: 'https://eric.ed.gov/?id=EJ1287782',
    },
    {
      tema: '<em>Communicating with great pronunciation.</em>',
      referencia:
        '<em>Kusumawardani, S. y Mardiyani, E. (2018). The correlation between English grammar competence and speaking fluency. PROJECT (Professional Journal of English Education), 1(6), p. 724-733.</em>',
      tipo: 'Artículo',
      descarga: '/downloads/articulo1.pdf',
    },
    {
      tema: '<em>Switching the topic in a conversation</em>',
      referencia:
        '<em>Mindt, D. (1995). An empirical grammar of the English verb: Modal verbs. Cornelsen.</em>',
      tipo: 'Artículo',
      link: 'https://tesl-ej.org/wordpress/issues/volume3/ej09/ej09r11/',
    },
  ],
  glosario: [
    {
      termino: '<em>English speech</em> / Discurso en inglés',
      significado:
        'discurso que se aprende, por lo general de personas expertas.',
    },
    {
      termino: '<em>Linkers</em> / conectores',
      significado:
        'palabras que conectan dos o más oraciones para tener sentido.',
    },
    {
      termino: '<em>Modal verbs</em> / verbos modales',
      significado:
        'modo gramatical usado para enfatizar el carácter de una oración, la función de esta. Usualmente, se escribe antes del verbo, por esto se le llama verbo auxiliar.',
    },
    {
      termino: '<em>Predictions</em> / Predicciones',
      significado:
        'ideas que se tienen frente a algo, por ejemplo, las creencias. ',
    },
    {
      termino: '<em>Switch</em> / cambiar',
      significado: 'acción de cambiar de tema.',
    },
  ],
  referencias: [
    {
      referencia:
        '<em>Advanced English with Mary Daphne. (2021). How to Switch Topics in English (Tips for Changing the Subject and Topic Shifts)</em>',
      link: 'https://www.youtube.com/watch?v=GKO4BpbyB3Y&t=23s',
    },
    {
      referencia:
        '<em>Hashemi, L. y Murphy, R. (2004). English Grammar in Use. Supplementary exercises. Cambridge University Press.</em>',
      link:
        'https://www.bostonschool.it/pdf/4_English_Grammar_in_Use_-_Supplementary_Exerc.pdf',
    },
    {
      referencia:
        '<em>Hewings, M. (2013). Advanced grammar in use with answers: A self-study reference and practice book for advanced learners of English. Cambridge University Press.</em>',
      link: 'https://catalogosiidca.csuca.org/Record/CR.UNA01000304684',
    },
    {
      referencia:
        '<em>Murphy, R., Viney, B. y Craven, M. (2004). English Grammar In Use with Answers and CD ROM: A Self-study Reference and Practice Book for Intermediate Students of English (Vol. 1). Cambridge University Press.</em>',
      link:
        'https://fama.us.es/permalink/34CBUA_US/18mroog/alma991008549369704987',
    },
    {
      referencia:
        '<em>Pell, C. (2022). Technology Vocabulary. IELTS Advantage.</em>',
      link: 'https://www.ieltsadvantage.com/2015/04/21/technology-vocabulary',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edith Grande',
        cargo: 'Experta temática',
        centro:
          'Centro para la Industria de la Comunicación Gráfica -Regional Distrito Capital',
      },
      {
        nombre: 'Óscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES - Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torrez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Andrés Díaz Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios -  Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación de contenido y audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
