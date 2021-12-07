<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo-intro
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-4
      img(src='@/assets/curso/intro-banner.png', alt='Introducción')

    p.mb-4(data-aos="fade") Apreciado aprendiz, le damos la bienvenida a este momento de aprendizaje orientado a conocer sobre el brief, la gestión de proyectos y el estudio de mercados. Antes de empezar, se sugiere revisar el siguiente video para identificar el contexto de aprendizaje.

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/P7f51UukyIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade") Revisado el video, inicie explorando el contenido del componente de formación. Adelante. 
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
