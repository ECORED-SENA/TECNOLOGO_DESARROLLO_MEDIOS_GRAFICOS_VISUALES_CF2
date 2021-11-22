<template lang="pug">
.tarjeta.color-primario__claro.p-4
  .row.align-items-center.justify-content-between
    .col-md-5.mb-4.mb-md-0
      .botones
        img(src='@/assets/curso/tema3-botones-fondo.svg', alt='Estudio de mercados')
        .botones__item(
          v-for="(boton, index) in botones"
        )
          .botones__btn(
            :style="getStyles(boton, index)"
            @mouseover="hover = index"
            @mouseleave="hover = null"
            @click="selected = index"
          )
            .indicador--click(v-if="index === 1 && indicador")
    .col-md-7.col-lg-6(:style="{'z-index':'2'}")
      
      .tarjeta-botones.bg-acento-botones.p-3(v-if="selected === 0")
        p.mb-0 Es una investigación que se utiliza fundamentalmente en la industria de la comunicación y la publicidad, es una de las herramientas que ayuda a entender el mercado y 
          strong tomar las mejores decisiones al momento de entablar una comunicación con el público objetivo; 
          | analiza aspectos como hábitos de compra, zonas de operación y otros aspectos de competencia, que serán indispensables al momento de la toma de decisiones.

      .tarjeta-botones.bg-acento-botones.p-3(v-else-if="selected === 1")
        p.mb-0 En este estudio se hace un proceso donde se recolecta, en un principio, toda la información para un análisis y 
          strong se identifican las principales características
          |, entendiendo, a su vez, cómo se mueve y cómo se transforma. Su importancia radica en implementar las 
          strong mejores decisiones al momento de hablar con su mercado 
          | y asegurar mejores conexiones, conociendo su entorno, con el fin de tener una mejor planeación.

      .tarjeta-botones.bg-acento-botones.p-3(v-else-if="selected === 2")
        p 
          strong La gestación de un buen proyecto dependerá de las buenas decisiones tomadas frente a los estudios de mercados; 
          | predecir los riesgos, comprender los alcances y las pérdidas, al igual que las soluciones que se puedan tomar será de gran importancia al comprender el potencial del mercado.
        p.mb-0 Existen dos tipos de investigación que se cuentan como las principales: 
          strong las investigaciones cualitativas y las cuantitativas.  

      .tarjeta-botones.bg-acento-botones.p-3(v-else-if="selected === 3")
        p 
          strong La investigación cuantitativa 
          | se enfoca en porcentajes y todo lo que tenga que ver con números, recopila información utilizando encuestas que permiten dan datos detallados. Por su parte, la investigación cualitativa se basa en hechos que afectan decisiones del mercado.
        p.mb-0 Existen métodos que se ajustan a las características y a las necesidades del proyecto, por lo que se necesita un conocimiento de diferentes métodos para encontrar los mejores resultados, y estos cambian dependiendo del tipo de investigación.

      .tarjeta-botones.bg-acento-botones.p-3(v-else-if="selected === 4")
        p.mb-0 Por su parte, la 
          strong investigación cualitativa 
          | basa sus tácticas en la conversación y entablar un análisis más profundo, por lo que utiliza medios como los grupos focales, entrevistas y la observación de entornos para tomar las decisiones, entendiendo el comportamiento y las intenciones de compra de los usuarios al momento de pensar en producto o un servicio.



</template>

<script>
export default {
  name: 'Botones',
  data: () => ({
    indicador: true,
    selected: 0,
    hover: null,

    botones: [
      {
        img: require('@/assets/curso/botones-ico-01-a.svg'),
        img_h: require('@/assets/curso/botones-ico-01-b.svg'),
        pos_x: '26%',
        pos_y: '2.5%',
        size: '43%',
      },
      {
        img: require('@/assets/curso/botones-ico-02-a.svg'),
        img_h: require('@/assets/curso/botones-ico-02-b.svg'),
        pos_x: '48%',
        pos_y: '12%',
        size: '46%',
      },
      {
        img: require('@/assets/curso/botones-ico-03-a.svg'),
        img_h: require('@/assets/curso/botones-ico-03-b.svg'),
        pos_x: '59%',
        pos_y: '36.5%',
        size: '41%',
      },
      {
        img: require('@/assets/curso/botones-ico-04-a.svg'),
        img_h: require('@/assets/curso/botones-ico-04-b.svg'),
        pos_x: '48%',
        pos_y: '59%',
        size: '46%',
      },
      {
        img: require('@/assets/curso/botones-ico-05-a.svg'),
        img_h: require('@/assets/curso/botones-ico-05-b.svg'),
        pos_x: '26.5%',
        pos_y: '70%',
        size: '42%',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image =
        this.hover === index || this.selected === index
          ? boton.img_h
          : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: boton.size,
        'padding-top': boton.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.botones
  position: relative
.botones__btn
  background-size: contain
  background-repeat: no-repeat
  position: absolute
  cursor: pointer
  transition: background-image 0.2s ease-in-out

.tarjeta-botones
  z-index: 3
  border: 2px solid #26CCDA
  display: block
  position: relative
.tarjeta-botones:before
  content: ""
  display: block
  top: 50%
  left: -2%
  width: 12%
  height: 2px
  position: absolute
  background: #26CCDA
  transform: translate(-85%)
  z-index: -1

@media (max-width: $bp-max-md)
  .tarjeta-botones:before
    display: none
</style>
