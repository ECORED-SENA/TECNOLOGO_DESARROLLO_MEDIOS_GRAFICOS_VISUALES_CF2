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
          .col-md-7
            p.mb-0 El estudio del público o consumidor es muy importante de definir, ya que limita el alcance de la campaña; en este sentido, la demografía se refiere a muchos aspectos, como la calidad de vida, hábitos de consumo o condición económica de cierto grupo poblacional. De igual manera, se tienen en cuenta las campañas realizadas anteriormente por la empresa, con el objetivo de utilizar un mismo lenguaje. El <em>brief</em> marca la pauta en cuanto a los tiempos de ejecución, en algunos casos, el presupuesto estimado y otros requerimientos del cliente y el diseñador. 


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
