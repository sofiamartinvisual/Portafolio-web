import Home from "@/pages/home/Home.vue";
import Visuales from "@/pages/visuales/visuales.vue";
import Audiovisual from "@/pages/audiovisual/audiovisual.vue";
import Escultura from "@/pages/escultura/escultura.vue";
import PinturaDibujo from "@/pages/pintura-dibujo/pintura-dibujo.vue";

import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/visuales',
      name: 'visuales',
      component: Visuales
    },
    {
      path: '/audiovisual',
      name: 'audiovisual',
      component: Audiovisual
    },
    {
      path: '/escultura',
      name: 'escultura',
      component: Escultura
    },
    {
      path: '/pintura-dibujo',
      name: 'pintura-dibujo',
      component: PinturaDibujo
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
});