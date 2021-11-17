export default {
  global: {
    componenteFormativo: 'Gestión de proyectos a partir del <em>brief</em>',
    descripcionCurso:
      'La recolección de la información con la herramienta <em>brief</em>, al igual que algunas de sus características, son las primeras herramientas que se deben tener en cuenta al momento de empezar un proyecto de cualquier índole. <br/><br/>Adicionalmente, es importante conocer y manejar las fases para la creación de un proyecto, en conjunto con los recursos que se deben disponer para realizar los seguimientos a cada una de las fases del proyecto.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: '<em>Brief</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de <em>brief</em> y sus elementos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Análisis e interpretación de la información',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Diseño, creatividad e innovación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Gestión de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Identificar los requerimientos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Fases y metodologías de programación de los proyectos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Recursos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Seguimiento y control',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estudio de mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '¿Cómo se realiza un estudio de mercados?',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnicas para realizar un estudio de mercados',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Tendencias',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Capriotti, P. (2009). Branding Corporativo. Fundamentos para la gestión estratégica de la Identidad Corporativa. Colección de Libros de la Empresa.',
      link: 'http://www.analisisdemedios.com/branding/BrandingCorporativo.pdf',
    },
    {
      referencia:
        'Osorio, O. (2020). Definición, importancia y fases del proceso creativo. Tinyrockets.',
      link: 'https://www.tinyrockets.app/blog/el-proceso-creativo#blog-sb1',
    },
    {
      referencia:
        'Peralta, E. (2018). Guía práctica para hacer un buen briefing. Genwords.',
      link: 'https://www.genwords.com/blog/briefing',
    },
    {
      referencia:
        'Pérez, G. (2017). ¿Qué es un brief y cómo hacer uno? Esmartia.',
      link:
        'https://resources.esmartia.com/blog/que-es-un-brief-y-como-hacer-uno',
    },
    {
      referencia:
        'Razak, A. (s. f.). Naming: definición, tipos y guía paso a paso. Branfluence.',
      link: 'https://www.branfluence.com/guia-proceso-de-naming/',
    },
    {
      referencia:
        'The Social Media Family. (2018). Cómo hacer un estudio de mercado paso a paso. Mailrelay.',
      link: 'https://blog.mailrelay.com/es/2018/09/06/estudio-de-mercado',
    },
  ],
  glosario: [
    {
      termino: '<em>Brief</em>',
      significado:
        'Es un documento informativo breve, conciso, completo y detallado del producto o servicio que da el cliente a la agencia de publicidad.',
    },
    {
      termino: '<em>Briefing</em>',
      significado:
        'Es la acción de crear el <em>brief</em> desde cualquier o en cualquier etapa. ',
    },
    {
      termino: 'KPIs',
      significado:
        '<em>“Key Performance Indicators”</em>, son los indicadores que medirán si la campaña o el proyecto llegaron a alcanzar los objetivos propuestos.',
    },
    {
      termino: 'Marca',
      significado:
        'Se entiende como una identificación comercial, conformada por atributos y valores que la hacen única.',
    },
    {
      termino: '<em>Objective Target</em>',
      significado:
        'Se conoce como el público objetivo, y es a quien estará destinada la campaña o proyecto. Posee unas características que lo perfilan y se puede catalogar.',
    },
    {
      termino: 'Público objetivo',
      significado:
        'Es una noción que se emplea en el ámbito del <em>marketing</em> y la publicidad. El concepto hace referencia a un consumidor representativo e ideal, al cual se dirige una campaña, o al comprador al que se aspira seducir con un producto o un servicio..',
    },
    {
      termino: '<em>SMART Objectives</em>',
      significado:
        'Son objetivos específicos, medibles, alcanzables, relevantes y con fechas límites.',
    },
    {
      termino: '<em>Timing</em>',
      significado:
        'Al momento de planificar, es importante tener claros los plazos de ejecución y los entregables, en un cronograma.',
    },
  ],
  complementario: [
    {
      texto:
        'Méndez, J. (2016). Brief o Briefing - Qué es y cómo hacer uno [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6vlN4DZVQGc',
    },
    {
      texto:
        'Mailrelay, Email Marketing. (2018). Cómo hacer un estudio de mercado paso a paso [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Fl_87setO5I',
    },
    {
      texto:
        'Martínez, C. (2016) Fases del proceso creativo by Graham Wallas [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Gk2jn5CHkYY',
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
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Guillermo Eduardo González T.',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Eduardo José Velasco A.',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito Capital',
      },
      {
        nombre: 'Gloria Amparo López escudero',
        cargo: 'Diseñadora instruccional ',
        centro: 'Centro de Gestión Industrial <br>Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial <br>Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja <br>Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
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
