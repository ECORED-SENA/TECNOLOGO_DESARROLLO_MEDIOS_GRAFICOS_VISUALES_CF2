<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

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
            p.text-small.mb-0 Para reforzar y profundizar sus conceptos en este tema, lo invitamos a ver el video El 
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

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p Queda claro que el brief es muy importante, ya que facilita toda la información del producto en una primera instancia, antes de desarrollar las estrategias pertinentes. Si se llegase a tener dudas o inquietudes, es importante aclarar el contenido con el cliente antes de iniciar.  Para hacer un buen análisis de esta información, hay que ser muy observador; delimitar cualquier tipo de pesquisa, por pequeña que parezca, puede ser de gran utilidad en el éxito del proyecto. 
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1-2-img.png', alt='Imagen decorativa')



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
