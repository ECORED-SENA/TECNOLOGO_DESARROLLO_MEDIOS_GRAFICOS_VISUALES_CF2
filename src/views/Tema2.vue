<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión de proyectos
    
    figure.mb-4
      img(src='@/assets/curso/tema2-banner.png', alt='Gestión de proyectos')

    p.mb-4(data-aos="fade") Una vez que se entiende el proceso creativo y la recolección de la información a partir del <em>brief</em>, se puede pensar en la generación de 
      span.etiqueta la gestión de proyectos, que involucra la planificación, la organización, la motivación, el control de las tareas y los recursos, con el propósito de alcanzar los objetivos esperados.
      |  Un proyecto es un emprendimiento temporal para generar un producto u ofrecer un servicio, que se logrará mediante el desarrollo de unas acciones concretas, y que tendrá un inicio y un fin definidos. 

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p 
          strong La gestión determina qué se necesita hacer para alcanzar la meta del proyecto y los objetivos asociados, quién lo hará, cuánto tiempo se necesitará y cuál será el costo; 
          | esto será determinante para el éxito del mismo. La gestión también involucra acciones concretas correspondientes a: administrar el inicio y supervisión de los avances en relación con las tareas programadas; controlar y solucionar las dificultades que se presenten durante la etapa de ejecución; definir la finalización, aprobación y evaluación del proyecto. 
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2-img.png', alt='Imagen decorativa')

    .row.bg-elemento.justify-content-center.py-3.align-items-end(data-aos="fade-down") 
      .col-md-2.col-5
        img.px-md-4(src='@/assets/curso/tema2-ico1.svg', alt='Icono decorativo')
      .col-md-8
        .row.align-items-center
          .col-md-9.mb-3.mb-md-0
            h4 Gestión de proyectos
            p.text-small.mb-0 A continuación, observe el video Gestión de proyectos, para una mejor contextualización de este importante tema.
          .col-md-1
            a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

    Separador


    // 2.1
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.1  Identificar los requerimientos

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        p En la gestión de un proyecto, 
          strong se relacionan el análisis, el desarrollo, la documentación y verificación de requerimientos; 
          | por ello, es necesario tener en cuenta las siguientes obligaciones para establecer los deseos e intereses del cliente y así tener criterios que sean aceptados, para poder llegar al éxito al momento de hablar de un proyecto o programa. Expresar deseos y necesidades es un elemento esencial, que asegurará la creación de un objetivo viable y, a su vez, facilitará pensar la solución a dicho problema; se puede establecer que un requerimiento plantea:
        ul.lista-ul--color
          li.mb-0
            i.fas.fa-chevron-right
            | La posibilidad de que un cliente o usuario solucione un problema o cumplir un objetivo.
          li.mb-0
            i.fas.fa-chevron-right
            | Debe incluirse en un sistema, para poder satisfacer los objetivos del proyecto.
          li.mb-0
            i.fas.fa-chevron-right
            | Es una restricción que se impone sobre algún interés.    
        p Estos requisitos se analizan para garantizar su practicidad y usabilidad, teniendo como principales características 
          strong la definición del requerimiento y sus interesados o <em>stakeholders</em>
          | , los cuales pueden atribuir características como la permanencia al sistema o su aprobación. 
      .col-md-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2-1-img.png', alt='Imagen decorativa')

    p.mb-4(data-aos="fade") Existen también unas características que deben cumplir ciertos criterios al momento de hablar de requerimientos, como son: 

    .row
      .col-md-6.col-lg.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema2-1-tarj1.svg' alt='Único')
          .tarjeta.bg-acento-botones
            .text-center.p-4
              h5 Único
              p El requerimiento debe ser interpretado de una sola manera.
      .col-md-6.col-lg.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema2-1-tarj2.svg' alt='Específico')
          .tarjeta.bg-color-primario2
            .text-center.p-4
              h5 Específico
              p No se deben mezclar 2 o más requerimientos, para que no exista una confusión.	 
      .col-md-6.col-lg.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema2-1-tarj3.svg' alt='Claridad')
          .tarjeta.bg-suave
            .text-center.p-4
              h5 Claridad
              p El proyecto debe ser comprensible en cuanto a su propósito y alcance, sin dar lugar a ambigüedades, posibilitando una única interpretación.

    .row
      .col-md-6.col-lg.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema2-1-tarj4.svg' alt='Realismo')
          .tarjeta.bg-color-primario2
            .text-center.p-4
              h5 Realismo
              p  Su desarrollo debe ser viable y coherente en relación con el presupuesto y recursos requeridos.
      .col-md-6.col-lg.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema2-1-tarj5.svg' alt='Relevancia')
          .tarjeta.bg-suave
            .text-center.p-4
              h5 Relevancia
              p Su consecución debe ser necesaria, es decir, aporta de manera significativa en la solución de un problema o suplir una necesidad.
      .col-md-6.col-lg.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema2-1-tarj6.svg' alt='Verificabilidad')
          .tarjeta.bg-acento-botones
            .text-center.p-4
              h5 Verificabilidad
              p Debe permitir corroborar y demostrar los resultados alcanzados con respecto a los objetivos del proyecto, ya se trate de indicadores de tipo cuantitativo o cualitativo.

    p.mb-4(data-aos="fade") Se puede definir que un requerimiento es la condición o la capacidad que debe tener un sistema, producto, o servicio, que será establecido en un documento o contrato, para dar satisfacción a los objetivos que se trazarán en el <em>brief</em>. 	

    .row.justify-content-center(data-aos="fade-down") 
      .col-md-10
        .row.cajon.color-acento-botones.p-4
          .col-md-5.mb-4.mb-md-0
            img.px-md-3(src='@/assets/curso/tema2-1-img2.svg', alt='Imagen decorativa')
          .col-md-7
            p.mb-0 Entendido el concepto de requerimiento y a qué hace referencia, se pasa a otro concepto que es la <b>trazabilidad</b>, y que se entiende como la documentación que deben tener dichos requerimientos, estableciendo su durabilidad, permitiendo hacer un seguimiento desde su formulación hasta la actualidad, los cambios implementados, entre otros. Esto no quiere decir que deben generarse documentaciones extensas, por el contrario, se deben mantener de forma organizada y con conocimiento de todos los participantes, de una manera sencilla y clara.

    Separador


    // 2.2
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.2  Fases y metodologías de programación de los proyectos 

    p(data-aos="fade") Se pueden reconocer y emplear varios métodos y enfoques al momento de pensar y ejecutar un proyecto, seleccionando, según su enfoque, las mejores o el mejor método, que incluirá las necesidades que se han revisado y entendido desde el <em>brief</em>.

    p(data-aos="fade") Estos métodos implican una serie de pasos que puede variar, tanto de terminología como los pasos, pero se puede hacer una recopilación donde se expondrán las fases más importantes. 

    p.mb-4(data-aos="fade") Las fases de un proyecto son:

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        figure
          img(src='@/assets/curso/tema2-2-infog.svg', alt='Fases del proyecto')

    p.mb-4(data-aos="fade") A continuación, se plantean, de manera general, las fases del proyecto, el objetivo y las tareas, así:

    .row.mb-5
      BotonesB


    .titulo-tercero3.mb-5(data-aos="fade-right")
      h3.mb-0 Metodologías de gestión de proyectos 
      img(src='@/assets/curso/titulo-tercero.svg', alt='Imagen decorativa')
    
    p.mb-4(data-aos="fade") Existen muchas metodologías que se pueden implementar al momento de la entrega de un proyecto exitoso. Entre las que se exponen a continuación, se pueden encontrar diferentes opciones que ayudan a ciertas categorías de diversos proyectos, como se puede observar a continuación:

    .row.justify-content-center.tarjeta.bg-suave.mb-4(data-aos="fade-down") 
      .col-md-10.py-5
        SlyderE(indicadores="derecha")
          .row
            .col-md-6.mb-4.mb-md-0
              p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen

   
</template>

<script>
import BotonesB from '../components/BotonesB.vue'
export default {
  name: 'Tema2',
  components: {
    BotonesB,
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
