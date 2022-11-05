<template>
  <b-container class="createPost">
    <b-row>
      <b-col lg="12">
        <div class="createPost__title">Создания поста</div>
      </b-col>
    </b-row>
  <b-row>
    <b-col lg="12">
      <input v-model="title" placeholder="Введите заголовок статьи" name="postTitle" class="createPost__inputTitle">
    </b-col>
  </b-row>
  <b-row>
      <b-col lg="12">
        <div class="createPost__title">Предварительный просмотр</div>
      </b-col>
  </b-row>
  <b-row>
    <b-col class="createPost__preview" v-html="description" lg="12"></b-col>
  </b-row>
    <b-row>
      <b-col lg="12">
        <div class="createPost__text-editor">
          <vue-editor v-model="description"></vue-editor>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <div class="createPost__uploadImg">
          <b-row v-for="file in files" :key="file" class="createPost__uploadImg__category">
            <b-col lg="12" class="createPost__uploadImg__category__name">
              Картинка
            </b-col>
            <b-col lg="4" offset-lg="4" class="createPost__uploadImg__category__img">
              <img :src="file.thumb" alt="upload-img">
            </b-col>
            <b-col lg="12" class="createPost__uploadImg__category__name">
              Имя - {{ file.name }}
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
              <file-upload 
                name="avatar"
                ref="upload"
                v-model="files"
                post-action="http://localhost:3003/uploadFile"
                :data="{
                  title: title,
                  description: description
                  }"
                @input-file="inputFile"
                @input-filter="inputFilter"
                :size="5242880"
                :timeout="5000"
                :maximum="1"
              >
                  <div class="createPost__titleImg">
                    <div class="createPost__titleImg__img"><i class="material-icons">image</i></div>
                    <div class="createPost__titleImg__title">Загрузите фотографию для заголовка</div>
                  </div> 
              </file-upload>
      </b-col>
    </b-row>


    <b-row>
      <b-col lg="4" offset-lg="4">
            <div class="createPost__button">СОЗДАТЬ ПОСТ</div>
      </b-col>
    </b-row>
  </b-container>
</template>



<script>


import {ref} from 'vue'
import VueUploadComponent from 'vue-upload-component'

export default {
  components: {
    FileUpload: VueUploadComponent
  },
  methods: {

      inputFile: function (newFile, oldFile) {
      
        if (newFile && oldFile && !newFile.active && oldFile.active) {
          // Get response data
          console.log('response', newFile.response)
          if (newFile.xhr) {
            //  Get the response status code
            console.log('status', newFile.xhr.status)
            if(newFile.xhr.status){
              console.log(newFile.response)
            }
          }
        }
      },

      // Фильтр проверяющий формат файлов
      inputFilter: function (newFile, oldFile, prevent) {
        if (newFile && !oldFile) {
          if (!/\.(jpeg|jpg|png|webp)$/i.test(newFile.name)) {
            console.log(`НЕ ПРОШЛО ПРОВЕРКУ В ФИЛЬТРАХ`)
     
            return prevent()
          }
        }

        // Create a blob field
        newFile.blob = ''
        let URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file)
        }
        // Thumbnails
        // Добавляем путь для просмотра картинки
        newFile.thumb = ''
        if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
          newFile.thumb = newFile.blob
        }
        console.log(newFile);
      }
  },
  data(){
    return {
      files: [],
      title: ``,
      description: ``
    }
  },
  setup(){
      const upload = ref(null);
      return {
        upload
      }
  }  
}
</script>

<style lang="less" scoped>
  @roboto: 'Roboto', sans-serif;
  @inter: 'Inter', sans-serif;

.createPost__preview{
  
}

.createPost__uploadImg{
  border-color: red;
  margin-bottom: 20px;
  .createPost__uploadImg__category{
    font-family: @roboto;
    font-size: 16px;
    .createPost__uploadImg__category__name{
      border-color: blue;
      padding: 7px;
    }
    .createPost__uploadImg__category__img{
      border-color: green;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}

// Стили отвечающие за окно загрузки файла
.file-uploads{
  display: block;
  overflow: visible;
}


.createPost{
  margin-top: 117px;
  .createPost__title{
    text-align: left;
    font-family: @roboto;
    font-size: 22px;
    font-weight: 600;
    color: #999999;
  }
  .createPost__button{
    border-style: solid;
    font-family: @inter;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: #1976D2;
    border-width: 2px;
    border-color: #1976D2;
    padding: 10px;
    cursor: pointer;
    display: block;
    &:hover{
      background-color:#1976D2;
      color: white;
    }
  }
  .createPost__text-editor{
    border-color: red;
    margin-top: 26px;
    margin-bottom: 53px;
  }


  .createPost__titleImg{
    margin-bottom: 83px;//83px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    padding: 35px;
    display: block;
    cursor: pointer;
    .createPost__titleImg__img{
      i{
        font-size: 80px;
      }
    }
    .createPost__titleImg__title{
      font-size: 22px;
      font-family: @roboto;
      font-weight: 300;
    }
  }

  .createPost__inputTitle{
    border-style: none;
    outline-style: none;
    display: block;
    width: 100%;
    font-family: @roboto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    padding: 20px;
    margin-bottom: 20px;
    margin-top: 26px;
    &::placeholder{
      font-size: 16px;
    }
  }


}  



</style>