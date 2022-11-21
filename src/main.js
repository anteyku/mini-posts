
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from "./store";
import BootstrapVue3 from 'bootstrap-vue-3'
// Подключаем bootstrap grid сетку
import 'bootstrap/dist/css/bootstrap-grid.min.css'
//import "materialize-css"
//import "materialize-css/dist/css/materialize.css"
// Для того чтобе установить иконки нужно npm install material-design-icons --save
import 'material-design-icons/iconfont/material-icons.css'
// Библиотека для подгрузки внешних скриптов
  // Стили Normalaiz.css
  import './normalaiz.css'
// Ленивая загрузка картинок  

// Ленивая загрузка елементов
import VueLazyLoad from 'vue3-lazyload'

// Подключения Axios
import axios from 'axios'
// Разрешаю передачу куки с клиента на бекенд
axios.defaults.withCredentials = true
import VueAxios from 'vue-axios'

// Подключаю уведомления
import { SnackbarService, Vue3Snackbar } from "vue3-snackbar";
import "vue3-snackbar/dist/style.css";

// Редактирования текста
import VueEditor from "vue3-editor";




// СДЕЛАЛ КОМИТ КОМАНДОЙ 4

router.beforeEach(async (to, from, next) => {
  try{

    //! Проверка наличия сессии
    await axios.get("http://localhost:3001/checkSession").then((response) => {
      
      // Устанавливаем CSRF токен в заголовок axios
      axios.defaults.headers.common['X-CSRF-TOKEN'] = response.data.csrf;
      // console.log(response.data)
      // Если пользователь имеет сессию то - true
        if(response.data.user){
          store.state.logout = true;
          console.log(store.state.logout)
          store.state.user = response.data.user;
          store.state.serverAdress = response.data.ipServer;
          store.state.CSRF = response.data.csrf;
        } else {
          store.state.logout = false;
          console.log(store.state.logout)
        }
    })

    next();  
 
  } catch(error){
    console.log(error);
  }
  
})


let app = createApp(App)
app.use(VueEditor);
app.use(SnackbarService);
app.component("vue3-snackbar", Vue3Snackbar);
app.use(VueAxios, axios)
app.use(VueLazyLoad, {
  loading: '',
  error: '',
  lifecycle: {
    loading: () => {
     // console.log('loading', el)
    },
    error: () => {
    //  console.log('error', el)
    },
    loaded: () => {
    //  console.log('loaded', el)
    }
  }
})
app.use(BootstrapVue3)
app.use(router);
app.use(store);
app.mount('#app')
