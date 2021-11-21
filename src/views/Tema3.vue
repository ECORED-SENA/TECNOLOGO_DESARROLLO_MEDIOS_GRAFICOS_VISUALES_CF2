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
            .col-md-2.col-5.mb-4.mb-md-0
              img.px-md-2(src='@/assets/curso/tema3-1-paso1.svg', alt='Definir el problema objetivo')
            .col-md-9
              h4 Definir el problema objetivo
              p Identificar y reconocer el problema para poder definir los objetivos que demarcarán la investigación.
          .row.justify-content-center
            .col-md-9.mb-4.mb-md-0
              h4 Decidir el diseño de la investigación
              p En este punto, se establece el mejor tipo de recolección de información y la forma, al momento de pensar en cuál es más conveniente. Se piensa en los métodos a usar y se plantean las preguntas para la recolección de la información.  
            .col-md-2.col-5
              img.px-md-2(src='@/assets/curso/tema3-1-paso2.svg', alt='Decidir el diseño de la investigación')
          .row.justify-content-center
            .col-md-2.col-5.mb-4.mb-md-0
              img.px-md-2(src='@/assets/curso/tema3-1-paso3.svg', alt='Recopilar información del público objetivo')
            .col-md-9
              h4 Recopilar información del público objetivo
              p En esta fase, se plantea la muestra que sea representativa para el estudio y se empieza a trabajar en la recopilación y organización de los grupos y las entrevistas o el método que se haya seleccionado.
          .row.justify-content-center
            .col-md-9.mb-4.mb-md-0
              h4 Analizar la información recopilada
              p Todos los datos que se recopilen tendrán la información necesaria para resolver objetivos planteados; se analizan los datos, se recopilan y diseñan para una mejor presentación y entendimiento de las cifras.
            .col-md-2.col-5
              img.px-md-2(src='@/assets/curso/tema3-1-paso4.svg', alt='Analizar la información recopilada')
          .row.justify-content-center
            .col-md-2.col-5.mb-4.mb-md-0
              img.px-md-2(src='@/assets/curso/tema3-1-paso5.svg', alt='Crear un plan de acción')
            .col-md-9
              h4 Crear un plan de acción
              p Después de recopilar, analizar y hacer una retroalimentación de toda la información, es necesario hacer una decodificación de esta en acciones, las cuales darán solución a lo planteado en los estudios para la creación de la campaña, de acuerdo con las necesidades de los clientes. 

    p.mb-4(data-aos="fade") Conozca más acerca del tema, explorando el video 
      span.etiqueta Cómo hacer un estudio de mercados paso a paso
      |, disponible en el material complementario.

    Separador


    // 3.2
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 3.2  Técnicas para realizar un estudio de mercados









</template>

<script>
import Botones from '../components/Botones.vue'
export default {
  name: 'Tema3',
  components: {
    Botones,
  },
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
