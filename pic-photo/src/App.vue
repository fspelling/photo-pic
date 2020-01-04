<template>
  <div class="corpo">
    <meu-menu :rotas="routes"></meu-menu>
    <transition name="pagina-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from "./routes";
import Menu from "./components/shared/menu/Menu.vue";

export default {
  components: {
    'meu-menu': Menu
  },

  data() {
    return {
      routes
    };
  }
};
</script>

<style scope>
.corpo {
  width: 96%;
  margin: 0 auto;
  font-family: Helvetica, sans-serif;
}

.pagina-fade-enter,
.pagina-fade-leave-active {
  opacity: 0;
}

.pagina-fade-enter-active,
.pagina-fade-leave-active {
  transition: opacity 0.4s;
}
</style>
