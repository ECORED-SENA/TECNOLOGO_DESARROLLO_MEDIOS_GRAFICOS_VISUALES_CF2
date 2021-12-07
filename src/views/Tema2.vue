<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.bloque-fondo-intro
    
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
      .col-md-2.col-5.mb-4.mb-md-0
        img.px-md-4(src='@/assets/curso/tema2-ico1.svg', alt='Icono decorativo')
      .col-md-8
        .row.align-items-center
          .col-md-9.mb-3.mb-md-0
            h4 Gestión de proyectos
            p.mb-0 A continuación, observe el video Gestión de proyectos, para una mejor contextualización de este importante tema.
          .col-md-1
            a.boton.color-acento-botones.me-3(href="https://youtu.be/cgXfottM9w0" target="_blank" type="application/pdf")
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

    .row.justify-content-center.tarjeta.bg-suave(data-aos="fade-down") 
      .col-md-11.py-5
        SlyderE(indicadores="derecha")
          .row
            .col-md-7.mb-4.mb-md-0
              h4 Metodología secuencia tradicional
              p Se basa en etapas secuenciales, en las que no se comienza una fase sin antes terminar la anterior, lo que genera la creación de documentos que comprueban las actividades de cada fase y la finalización de cada una. Este desarrollo tiene la ventaja de permitir controlar las responsabilidades de todas las personas que actuarán en cada fase, y los superiores podrán seguir y dar las sugerencias establecidas.
              p Un inconveniente es que este tipo de proyectos se vuelven proyectos estacionales, es decir que, como no se avanza hasta que se termine una fase, si llegan a existir errores o se necesita cambiar algo, el proyecto se retrasa porque toca volver sobre el trabajo realizado.           
            .col-md-5
              figure
                img(src='@/assets/curso/tema2-2-slide1.png', alt='Metodología secuencia tradicional')
          .row
            .col-md-7.mb-4.mb-md-0
              h4 Metodología secuencia tradicional
              p Las metodologías más conocidas en esta categoría, son las conocidas como 
                italic waterfall 
                | o cascada, las CPM (
                italic Critical Path Method
                | ) (Método de Ruta Crítica), donde se programan actividades y tiempo de duración en cada fase, y las CCPM (
                italic Critical Chain Project Management
                | ), o la metodología que se basa en las restricciones, que tiene como finalidad reducir el plazo de las entregas para priorizar unas actividades sobre otras.   
            .col-md-5
              figure
                img(src='@/assets/curso/tema2-2-slide2.png', alt='Metodología secuencia tradicional')
          .row
            .col-md-7.mb-4.mb-md-0
              h4 <em>Agile</em> o metodologías ágiles 
              p Utilizada para la creación de proyectos rápidos, flexibles y con ciclos de entrega más cortos. Se superponen unos elementos que parecen tener más peso sobre otros elementos o fases del proyecto, como, por ejemplo:
              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-chevron-right
                  p.mb-0 Los <b>trabajadores y las interacciones</b> sobre procesos y herramientas.
                li.mb-0
                  i.fas.fa-chevron-right
                  p.mb-0 Un 
                    strong <em>software</em> funcional 
                    | sobre una documentación general.
                li.mb-0
                  i.fas.fa-chevron-right
                  p.mb-0 Una <b>colaboración con el cliente</b> sobre la negociación de un contrato.
                li.mb-0
                  i.fas.fa-chevron-right
                  p.mb-0 La <b>capacidad de responder</b> sobre la habilidad para seguir un plan establecido.      
            .col-md-5
              figure
                img(src='@/assets/curso/tema2-2-slide3.png', alt='Agile o metodologías ágiles')
          .row
            .col-md-7.mb-4.mb-md-0
              h4 <em>Agile</em> o metodologías ágiles 
              p Este tipo de metodología lo que intenta es adaptar los proyectos, haciéndolos más flexibles y más cercanos con el cliente, amoldándolos a sus necesidades; se entiende que, a diferencia de metodologías secuenciales, estas fases van avanzando y evolucionando con el tiempo, según la necesidad del proyecto, así que la relación con los trabajadores se organiza en equipos y se toman las decisiones de una forma autónoma y eficiente en cada fase del proyecto, reduciendo así los costes e incrementado la productividad. 
              p Es importante la organización del trabajo y del personal para no perder tiempo, para que así puedan trabajar todos sobre las mismas características de ejecución. Se elaboran reuniones diarias para conocer avances y explicaciones de los procesos, se explican las tareas a desarrollar y se crean grupos de trabajo que se apropien y se orienten los resultados a cumplir los requisitos del día.
            .col-md-5
              figure
                img(src='@/assets/curso/tema2-2-slide4.png', alt='Agile o metodologías ágiles')
          .row
            .col-md-7.mb-4.mb-md-0
              h4 Gestión de cambio 
              p Existen otras metodologías que se ocupan de la gestión de cambio, es decir, de la planificación de riesgo y toma de decisiones al momento del control de dichos cambios; estos métodos parten de la premisa de la existencia de los riesgos potenciales que se presentan constantemente al momento de pensar en la creación de un proyecto, lo importante es poder avanzar y llegar a la finalización del proyecto, generando agilidad en los entornos.
            .col-md-5
              figure
                img(src='@/assets/curso/tema2-2-slide5.png', alt='Gestión de cambio')
          .row
            .col-md-7.mb-4.mb-md-0
              h4 Gestión de cambio
              p La gestión de cambio es un proceso estructurado que utiliza herramientas de control y seguimiento, organizando objetivos actuales a objetivos deseados, los cuales vendrán con características específicas, haciendo que la brecha entre el punto actual y el deseado sea cada vez más corto, gestionando acciones de cambio. En este sentido, la comunicación se convierte en una herramienta clave, alineando a los participantes con la estrategia a seguir, favoreciendo su compromiso e involucrando a todos los referentes de dichos cambios.
            .col-md-5
              figure
                img(src='@/assets/curso/tema2-2-slide6.png', alt='Gestión de cambio')
          .row
            .col-md-12.mb-4.mb-md-0
              h4 PMI o PMBOK 
              p 
                italic Project Management Institute
                |, o el 
                italic Project Management Body of Knowledge
                |, es un instituto que contiene una guía de fundamentos de la Gestión de Proyectos, reconocida como las buenas prácticas para lograr un proyecto eficaz y eficiente.
              p No es considerada una metodología de gestión, pero sí se considera una guía para los programas educativos. En su última versión, contempla 49 procesos que clasifica en 10 áreas de conocimiento, con sus respectivas certificaciones, demostrando conocimientos y términos que demuestran la calidad en gestión de proyectos.
              p Entre las áreas de conocimiento, se pueden encontrar:
            .col-md-4.mb-3.mb-md-0
              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-chevron-right
                  | Integración en las áreas.
                li.mb-0
                  i.fas.fa-chevron-right
                  | Alcance del proyecto.
                li.mb-0
                  i.fas.fa-chevron-right
                  | Cronograma del proyecto.
                li.mb-0
                  i.fas.fa-chevron-right
                  | Costos y controles.
                li.mb-0
                  i.fas.fa-chevron-right
                  | Calidad y gestión de calidad.    
            .col-md-4
              ul.lista-ul--color
                li.mb-0
                  i.fas.fa-chevron-right
                  | Recursos.     
                li.mb-0
                  i.fas.fa-chevron-right
                  | Sector de comunicaciones.
                li.mb-0
                  i.fas.fa-chevron-right
                  | Central de riesgos.
                li.mb-0
                  i.fas.fa-chevron-right
                  | Adquisiciones.
                li.mb-0
                  i.fas.fa-chevron-right
                  | Interesados.         
          .row
            .col-md-7.mb-4.mb-md-0
              h4 PMI o PMBOK 
              p Sin embargo, muchas personas y jefes de proyecto no reconocen el PMI como una metodología, sino como unas pautas a seguir al momento de dirigir un proyecto.
              p Se puede definir que las metodologías varían al momento de gestionar un proyecto, caracterizándose por enfocar cada proyecto en una metodología que pueda incrementar la integración de sus trabajadores, teniendo así objetivos claros. 
            .col-md-5
              figure
                img(src='@/assets/curso/tema2-2-slide8.png', alt='PMI o PMBOK')      

    Separador


    // 2.3
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.3  Recursos

    p.mb-4(data-aos="fade") Uno de los aspectos más importantes a la hora de ejecutar un proyecto es el manejo de recursos, por ello, los equipos y empresas de hoy en día tienen un área específica de gestión de recursos. Cuando se habla de la palabra recurso, se hace referencia a un conjunto de elementos disponibles para resolver un problema o necesidad. 

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        figure
          img(src='@/assets/curso/tema2-3-infog.svg', alt='Empresa')

    p.mb-4(data-aos="fade") Existen varios tipos de recursos en una organización, como los que se podrán ver a continuación: 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-suave")
      .row.justify-content-center(titulo="Recursos económicos")
        .col-md-6.mb-4.mb-md-0
          p Al terminar la etapa de planificación, se necesita buscar recursos para la ejecución del proyecto, no solo económicos, sino los recursos físicos o tangibles, como una oficina. De acuerdo con el cronograma y la proyección de actividades, se debe identificar qué recursos son necesarios y en qué montos y cantidades. Dependiendo de la capacidad adquisitiva, se podrá recurrir a diferentes fuentes de financiación, ahorros, aportes de socios, préstamo a un banco o entidad crediticia, depósitos, bonos etc. 
        .col-md-5
          figure
            img(src='@/assets/curso/tema2-3-acord1.png', alt='Recursos económicos')
      .row.justify-content-center(titulo="Recursos físicos")
        .col-md-6.mb-4.mb-md-0
          p Ya se mencionó que el recurso físico es la infraestructura que tiene una empresa, son activos tangibles y que, por lo general, tienen un tiempo de duración y se deprecian con el paso de los días. Maquinaria, automóviles, edificios, locales, materiales, equipos de cómputo, muebles, escritorios, sillas, teléfonos, inventario, insumos, hacen parte de la extensa lista. Es importante decir que el buen uso de estos recursos es fundamental; por ejemplo, una empresa compra nuevos equipos de producción, pero su equipo de trabajo no tiene el conocimiento para ponerlos en funcionamiento, siendo necesario capacitar al equipo de trabajo para que la compra de esos equipos no se convierta en una pérdida sino en un elemento en favor de la producción.
        .col-md-5
          figure
            img(src='@/assets/curso/tema2-3-acord2.png', alt='Recursos físicos')   
      .row.justify-content-center(titulo="Recursos tecnológicos")
        .col-md-6.mb-4.mb-md-0
          p El recurso tecnológico se vale de la tecnología para conseguir un propósito. Estos medios suelen ser tangibles, como la maquinaria, las computadoras, impresoras, entre otros; sin embargo, encontramos medios intangibles asociados al software, como los programas de diseño, las aplicaciones móviles, las plataformas virtuales y el Internet. La adquisición de estos recursos debe ser un proceso dinámico y evolutivo, de manera constante con los avances y las nuevas tecnologías. De nada sirve conseguir un excelente proyecto en diseño si no se cuenta con un computador que tenga los programas requeridos. Para ser competitiva, una organización debe gestionar de manera estratégica la adquisición de estos recursos, dada por las dinámicas externas del entorno y el mercado.  
        .col-md-5
          figure
            img(src='@/assets/curso/tema2-3-acord3.png', alt='Recursos tecnológicos') 
      .row.justify-content-center(titulo="Recursos humanos")
        .col-md-6.mb-4.mb-md-0
          p El recurso humano o capital humano es el más importante en cualquier proyecto, empresa o entidad; sin este no podría existir la organización, por ende, el proyecto.  Este recurso es el que aporta el conocimiento, saberes, oficios, constancia, dedicación y aprendizaje; cada persona, de acuerdo con sus conocimientos, desempeña un rol y asume responsabilidades bien definidas.  El correcto funcionamiento del área de recursos humanos, el buen ambiente laboral y las condiciones justas y equitativas propenden por tener un excelente equipo de trabajo, que al final se deriva en ganancias para todos. Un empleado contento y bien remunerado se sentirá feliz en su trabajo, contrario a un trabajador que tiene que laborar en un ambiente conflictivo, con bajo salario y extenuantes horarios laborales.
        .col-md-5
          figure
            img(src='@/assets/curso/tema2-3-acord4.png', alt='Recursos humanos')                

    Separador


    // 2.4
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 2.4  Seguimiento y control 

    p.mb-4(data-aos="fade") El proceso de seguimiento y control del proyecto es un conjunto de elementos y acciones que se realizan para medir y comprobar la ejecución de las tareas propuestas durante la fase inicial, establecidas en el momento de la planificación. Se le invita a profundizar más sobre este importante tema en el siguiente video:

    .row.justify-content-center.mb-4(data-aos="fade-down") 
      .col-md-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/n9S2dMpRsWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




   
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
