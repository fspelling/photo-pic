import Home from "./components/Home/Home.vue";
import Cadastro from "./components/cadastro/Cadastro.vue";

export const routes = [
  { path: "", component: Home, titulo: 'Home' },
  { path: "/cadastro", component: Cadastro, titulo: 'Cadastro' }
];
