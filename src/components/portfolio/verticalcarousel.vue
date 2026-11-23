

 <script setup lang="ts">

    // Definimos la estructura de los proyectos.
interface Project {
  title: string
  year: string
  technique: string
  image: string
}

// Recibimos los proyectos desde la página que utilice el componente.
defineProps<{
  projects: Project[]
}>()

</script>

<template>
    <div>
     <!-- Aquí construiremos el carrusel -->

       <div class="relative flex flex-col items-center gap-6"></div>

  <!-- Contador de proyectos -->
    <div class="flex justify-end w-full text-sm text-white/60">
      01 / {{ projects.length.toString().padStart(2, '0') }}
    </div>

   <!-- Imagen principal -->
    <div class="w-full max-w-4xl">
      <img
        :src="projects[0]?.image"
        :alt="projects[0]?.title"
        class="w-full aspect-video object-cover rounded-sm"
      />
    </div>

      <!-- Información del proyecto -->
    <div class="text-center text-white space-y-2">
      <h2 class="text-2xl font-light">
        {{ projects[0]?.title }}
      </h2>

       <p class="text-xs tracking-widest text-white/50">
        {{ projects[0]?.technique }} · {{ projects[0]?.year }}
      </p>
    </div>

      <!-- Indicadores de navegación -->
    <div class="flex flex-col items-center gap-2 text-white/60">
      <span>⌃</span>
      <span>⌄</span>
    </div>
    
    </div>
</template>



<style scoped>

</style>