<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-intro
   
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Estudio de mercados
    
    figure.mb-4
      img(src='@/assets/curso/tema3-banner.png', alt='Estudio de mercados')

    p.mb-4(data-aos="fade") Este importante estudio es utilizado no solo en la industria de la comunicación, sino en cualquier industria o área, ya que es un elemento fundamental si se quiere conocer el mercado al que va dirigido cualquier producto o servicio. Revise con mayor detalle lo que significa el estudio de mercados, a continuación:

    .botones-hover
      Botones(data-aos="fade-down")

    Separador


    // 3.1
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.1 ¿Cómo se realiza un estudio de mercado?

    p(data-aos="fade") Un estudio de mercado, al igual que toda investigación, necesita de un análisis profundo, donde se encuentran unas fases para poder llegar a tomar decisiones correctas al momento de alcanzar o comunicarse con el público objetivo.

    p.mb-4(data-aos="fade") Un estudio de mercadeo está compuesto por los siguientes pasos: 

    .row.justify-content-center(data-aos="fade-down") 
      .col-md-10  
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.justify-content-center
            .col-md-2.col-6.mb-4.mb-md-0
              img.px-md-2(src='@/assets/curso/tema3-1-paso1.svg', alt='Definir el problema objetivo')
            .col-md-9
              h4 Definir el problema objetivo
              p Identificar y reconocer el problema para poder definir los objetivos que demarcarán la investigación.
          .row.justify-content-center
            .col-md-9.mb-4.mb-md-0
              h4 Decidir el diseño de la investigación
              p En este punto, se establece el mejor tipo de recolección de información y la forma, al momento de pensar en cuál es más conveniente. Se piensa en los métodos a usar y se plantean las preguntas para la recolección de la información.  
            .col-md-2.col-6
              img.px-md-2(src='@/assets/curso/tema3-1-paso2.svg', alt='Decidir el diseño de la investigación')
          .row.justify-content-center
            .col-md-2.col-6.mb-4.mb-md-0
              img.px-md-2(src='@/assets/curso/tema3-1-paso3.svg', alt='Recopilar información del público objetivo')
            .col-md-9
              h4 Recopilar información del público objetivo
              p En esta fase, se plantea la muestra que sea representativa para el estudio y se empieza a trabajar en la recopilación y organización de los grupos y las entrevistas o el método que se haya seleccionado.
          .row.justify-content-center
            .col-md-9.mb-4.mb-md-0
              h4 Analizar la información recopilada
              p Todos los datos que se recopilen tendrán la información necesaria para resolver objetivos planteados; se analizan los datos, se recopilan y diseñan para una mejor presentación y entendimiento de las cifras.
            .col-md-2.col-6
              img.px-md-2(src='@/assets/curso/tema3-1-paso4.svg', alt='Analizar la información recopilada')
          .row.justify-content-center
            .col-md-2.col-6.mb-4.mb-md-0
              img.px-md-2(src='@/assets/curso/tema3-1-paso5.svg', alt='Crear un plan de acción')
            .col-md-9
              h4 Crear un plan de acción
              p Después de recopilar, analizar y hacer una retroalimentación de toda la información, es necesario hacer una decodificación de esta en acciones, las cuales darán solución a lo planteado en los estudios para la creación de la campaña, de acuerdo con las necesidades de los clientes. 

    p(data-aos="fade") Conozca más acerca del tema, explorando el video 
      span.etiqueta Cómo hacer un estudio de mercados paso a paso
      |, disponible en el material complementario.

    Separador


    // 3.2
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.2  Técnicas para realizar un estudio de mercados

    p.mb-4(data-aos="fade") Un buen estudio de mercado define el cliente o target, y esto ayuda a construir mejor la estrategia o proyecto, ya que permite tener un mayor enfoque y así obtener mejores resultados. La técnica cuantitativa y la cualitativa ayudan a comprender las características del mercado y los factores que los impulsan a tomar decisiones de compra, esto es:


    .titulo-tercero2.mb-5(data-aos="fade-right")
      h3.mb-0 Técnica cuantitativa
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Existen diversas técnicas que han tenido un peso a lo largo de los estudios de mercado y aún siguen estando vigentes, estas ayudan a comprender y analizar factores como la competencia. Revise con atención la siguiente información que le permitirá ampliar su conocimiento sobre esta técnica: 

    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.text-center.color-primario.p-4
          .tarjeta-numerada__numero.text-white
            .h2 1
          img.mb-4.pt-4(src='@/assets/curso/tema3-2tarj1.svg', alt='Entrevista telefónica')
          h4 Entrevista telefónica
          .tarjeta-numerada__contenido
            p.mb-0 Se realizan una serie de preguntas determinadas a una muestra de población, para obtener respuestas a preguntas concretas. Se pueden obtener datos aproximados sobre el objeto de estudio.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.text-center.color-secundario.p-4(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .tarjeta-numerada__numero.text-white
            .h2 2
          img.mb-4.pt-4(src='@/assets/curso/tema3-2tarj2.svg', alt='Entrevistas personales')
          h4 Entrevistas personales
          .tarjeta-numerada__contenido
            p.mb-0 Es una entrevista cara a cara, con dos o más personas, donde se elabora una serie de preguntas para conocer los diferentes puntos de vista. Muchas veces se llevan a cabo comparaciones o se realizan actividades interactivas como parte del cuestionario.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.text-center.color-acento-botones.p-4
          .tarjeta-numerada__numero.text-white
            .h2 3
          img.mb-4.pt-4(src='@/assets/curso/tema3-2tarj3.svg', alt='Encuesta online')
          h4 Encuesta <em>online</em>
          .tarjeta-numerada__contenido
            p.mb-0 Es un formulario o encuesta en línea, se puede llevar a cabo un estudio de mercado con una amplia cobertura, aprovechando el Internet para acceder a la muestra de la población.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.text-center.color-acento-contenido.p-4
          .tarjeta-numerada__numero.text-white
            .h2 4
          img.mb-4.pt-4(src='@/assets/curso/tema3-2tarj4.svg', alt='Mystery shopper')
          h4 <em>Mystery shopper</em>
          .tarjeta-numerada__contenido
            p.mb-0 Es una técnica de mercado enfocada en el estudio de la competencia. Consiste en hacer “compras falsas” en establecimientos, para evaluar aspectos como las deficiencias en la atención o el funcionamiento de los procesos de compra o devolución, etc.         


    .titulo-tercero2.mb-5(data-aos="fade-right")
      h3.mb-0 Técnica cualitativa
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Esta técnica busca hallar las razones por las cuales se actúa de una manera u otra, sea frente a un producto o marca, así que se trata de extraer la información con los mismos usuarios que son los que tienen la información de primera mano al momento de pensar en el uso de dichos productos, así:  

    .row.mb-4(data-aos="fade-down") 
      .col-md-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3-2-cajon1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4.mb-4 Grupo de discusión o grupos focales.
              br
              br  
            p.mb-0 Esta técnica consiste en una investigación cualitativa cuyo objetivo es conocer la forma en la que los participantes actúan o hablan frente a una idea publicitaria, una marca, un producto o servicio. Se forman grupos pequeños para generar una discusión en torno a un tema de interés. En el mundo digital, esto podría ser un análisis cualitativo de los comentarios a un blog, a una página web, etc.

    .row.justify-content-end.mb-5(data-aos="fade-down") 
      .col-md-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3-2-cajon2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4.mb-4 Entrevistas en profundidad.
              br
              br  
            p.mb-0 Se trata de una conversación más elaborada, en la que se realizan entrevistas más profundas y donde el diálogo entre entrevistador o investigador debe fluir, para que se logre conseguir la información según los objetos de estudio.

    p(data-aos="fade") Se puede resumir, entonces, que estas son algunas de las técnicas más utilizadas al momento de pensar en el estudio de mercado y que, a pesar de las nuevas tecnologías que vienen acompañadas del mundo digital, siguen siendo herramientas muy poderosas.

    p.mb-4(data-aos="fade") Existen otras técnicas para el análisis de mercados, las más usadas son:

    .row
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3-2-img.png', alt='Imagen decorativa')
      .col-md-8(data-aos="fade-left")
        TabsD.color-acento-botones
          .tarjeta.bg-color-primario2.p-4(titulo="Análisis <em>conjoint</em>")
            h4 Análisis <em>conjoint</em>
            p Método estadístico que se utiliza para evaluar la importancia que los clientes dan a las características de un producto o servicio, dando calificaciones competitivas entre uno o varios elementos.
          .tarjeta.bg-color-primario2.p-4(titulo="Análisis <em>TURF</em>")
            h4 Análisis <em>TURF</em>
            p Método de análisis que genera informes del mercado evaluando alcances de los clientes frente a los productos o servicios.
          .tarjeta.bg-color-primario2.p-4(titulo="Análisis <em>Max Dif</em>")
            h4 Análisis <em>Max Dif</em>
            p Analiza características de los productos para entender el comportamiento de los clientes.
          .tarjeta.bg-color-primario2.p-4(titulo="Análisis <em>FODA</em>")
            h4 Análisis <em>FODA</em>
            p Análisis de fortalezas, oportunidades, debilidades y amenazas, de un proyecto u organización.
          .tarjeta.bg-color-primario2.p-4(titulo="Análisis <em>GAP</em>")
            h4 Análisis <em>GAP</em>
            p Es un análisis que mide los desempeños ideales y reales, haciendo diferencias y generando medidas para la técnica cuantitativa. 
          .tarjeta.bg-color-primario2.p-4(titulo="Análisis de texto")
            h4 Análisis de texto 
            p Organizar datos, textos y documentos, para que su comprensión sea más sencilla y entendible. 
          .tarjeta.bg-color-primario2.p-4(titulo="Tabulación cruzada")
            h4 Tabulación cruzada 
            p Existen parámetros que merecen un análisis que debe tabularse y categorizarse, aplica para las investigaciones.
          .tarjeta.bg-color-primario2.p-4(titulo="Análisis de tendencias")
            h4 Análisis de tendencias 
            p Un análisis que va ligado a un tiempo significativo, haciendo relaciones de variables y estableciendo tendencias, ayudando a comprender comportamientos repetibles. 

    Separador


    // 3.3
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.3  Tendencias

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p El conocimiento del mercado hace que los negocios triunfen, y para ello, se debe hacer, de la mano del análisis de mercados, un análisis de las tendencias que actualmente se encuentran en el mercado y que representan oportunidades si se logran detectar estas características a tiempo, ya que todas estas van ligadas a un espacio de tiempo y se debe ser muy perspicaz para encontrar la que mejor se adapte al proyecto.
        p Se conoce como 
          strong tendencia a las inclinaciones que tienen los mercados frente a una situación que se puede trasladar al ámbito del mercadeo
          |, siempre comprendida en un cierto periodo de tiempo. Se puede encontrar una tendencia principal en una tendencia que se da por largo tiempo, y una tendencia intermedia en la que no tiene mucha duración. 
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3-3-img.png', alt='Imagen decorativa')


    .titulo-tercero3.mb-5(data-aos="fade-right")
      h3.mb-0 ¿Cómo detectar una tendencia de mercado?
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    .row
      .col-md-5.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3-3-img2.png', alt='Imagen decorativa')
      .col-md-7.mb-4(data-aos="fade-left")
        p Para detectar una tendencia, es indispensable pensar en el mercado y los sectores donde se pueden ubicar las características, por eso se encuentran los términos 
          span.etiqueta <em>Bull Market</em> y <em>Bear Market</em>, 
          | el primero  se refiere a una tendencia alcista, en la que los precios de los activos cierran al alza constantemente, esto por el resultado de un boom económico, una burbuja financiera o una recuperación, se le denomina 
          italic-strong Bull 
          | (toro)  porque su representación en el mundo financiero se asocia con éxito, optimismo y ganancias, y se vincula a los buenos pronósticos financieros. 
        p De otro lado, el 
          italic-strong Bear 
          | (oso), los precios en la bolsa predominan cerrando a la baja, y se da por una crisis financiera o por el colapso de las burbujas financieras, se relaciona esta imagen a la incertidumbre y la recuperación lenta, se pierde confianza en los mercados y en las inversiones; este mercado bajista no siempre se ve con malos ojos. 
        p Algunas de las tendencias que serán oportunidades al momento de crear una estrategia serán las que vengan relacionadas con contextos sociales y ampliarán caminos y direcciones que no se tienen siempre contempladas.

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Existen otras tendencias, como son 
            strong el techo 
            | y el 
            strong fondo de mercado
            |, los cuales se ubican por encima o por debajo de los precios que se encuentran en el mercado. Se puede decir que el techo de mercado se puede conocer como resistencia del mercado y se entiende como la demarcación de precios que se encuentra por encima del mercado, en la cual la necesidad por vender derrota el apremio por comprar, y, cuando se da un impulso en el precio, se vuelve hacia atrás.
        p Para que la tendencia se torne positiva, cada mínimo sucesivo debería ser mayor que el anterior, pero si la tendencia sufre un colapso y llega al nivel del techo anterior, hay que estar alerta, ya que podría ser una señal de que la tendencia alcista llega a su final. Por otra parte, se encuentra el fondo de mercado y se debe entender como los niveles que están por debajo del mercado, su necesidad básica está en vender; suele ser difícil identificar este fondo de mercado mientras sucede, ya que el declive es rápido, corto y trae muchas pérdidas para los inversores que han realizado compra de acciones.
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3-3-img3.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-md-10
        .bloque-texto-a.color-primario.p-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h5.mb-0 Hay que conocer y detectar detalladamente las tendencias del mercado para saber cuándo operar y, de esta manera, entrar en el mejor momento, con mayor probabilidad de éxito y menos riesgo posible en el mercado.
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-3 Algunas tendencias que se deben tener en cuenta son:
                ul.lista-ul--color.mb-0
                  li.mb-0
                    i.fas.fa-chevron-right
                    | Cuidado de la salud.
                  li.mb-0
                    i.fas.fa-chevron-right
                    | Protección del medio ambiente.
                  li.mb-0
                    i.fas.fa-chevron-right
                    | Resiliencia y salud mental.
                  li.mb-0
                    i.fas.fa-chevron-right
                    | Actividades al aire libre.
                  li.mb-0
                    i.fas.fa-chevron-right
                    | Combinación y fusión de lo físico y lo virtual.
                  li.mb-0
                    i.fas.fa-chevron-right
                    | La información y el consumidor.
                  li.mb-0
                    i.fas.fa-chevron-right
                    | La seguridad y la higiene.
                  li.mb-0
                    i.fas.fa-chevron-right
                    | Ahorro consciente.
                  li.mb-0
                    i.fas.fa-chevron-right
                    | Home Office.                 

    .titulo-tercero4.mb-4(data-aos="fade-right")
      h3.mb-0 Síntesis
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')

    .row.justify-content-center.mb-5(data-aos="fade-down") 
      .col-md-11
        figure.mb-4
          img(src='@/assets/curso/tema3-3-sintesis.svg', alt='¿Cómo se gestiona un proyecto?')



</template>

<script>
import Botones from '../components/Botones.vue'
import TabsD from '../components/TabsD.vue'
export default {
  name: 'Tema3',
  components: {
    Botones,
    TabsD,
  },
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
