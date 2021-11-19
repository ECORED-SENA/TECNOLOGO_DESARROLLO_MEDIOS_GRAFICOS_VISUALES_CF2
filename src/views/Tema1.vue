<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-intro

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 <em>Brief</em>
    
    figure.mb-4
      img(src='@/assets/curso/tema1-banner.png', alt='Brief')

    p.mb-4(data-aos="fade") El <em>brief</em> o <em>briefing</em> 
      span.etiqueta es un documento tipo instructivo que se realiza en el sector publicitario.
      |  Este es elaborado por el ejecutivo de cuenta o el diseñador, a partir de la información que brinda el cliente respecto a su producto.  Este documento es entregado al diseñador en la etapa inicial del proyecto, es aquí donde se definen todos los objetivos que se desean cumplir. Los apartados del <em>brief</em> incluyen la descripción del producto, la empresa, marca, sector al que pertenece, evolución gráfica, evolución en el tiempo, productos de la competencia, ventajas sobre otras marcas, localización, posicionamiento a futuro, cultura corporativa, etc.  

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .row.cajon.color-acento-botones.p-4
          .col-md-5.mb-4.mb-md-0
            img.px-md-3(src='@/assets/curso/tema1-img.svg', alt='Imagen decorativa')
          .col-md-7.mb-4
            p.mb-0 El estudio del público o consumidor es muy importante de definir, ya que limita el alcance de la campaña; en este sentido, la demografía se refiere a muchos aspectos, como la calidad de vida, hábitos de consumo o condición económica de cierto grupo poblacional. De igual manera, se tienen en cuenta las campañas realizadas anteriormente por la empresa, con el objetivo de utilizar un mismo lenguaje. El <em>brief</em> marca la pauta en cuanto a los tiempos de ejecución, en algunos casos, el presupuesto estimado y otros requerimientos del cliente y el diseñador. 

    .row.bg-elemento.justify-content-center.py-3.align-items-end.mb-4(data-aos="fade-down") 
      .col-md-2.col-5
        img.px-md-4(src='@/assets/curso/tema1-ico1.svg', alt='Icono decorativo')
      .col-md-8
        .row.align-items-center
          .col-md-9.mb-3.mb-md-0
            h4 <em>Brief</em>
            p.text-small.mb-0 A continuación, observe el video <em>Brief</em> para una mejor contextualización de su importancia, sus elementos y cómo puede ayudar a clasificar de una mejor manera los proyectos.
          .col-md-1
            a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

    p.mb-4(data-aos="fade")
      strong Por medio del <em>brief</em> podemos saber si las expectativas de un cliente son exageradas o por el contrario un poco tímidas. 
      | Cada agencia o diseñador realiza su propio formato de brief, ya que no existe un patrón universal del mismo, es más bien un formato acomodado a las necesidades requeridas.

    .row.bg-elemento.justify-content-center.py-3.align-items-end(data-aos="fade-down") 
      .col-md-2.col-5
        img.px-md-4(src='@/assets/curso/tema1-ico2.svg', alt='Icono decorativo')
      .col-md-8
        .row.align-items-center
          .col-md-9.mb-3.mb-md-0
            h4 <em>Brief</em> o <em>Briefing</em>
            p.text-small.mb-0 Para reforzar y profundizar sus conceptos en este tema, lo invitamos a ver el video. El 
              strong <em>Brief</em>  
              |  o 
              strong <em>Briefing</em> 
              | , que encuentra disponible en el material complementario.
          .col-md-1
            a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

    Separador


    // 1.1
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.1  Tipos de brief y sus elementos 

    p.mb-4(data-aos="fade") Existen diversos tipos de <em>briefing</em>, como los que puede conocer de manera más detallada a continuación:

    .tarjeta.bg-secundario.mb-4(data-aos="fade-down")
      SlyderA.py-5.px-md-0.px-4
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 <em>Briefing</em> publicitario
            p Este documento va dirigido a las empresas de publicidad, con las directrices y lineamientos a seguir en el proceso, los elementos principales son:
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-chevron-right
                | Canales que se van a utilizar.
              li.mb-0 
                i.fas.fa-chevron-right
                | Público al cual se dirige la campaña (target).
              li.mb-0 
                i.fas.fa-chevron-right
                | Directrices del tono y uso del lenguaje comunicativo.
              li.mb-0 
                i.fas.fa-chevron-right
                | Propuesta de venta y USP (siglas en inglés de Unique Selling Proposition, lo que traduce “propuesta única de venta o de valor”).
              li.mb-0 
                i.fas.fa-chevron-right
                | Fechas exactas de lanzamientos en los canales propuestos.
              li.mb-0 
                i.fas.fa-chevron-right
                | Objetivos de cada campaña.
              li 
                i.fas.fa-chevron-right
                | Presupuesto final para toda la campaña.          
          .col-md-4
            figure
              img(src='@/assets/curso/tema1-slider1.svg', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 <em>Briefing</em> creativo
            p Busca dar las herramientas necesarias al equipo creativo para desarrollar ideas que revolucionen e impacten de manera propositiva la campaña. Corresponde a la información detallada a nivel gráfico y visual, con toda la propuesta de piezas y acciones a desarrollar: marca, logotipo, poster, catálogo, promoción, formatos, materiales, entre otros.
          .col-md-4
            figure
              img(src='@/assets/curso/tema1-slider2.svg', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 <em>Briefing</em> de <em>marketing</em>
            p Se utiliza en <em>marketing</em> y define parámetros de la campaña, por ejemplo, si será digital o tradicional. El desarrollo del <em>brief</em> se orienta a través de las siguientes preguntas:
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-chevron-right
                | ¿Qué producto se va a vender y en qué lugar?
              li.mb-0 
                i.fas.fa-chevron-right
                | ¿Cuál es el cliente potencial e ideal?
              li.mb-0 
                i.fas.fa-chevron-right
                | ¿Qué necesidades requiere suplir?
              li.mb-0 
                i.fas.fa-chevron-right
                | ¿Por qué y en qué se puede ayudar?
              li.mb-0 
                i.fas.fa-chevron-right
                | ¿Pertenece a algún grupo o nicho de mercado?
              li.mb-0 
                i.fas.fa-chevron-right
                | ¿Por qué ese cliente compra a la competencia?
              li.mb-0  
                i.fas.fa-chevron-right
                | ¿Qué se busca con la venta? 
              li 
                i.fas.fa-chevron-right
                | ¿Qué objetivos y presupuesto se tienen contemplados?   
          .col-md-4
            figure
              img(src='@/assets/curso/tema1-slider3.svg', alt='Texto que describa la imagen')  
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 <em>Briefing</em> de negocio
            p Presenta una estructura similar al <em>brief</em> de <em>marketing</em>, enfocado de manera estratégica hacia el proyecto, sus principales elementos son:
            ul.lista-ul--color
              li.mb-0
                i.fas.fa-chevron-right
                | ¿Qué producto se va a vender y en qué lugar?
              li.mb-0 
                i.fas.fa-chevron-right
                | ¿Cuál es el cliente potencial e ideal?
              li.mb-0 
                i.fas.fa-chevron-right
                | ¿Qué necesidades requiere suplir?
              li.mb-0 
                i.fas.fa-chevron-right
                | ¿Por qué y en qué se puede ayudar?
              li.mb-0 
                i.fas.fa-chevron-right
                | ¿Pertenece a algún grupo o nicho de mercado?
              li.mb-0 
                i.fas.fa-chevron-right
                | ¿Por qué ese cliente compra a la competencia?
              li.mb-0  
                i.fas.fa-chevron-right
                | ¿Qué se busca con la venta? 
              li 
                i.fas.fa-chevron-right
                | ¿Qué objetivos y presupuesto se tienen contemplados?   
          .col-md-4
            figure
              img(src='@/assets/curso/tema1-slider4.svg', alt='Texto que describa la imagen')            

    p.mb-4(data-aos="fade") De otra parte, y de mucha importancia, están los elementos que se deben tener presentes, estos son:

    .tarjeta.bg-acento-botones.p-4(data-aos="fade-down")
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center(titulo="Objetivo")
          .col-md-5.mb-4.mb-md-0
            h4 Objetivo
            p Conocer el <b>objetivo</b> primordial de la campaña o del elemento de la comunicación. Acá se empieza a trazar la vía por donde irá la estrategia y se plantearán las primeras ideas de cómo se llevará a cabo.
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-paso1.png', alt='Objetivo')
        .row.justify-content-center(titulo="Público")
          .col-md-5.mb-4.mb-md-0
            h4 Público
            p Conocer el <b>público</b> a quien va dirigido influirá en la manera como se comunica o se plasman las ideas, se elaboran ideales y se plantean formas de cómo llegar a ese tipo de personas.
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-paso2.png', alt='Público')      
        .row.justify-content-center(titulo="Características")
          .col-md-5.mb-4.mb-md-0
            h4 Características
            p Saber las 
              strong características e ideales de la empresa
              |, para no tener problemas al momento de plantear posibilidades y poder trabajar de la mano y pensando en el bien común.  
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-paso3.png', alt='Características')
        .row.justify-content-center(titulo="Necesidades específicas")
          .col-md-5.mb-4.mb-md-0
            h4 Necesidades específicas
            p Las 
              strong necesidades específicas 
              | tienen que ver con esos elementos que el cliente tiene presentes, sean características o información que se debe tener siempre al momento de pensar en la elaboración de la estrategia o el proyecto. 
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-paso4.png', alt='Necesidades específicas')
        .row.justify-content-center(titulo="Kpis")
          .col-md-5.mb-4.mb-md-0
            h4 Kpis
            p Los <b>Kpis</b> son elementos que van a reconocer si se están haciendo bien las cosas, los indicadores de rendimiento que permitirán tomar medidas y visualizar errores.
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-paso5.png', alt='Kpis')
        .row.justify-content-center(titulo="Condicionantes")
          .col-md-5.mb-4.mb-md-0
            h4 Condicionantes
            p Las <b>condicionantes</b> son los temas o elementos que, como su nombre indica, condicionarán los elementos, ya sea por cuestiones presupuestales o simplemente decisiones del cliente.  
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-paso6.png', alt='Condicionantes')
        .row.justify-content-center(titulo="Presupuesto")
          .col-md-5.mb-4.mb-md-0
            h4 Presupuesto
            p El <b>presupuesto</b> es indispensable para no soñar con proyectos inalcanzables, ayuda a tener los pies en la tierra, centrarse y administrar la energía para el aprovechamiento de todos los recursos.
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-paso7.png', alt='Presupuesto')
        .row.justify-content-center(titulo="<em>Timing</em>")
          .col-md-5.mb-4.mb-md-0
            h4 <em>Timing</em>
            p El 
              strong <em>timing</em> 
              |  es otro elemento importante a tener en cuenta, ya que se debe ser precisos en los momentos de las entregas, de las presentaciones y reuniones con los clientes. Se trata de saber cuáles van a ser los plazos de ejecución, lo que permitirá ser más organizados.
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-paso8.png', alt='Timing')
        .row.justify-content-center(titulo="<em>Look and Feel</em>")
          .col-md-5.mb-4.mb-md-0
            h4 <em>Look and Feel</em>
            p El 
              strong <em>look and feel</em> 
              |  se puede entender como las características visuales y estéticas que se utilizarán al momento de la creación de los proyectos, al igual que algunas referencias a tener en cuenta.
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-paso9.png', alt='Look and Feel')
        .row.justify-content-center(titulo="Especificaciones técnicas")
          .col-md-5.mb-4.mb-md-0
            h4 Especificaciones técnicas
            p Las 
              strong especificaciones técnicas 
              | son las características específicas de cómo el cliente quiere algo; se determinan todas las necesarias para no tener inconvenientes al momento de la creación del proyecto.
          .col-md-5
            figure
              img(src='@/assets/curso/tema1-paso10.png', alt='Especificaciones técnicas')                                    


    Separador


    // 1.2
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.2  Análisis e interpretación de la información

    .row.mb-md-5
      .col-md-7.mb-4(data-aos="fade-right")
        p Queda claro que el brief es muy importante, ya que facilita toda la información del producto en una primera instancia, antes de desarrollar las estrategias pertinentes. Si se llegase a tener dudas o inquietudes, es importante aclarar el contenido con el cliente antes de iniciar.  Para hacer un buen análisis de esta información, hay que ser muy observador; delimitar cualquier tipo de pesquisa, por pequeña que parezca, puede ser de gran utilidad en el éxito del proyecto. 
        .row.justify-content-center.cajon.color-acento-botones.p-4
          .col-md-3.col-5.mb-4.mb-md-0
            img.px-md-3(src='@/assets/curso/tema1-2-ico1.svg', alt='Icono decorativo')
          .col-md-9
            p.mb-0 Junto con el equipo de trabajo, se pueden desarrollar preguntas en torno al 
              strong ¿qué?, ¿por qué?, ¿quién?, ¿cómo?
              |, tanto cuando se tiene un brief completo como cuando no. Un elemento importante para tener una interpretación correcta es el estudio conciso e identificación del público objetivo; en este punto, hay que ser muy concretos, ya que de este aspecto dependerá el éxito del trabajo.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1-2-img.png', alt='Imagen decorativa')

    .titulo-tercero.mb-5(data-aos="fade-right")
      h3.mb-0 Para estudiar un cliente es necesario investigar las siguientes variables:
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    .row
      .col-sm-6.col-xl-3.mb-4
        .tarjeta.tarjeta-flip.color-primario.text-center
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1-flip1.svg', alt='Delimitación demográfica')
              h4 Delimitación demográfica
            .tarjeta-flip__contenido.p-4
              h5 Delimitación demográfica
              p.mb-0 Delimitar demográfica y conductualmente el rango de personas que son o van a ser clientes objetivos del producto. La delimitación demográfica puede ser de gran importancia, pues ayuda a entender un sinfín de variables respecto al consumidor. 
      .col-sm-6.col-xl-3.mb-4
        .tarjeta.tarjeta-flip.color-primario.text-center(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1-flip2.svg', alt='Nicho de mercado ')
              h4 Nicho de mercado 
            .tarjeta-flip__contenido.p-4
              h5 Nicho de mercado 
              p.mb-0 Edad a la cual va a ser dirigido, nicho de mercado (porción o segmento de éste). Es importante hacer un estudio preciso de este punto, ya que no todos los productos son para todas las edades, por ejemplo, un videojuego no es un producto muy factible para un padre de familia, pero sí para su hijo. 
      .col-sm-6.col-xl-3.mb-4
        .tarjeta.tarjeta-flip.color-primario.text-center
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1-flip3.svg', alt='Identificación por sexo')
              h4 Identificación por sexo
            .tarjeta-flip__contenido.p-4
              h5 Identificación por sexo
              p.mb-0 Algunos productos son utilizados tanto por hombres como por mujeres, sin embargo, algunos son de uso exclusivo de un solo grupo, por ejemplo, la espuma de afeitar.
      .col-sm-6.col-xl-3.mb-4
        .tarjeta.tarjeta-flip.color-primario.text-center
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1-flip4.svg', alt='Ubicación geográfica')
              h4 Ubicación geográfica 
            .tarjeta-flip__contenido.p-4
              h5 Ubicación geográfica
              p.mb-0 La ubicación geográfica es muy importante a tener en cuenta. Por ejemplo, tratar de vender una ruana en Tunja y en Cartagena; a pesar de ser dos ciudades de un mismo país, es un producto que solo se venderá en una de ellas, dadas sus condiciones climáticas.       
    .row.justify-content-center
      .col-sm-6.col-xl-3.mb-4
        .tarjeta.tarjeta-flip.color-primario.text-center
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1-flip5.svg', alt='Nivel educativo')
              h4 Nivel educativo
            .tarjeta-flip__contenido.p-4
              h5 Nivel educativo
              p.mb-0 El nivel educativo determina muchas acciones respecto a la acción de compra. Por ejemplo, una persona analfabeta posiblemente nunca se dirija a una librería a comprar un libro. 
      .col-sm-6.col-xl-3.mb-4
        .tarjeta.tarjeta-flip.color-primario.text-center
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1-flip6.svg', alt='Poder adquisitivo')
              h4 Poder adquisitivo
            .tarjeta-flip__contenido.p-4
              h5 Poder adquisitivo 
              p.mb-0 Es muy importante determinar a quién va encaminado el producto, por ejemplo, un reloj de lujo va dirigido a un grupo en particular. 
      .col-sm-6.col-xl-3.mb-4
        .tarjeta.tarjeta-flip.color-primario.text-center
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              img.mb-3(src='@/assets/curso/tema1-flip7.svg', alt='Hábitos de consumo')
              h4 Hábitos de consumo
            .tarjeta-flip__contenido.p-4
              h5 Hábitos de consumo
              p.mb-0 Por ejemplo, hoy en día, hay muchas personas que han optado por una alimentación vegana, vegetariana, celíaca, o simplemente personas que pueden consumir todos los tipos de alimentos, por diferentes motivos.

    p.mb-4(data-aos="fade") Reconocer a quién va dirigido <b>(público objetivo)</b> ayudará a identificar los detalles del producto o la marca y las estrategias que se deberán seguir, permitiéndole al diseñador establecer el punto de partida para entender cómo desarrollar la campaña con una propuesta innovadora y cuáles serán los objetivos a conseguir, asimismo, definir los medios más eficientes a utilizar en la estrategia de diseño. Por lo anterior, revise con mucho detenimiento la siguiente presentación, que le ayudará a profundizar este tema tan importante:

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        ImagenInfograficaB.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1-2-infografia.svg', alt='Texto que describa la imagen')

          div.row(x="13%" y="59%" tooltip="Conociendo al cliente. Revisar la información" numero="1")
            h4 Conociendo al cliente. Revisar la información
            .col-md-8
              p De acuerdo con Reizenstein (2004), “un cliente es la persona o empresa receptora de un bien, servicio, producto o idea, a cambio de dinero u otro artículo de valor”. Conocer el cliente es fundamental para el buen desarrollo del trabajo, es importante dar una buena primera impresión, mediante la empatía, el ingenio y las buenas ideas para su proyecto. Cuando hay un buen ambiente entre cliente y el diseñador, publicista o agencia de mercadeo, es muy factible asegurar en gran parte el éxito de la campaña.
              p Nunca hay que comenzar un trabajo sin saber lo que el cliente desea del mismo; cuál es la visión de su producto, como ve su propia empresa, si es objetivo respecto a la misma o un poco soñador, esto dará una visión particular del camino que debe recorrer. 
              .row.cajon.color-primario.p-3
                .col-md-4.mb-4.mb-md-0
                  img.px-md-3(src='@/assets/curso/tema1-2-modal-ico1.svg', alt='Imagen decorativa')
                .col-md-8
                  p.mb-0 Revisar la información de manera clara y concisa, ejecutando una buena planificación del proyecto, contribuyen al éxito. Es de vital importancia estudiar los datos esenciales del brief, como los objetivos y el direccionamiento de este, teniendo siempre un concepto objetivo, sin desviar el proyecto a capricho personal; se debe recordar que, aunque usted sea la mente creativa, no se trabaja para sí mismo sino para otra persona. 
            .col-md-4
              img(src='@/assets/curso/tema1-2-modal1.jpg', alt='Conociendo al cliente. Revisar la información')

          div.row(x="42.3%" y="51%" tooltip="Retroalimentación de propuestas" numero="2")
            h4 Retroalimentación de propuestas
            .col-md-8
              p Como retroalimentación se designa el método de control de sistemas en el cual los resultados obtenidos de una tarea o actividad son reintroducidos nuevamente en el sistema con el fin de controlar y optimizar su comportamiento. Como tal, la retroalimentación se aplica prácticamente a cualquier proceso que involucre mecánicas semejantes de ajuste y autorregulación de un sistema (Coelho, 2019). 
              p La retroalimentación entre el emisor y el receptor se considera el aspecto más importante a tener en cuenta en la comunicación; 
                strong el receptor a partir del mensaje recibido por el emisor, puede establecer una comunicación efectiva 
                | es decir, un intercambio de información en doble vía, que permitirá intensificar las conductas positivas del mensaje, disponer de herramientas creativas a fin de entender y percibir de la mejor manera la información para configurar, cambiar o mejorar el mensaje de su interlocutor. La retroalimentación obedece a ciertos pasos importantes que son: 
              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-chevron-right
                  | La planificación.
                li.mb-0
                  i.fas.fa-chevron-right
                  | La ejecución.
                li.mb-0
                  i.fas.fa-chevron-right
                  | El cierre.
            .col-md-4
              img(src='@/assets/curso/tema1-2-modal2.jpg', alt='Retroalimentación de propuestas')    

          div.row(x="49.3%" y="36%" tooltip="La planificación" numero="3")
            h4 La planificación
            .col-md-7
              p Antes de iniciar cualquier actividad es indispensable realizar una planificación, esta nos provee los pasos necesarios para una consecución exitosa de cualquier tarea, esto aplica en la retroalimentación o feedback; es importante definir el objetivo, identificar cuál es el problema o la pregunta que se desea responder, cuáles son las incógnitas a despejar que permitan una mejor comprensión de la situación; de esta manera, poder recopilar la información necesaria, relevante y exacta, que por pequeña que parezca puede llegar a ser muy valiosa. 
            .col-md-5
              img(src='@/assets/curso/tema1-2-modal3.svg', alt='La planificación')

          div.row(x="56.5%" y="47.3%" tooltip="La ejecución" numero="4")
            h4 La ejecución
            .col-md-7
              p Es importante formular las preguntas pertinentes y necesarias, estas permiten la interacción con el equipo de trabajo, y con ello ampliar y contribuir con las propuestas que no se han logrado concretar; así se contará con diferentes puntos de vista que permitirán observar otras aristas del problema, otras áreas por recorrer, otras soluciones para abordar. ¿Cómo consideran que se ve el empaque de color rojo?, solo a partir de esta pregunta permitirá, inclusive, generar un plan de acción. El integrar al proceso a todos los implicados conlleva a que la ejecución no sea una meta de un solo elemento aislado sino más bien sea un éxito planeado desde lo grupal. 
            .col-md-5
              img(src='@/assets/curso/tema1-2-modal4.svg', alt='La ejecución')

          div.row(x="66.3%" y="47.3%" tooltip="El cierre" numero="5")
            h4 El cierre
            .col-md-7
              p Una vez terminada la sesión de retroalimentación es importante hacer un resumen de la misma, los puntos que se aclaran, los objetivos y acuerdos a los que se llegaron, para que el feedback sea realmente efectivo y lleve a una ganancia personal, del equipo, la empresa y por supuesto el cliente. 
            .col-md-5
              img(src='@/assets/curso/tema1-2-modal5.svg', alt='El cierre')    


    .row.bg-elemento.justify-content-center.py-3.align-items-end.mb-4(data-aos="fade-down") 
      .col-md-2.col-5
        img.px-md-4(src='@/assets/curso/tema1-2-ico2.svg', alt='Icono decorativo')
      .col-md-8
        .row.align-items-center
          .col-md-9.mb-3.mb-md-0
            h4 Modelos <em>Brief</em>
            p.text-small.mb-0 Para conocer y familiarizarse con diversos formatos para recopilar información con mayor claridad, descargue el siguiente documento.
          .col-md-1
            a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/Plantilla-Brief.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

    .row.justify-content-center(data-aos="fade-down") 
      .col-md-8
        a.anexo.mb-4.mb-lg-0(href="https://www.dropbox.com/sh/00se7o7b5rognuk/AACYMVT5uomC8VqLN_0vuKoJa?dl=0" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
          p <b>Enlace web.</b> Para  reforzar sus conceptos en este tema, se le invita a visitar el siguiente enlace de Dropbox, donde podrá encontrar algunos modelos de brief, que ayudarán a recopilar la información con más claridad, ¡no deje de revisarlos!

    Separador


    // 1.3
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.3  Diseño, creatividad e innovación

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Tratar de sintetizar un proceso creativo y poder analizar cada fase para la generación de ideas no se considera posible, aunque el profesor inglés, Graham Wallas, se acercó bastante y ha sido su estudio pragmático uno de los más aceptados al momento de la creación de cualquier proceso creativo.
        p El doctor Wallas divide su proceso en cuatro grandes etapas, pero antes se debe definir qué es un proceso creativo.
        .row.justify-content-center.cajon.color-acento-botones.p-4.mb-4
          .col-md-3.col-5.mb-4.mb-md-0
            img.px-md-3(src='@/assets/curso/tema1-3-ico1.svg', alt='Icono decorativo')
          .col-md-9
            p.mb-0 El <b>proceso creativo</b> se puede pensar en cómo, a través de la consecución de varios pensamientos, bien encaminados, se logran visualizar y conceptualizar ideas para crear finalmente cosas novedosas, de una manera que otras personas no han contemplado, visto, o simplemente han pasado por alto.  
        p Todo proceso creativo varía de acuerdo con cada individuo, ya que sus conocimientos, su forma de pensar y sus asociaciones con los elementos de la vida generan en cada persona un proceso creativo diferente, con un concepto diferente.    
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1-3-img.png', alt='Imagen decorativa')
    
    p.mb-4(data-aos="fade") A continuación, conocerá las etapas del proceso creativo:

    figure.mb-4
      img(src='@/assets/curso/tema1-3-infografia.svg', alt='Etapas del proceso creativo')

    p.mb-4(data-aos="fade") No solo la producción de ideas entra en el ámbito de la creatividad, también los métodos con los que se va a trabajar pueden ser creativos. Incluso el clima del lugar de trabajo o la sala de reuniones donde se produce la “tormenta de ideas” puede ser un espacio creativo.

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Hay muchos mitos en torno a la creatividad y uno de los que se debe descartar es que la creatividad es patrimonio de los genios. Hay personas que son creativas y otras que se “vuelven creativas”. 
          strong Las investigaciones han demostrado que cada persona es capaz de desarrollar y desplegar su propia creatividad.
        p Recopilar información es quizás la fase más importante, pues se tendrá la oportunidad de comprobar que, cuando el proyecto fracasa, hay que regresar a la casilla de salida que es, precisamente, aquella donde nacieron las ideas base del proyecto. En este punto, se hace necesario escribir y pensar la dirección que se va a tomar y que se necesita para llevar a cabo todos los planteamientos del proyecto.
        .row.justify-content-center.cajon.color-acento-botones.p-4.mb-4
          .col-md-3.col-5.mb-4.mb-md-0
            img.px-md-2(src='@/assets/curso/tema1-3-ico2.svg', alt='Icono decorativo')
          .col-md-9
            p.mb-0 Pero, ¿qué sucede si se dan los denominados “bloqueos creativos”? 
              br
              | Todos pasan por esas situaciones y lo primero que se debe entender es que los bloqueos son temporales y que, a su vez, existen diferentes bloqueos y que cada uno se debe atacar desde su posición.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1-3-img2.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Existen diversos tipos de bloqueo, como son

    .row.mb-4.mb-md-5(data-aos="fade-down")
      .col-lg-4.mb-3.mb-md-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1-3-tarj1.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.text-white.mb-0 Bloqueos mentales
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h5 Bloqueos mentales
              p.mb-0  Son los que están relacionados con esos pensamientos ya construidos y que bloquean toda idea nueva, para los cuales se pueden tener pensamientos divergentes, rompiendo rutinas y reconfigurando ideas y procesos para avanzar.
      .col-lg-4.mb-3.mb-md-0
        .tarjeta.tarjeta-foto-hover(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1-3-tarj2.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.text-white.mb-0 Bloqueos emocionales
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h5 Bloqueos emocionales
              p.mb-0 Relacionados con imaginar los peores escenarios, y es acá donde se tiende a pensar en las fatalidades y se considera que renunciar es la mejor opción.
      .col-lg-4.mb-3.mb-md-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1-3-tarj3.png')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-2
            h4.text-center.text-white.mb-0 Bloqueos perceptivos
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              h5 Bloqueos perceptivos
              p.mb-0 Limitan la forma de ver el mundo y terminan por acabar con todas las ideas.

    .row
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1-3-img3.png', alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        p Siempre pensar en <b>ideas diferentes</b>, tanto para la solución como para dudar en la forma de pensar, es vital y ayuda a comprender de otra forma soluciones que no se tienen contempladas; caminar es uno de los estimulantes vitales, ya que ayuda a la estimulación de la circulación y, a su vez, a la circulación de ideas, ya que lo expone con miles de estímulos que constantemente bombardean y renuevan de ideas; y si eso no ayuda, descansar también permite que desde el inconsciente se manifiesten otras posibilidades poco usuales, que no se harían en un estado tan consciente.
        p <b>Es importante estar estimulando las ideas para no caer en los bloqueos mentales</b>, por lo que otras estrategias serán necesarias para tener despierta la creatividad, como tomar notas en una agenda donde se llevan todas las ideas que pasan por la mente, hacer conexiones con elementos y conceptos que no tengan relación, y cuestionar a cada momento todas las fallas que pueden existir y cómo solucionarlas; esto generará ideas constantes y ayudará a estimular y a conectar todas las ideas que ayudarán en la construcción del proceso creativo. 


    .titulo-tercero2.mb-5(data-aos="fade-right")
      h3.mb-0 Psicología de la imagen
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')    

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Si observa a las personas en la calle, puede llegar a imaginar qué hacen, a qué se dedican, si trabajan, estudian o están desempleados; esto se debe a que, en nuestra imaginación, realizamos asociaciones por medio de la imagen. Por ejemplo, se puede asociar el uniforme azul antifluido con un médico, a pesar de que este puede ser utilizado por una manicurista, un aseador, un peluquero o una enfermera. 
        p Tanto el lenguaje corporal como la ropa, los movimientos y demás pueden delatar más de lo que se desea revelar. 
          strong La psicología no solo funciona con la imagen, funciona con el color, el comportamiento, los gustos y demás aspectos de la vida cotidiana. 
          | Se podría decir que cada cosa que se utiliza cuenta algo de cada persona.
        .row.justify-content-center.cajon.color-acento-botones.p-4.mb-4
          .col-md-3.col-5.mb-4.mb-md-0
            img.px-md-2(src='@/assets/curso/tema1-3-ico4.svg', alt='Icono decorativo')
          .col-md-9
            p.mb-0 
              strong La psicología de la imagen 
              | es útil en el diseño, ya que el diseñador tiene que 
              strong transmitir de manera directa y eficaz 
              | por medio de la imagen, un concepto de manera inmediata y eficaz. Para esto, debe tener muy presente el manejo de la percepción, el espacio y el tiempo en que se recibe este mensaje, todo esto para unir los conceptos y estudiar de mejor manera al usuario que va a recibir el mensaje, utilizando los sentidos y las sensaciones, para hacerla memorable.  
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1-3-img4.png', alt='Imagen decorativa')


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    indicadorTarjetaFlip: true,
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
