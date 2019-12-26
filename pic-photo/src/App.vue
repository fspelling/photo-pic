<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <ul class="lista-fotos">
      <input class="filtro" type="search" v-on:input="filtro = $event.target.value" placeholder="pesquise aqui" />
      <li class="lista-fotos-item" v-for="foto of fotosFilter">
        <meu-painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo" />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "./components/shared/painel/Painel.vue";

export default {
  components: {
    "meu-painel": Painel
  },
  data() {
    return {
      titulo: "Pic-Photo",
      fotos: [],
      filtro: ''
    };
  },
  computed: {
    fotosFilter() {
      if (this.filtro) {
        let regex = new RegExp(this.filtro, 'i');
        return this.fotos.filter(foto => regex.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },
  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then(res => res.json())
      .then(fotos => (this.fotos = fotos), error => console.error(error));
  }
};
</script>

<style>
.corpo {
  width: 96%;
  margin: 0 auto;
  font-family: Helvetica, sans-serif;
}

.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos-item {
  display: inline-block;
}

.imagem-responsiva {
  width: 100%;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
