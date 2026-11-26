<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  images: string[]
  title: string
}>()

const currentIndex = ref(0)

function nextImage() {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

function previousImage() {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = props.images.length - 1
  }
}
</script>

<template>
  <div
    v-if="images.length > 0"
    class="w-full space-y-4"
  >
    <!-- Imagen -->
    <div class="relative w-full overflow-hidden">
      <Transition name="image" mode="out-in">
        <img
          :key="currentIndex"
          :src="images[currentIndex]"
          :alt="title"
          class="w-full max-h-150 aspect-video object-contain"
        />
      </Transition>
    </div>

      <!-- Navegación -->
    <div class="flex items-center justify-center gap-6 text-white/60">

      <button
        @click="previousImage"
        aria-label="Imagen anterior"
        class="hover:text-white transition-colors"
      >
        ←
      </button>

         <span class="text-xs tracking-widest">
        {{ (currentIndex + 1).toString().padStart(2, '0') }}
        /
        {{ images.length.toString().padStart(2, '0') }}
      </span>

        <button
        @click="nextImage"
        aria-label="Imagen siguiente"
        class="hover:text-white transition-colors"
      >
        →
      </button>

       </div>
  </div>
</template>

<style scoped>
.image-enter-active,
.image-leave-active {
  transition: opacity 0.3s ease;
}

.image-enter-from,
.image-leave-to {
  opacity: 0;
}
</style>
