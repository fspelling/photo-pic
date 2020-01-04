<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <ul class="lista-fotos">
      <input
        class="filtro"
        type="search"
        @input="filtro = $event.target.value"
        placeholder="pesquise aqui"
      />
      <li class="lista-fotos-item" v-for="foto of fotosFilter">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva v-meu-transform="{ incremento: 15, animacao: true }" :url="foto.url" :titulo="foto.titulo"></imagem-responsiva>
          <meu-botao @removeBotao="removerFoto(foto)" tipo="button" rotulo="REMOVER" :confirmacao="false" estilo="perigo" />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from '../shared/botao/Botao.vue'

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    'meu-botao': Botao
  },
  data() {
    return {
      titulo: "Pic-Photo",
      fotos: [],
      filtro: ""
    };
  },
  computed: {
    fotosFilter() {
      if (this.filtro) {
        let regex = new RegExp(this.filtro, "i");
        return this.fotos.filter(foto => regex.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },
  methods: {
    removerFoto(foto) {
       alert(foto.titulo);
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
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
