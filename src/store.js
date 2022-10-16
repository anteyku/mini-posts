import { createStore } from "vuex"

let store = createStore({
  state() {
    return {
      // Активная текущая страница
      pageActive: {
        important: false,
        cabinet: false,
        posts: false,
        auth: false,
        register: false
      },
      // Язык сайта
      multilingualism: {
        ru: true,
        en: false
      },
      // Пользователь не авторизован (по умолчанию)
      logout: false,
      // Данные пользователя
      user: ``
    }
  }
})

export default store