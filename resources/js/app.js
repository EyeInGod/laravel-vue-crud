import "./bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import Router from "@/router";
import VueAxios from "vue-axios";
import axios from "axios";

const app = createApp(App);

// import AllProduct from "./components/AllProduct.vue";
// import CreateProduct from "./components/CreateProduct.vue";
// import EditProduct from "./components/EditProduct.vue";
// app.component("all-product", AllProduct);
// app.component("create-product", CreateProduct);
// app.component("edit-product", EditProduct);

app.use(Router);
app.use(VueAxios, axios);

app.mount("#app");
