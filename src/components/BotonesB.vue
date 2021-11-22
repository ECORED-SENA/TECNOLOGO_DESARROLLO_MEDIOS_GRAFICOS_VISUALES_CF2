<template lang="pug">
.btns
  .row.justify-content-center
    .col-md-8
      img(src='@/assets/curso/tema2-2-fondo-botones.svg', alt='Las fases del proyecto')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    :class="[`btns_item--${index}`]"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.p-3(v-if="index === hover")  
      h4 {{boton.titulo}}
      h5 Objetivos
      ul.lista-ul--color
        li.mb-1.li1a
          i.fas.fa-chevron-right
          | {{boton.lista1a}}
        li.mb-1.li1b
          i.fas.fa-chevron-right
          | {{boton.lista1b}}
        li.li1c
          i.fas.fa-chevron-right
          | {{boton.lista1c}}    
      
      h5 Tareas
      ul.lista-ul--color
        li.mb-1.li2a
          i.fas.fa-chevron-right
          | {{boton.lista2a}}
        li.mb-1.li2b
          i.fas.fa-chevron-right
          | {{boton.lista2b}}
        li.mb-1.li2c
          i.fas.fa-chevron-right
          | {{boton.lista2c}} 
        li.mb-1.li2d
          i.fas.fa-chevron-right
          | {{boton.lista2d}}       
        li.mb-1.li2e
          i.fas.fa-chevron-right
          | {{boton.lista2e}} 


</template>

<script>
export default {
  name: 'BotonesB',
  data: () => ({
    indicador: true,
    hover: null,
    size: '20%',
    botones: [
      {
        img: require('@/assets/curso/tema2-2-boton1_1.svg'),
        img_h: require('@/assets/curso/tema2-2-boton1_2.svg'),
        pos_x: '15.9%',
        pos_y: '3.1%',
        numero: 'item-1',
        titulo: 'Inicio y análisis del proyecto',
        lista1a: 'Los objetivos son claros.',
        lista1b: 'Se ha realizado el análisis de viabilidad.',
        lista1c: 'Se obtuvo la aprobación de propuesta.',

        lista2a: 'Analizar costos (presupuesto).',
        lista2b:
          'Analizar el contexto y riesgos asociados (político, económico, social, tecnológico).',
        lista2c: 'Elaborar planeación general del proyecto.',
        lista2d: 'Organizar el equipo de trabajo.',
      },
      {
        img: require('@/assets/curso/tema2-2-boton2_1.svg'),
        img_h: require('@/assets/curso/tema2-2-boton2_2.svg'),
        pos_x: '31.9%',
        pos_y: '3.1%',
        titulo: 'Planificación del proyecto',
        lista1a: 'Se ha fijado un plan de trabajo.',
        lista1b:
          'Se han establecido las bases para la ejecución exitosa del proyecto.',

        lista2a:
          'Definir las tareas requeridas y el orden en el que se deben llevar a cabo. ',
        lista2b:
          'Realizar la estructura de división del trabajo, asignando responsabilidades.',
        lista2c:
          'Elaborar cronograma de trabajo (tiempos y recursos para cada actividad).',
        lista2d: 'Elaborar un plan de costos.',
      },
      {
        img: require('@/assets/curso/tema2-2-boton3_1.svg'),
        img_h: require('@/assets/curso/tema2-2-boton3_2.svg'),

        pos_x: '47.9%',
        pos_y: '3.1%',
        titulo: 'Ejecución y seguimiento del proyecto',
        lista1a: 'Se han procesado y aprobado los resultados del proyecto.',

        lista2a: 'Ejecutar las tareas programadas. ',
        lista2b:
          'Realizar control del proyecto, tareas programadas / tareas ejecutadas.',
        lista2c: 'Medir avance real del proyecto comparándolo con lo planeado.',
        lista2d: 'Tomar acciones correctivas si fueran necesarias.',
        lista2e: 'Gestionar en curso los riesgos y amenazas.',
      },
      {
        img: require('@/assets/curso/tema2-2-boton4_1.svg'),
        img_h: require('@/assets/curso/tema2-2-boton4_2.svg'),
        pos_x: '64%',
        pos_y: '3.1%',
        titulo: 'Evaluación del proyecto y Cierre',
        lista1a: 'Se ha llevado a cabo una retrospectiva crítica del proyecto.',
        lista1b: 'El proyecto se ha concluido formalmente.',

        lista2a: 'Analizar los resultados obtenidos.',
        lista2b: 'Redactar un informe final del proyecto.',
        lista2c: 'Presentación final.',
        lista2d: 'Retroalimentación frente a los resultados alcanzados.',
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
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.btns_item--0 .li2e
  display: none
.btns_item--1 .li1c, .btns_item--1 .li2e
  display: none
.btns_item--2 .li1b, .btns_item--2 .li1c
  display: none
.btns_item--3 .li1c, .btns_item--3 .li2e
  display: none

.btns
  position: relative
  height: 600px
  &__item
    position: absolute
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    cursor: pointer
    transition: background-image 0.2s ease-in-out
  &__text
    border-radius: 20px
    position: absolute
    top: 110%
    left: 50%
    background-color: #B1F9FF
    width: 500px
    z-index: 100
    line-height: 1.2em
    border-radius: 20px
    transform: translate(-50%)
    p
      line-height: 1.2em
@media (max-width: $bp-max-md)
  .btns__item
    width: 13% !important
    padding: 13%

  .btns_item--0
    top: 0.5% !important
    left: 2.1% !important
  .btns_item--1
    top: 0.5% !important
    left: 25.3% !important
  .btns_item--2
    top: 0.5% !important
    left: 48.3% !important
  .btns_item--3
    top: 0.5% !important
    left: 71.5% !important


  .btns__text
    width: 320px
  .btns_item--0 .btns__text
    left: 180% !important
  .btns_item--1 .btns__text
    left: 90%
  .btns_item--2 .btns__text
    left: 10%
  .btns_item--3 .btns__text
    left: -80%
</style>
