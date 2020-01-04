<template>
  <button class="botao" :class="estiloFormatado" @click="disparaAcao()" :type="tipo">{{ rotulo }}</button>
</template>

<script>
export default {
  props: {
    tipo: {
      required: true,
      type: String
    },
    rotulo: {
      required: true,
      type: String
    },
    confirmacao: Boolean,
    estilo: String
  },
  computed: {
    estiloFormatado() {
      if (this.estilo == "padrao" || !this.estilo) return "botao-padrao";
      if (this.estilo == "perigo") return "botao-perigo";
    }
  },
  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Deseja realizar a ação?")) this.$emit("removeBotao");
        return;
      }

      this.$emit("removeBotao");
    }
  }
};
</script>

<style scoped>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>
