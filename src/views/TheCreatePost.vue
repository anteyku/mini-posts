<template>
  <b-container class="createPost">
    <b-row>
      <b-col lg="12">
        <div class="createPost__title">Создания поста</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <div class="createPost__text-editor">
          <vue-editor></vue-editor>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12">
        <input type="file" name="imgTitle" id="imgTitle">
        <div class="createPost__titleImg">
          <div class="createPost__titleImg__img"><i class="material-icons">image</i></div>
          <div class="createPost__titleImg__title">Загрузите фотографию для заголовка</div>
        </div>
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
export default {

}
</script>

<style lang="less" scoped>
  @roboto: 'Roboto', sans-serif;
  @inter: 'Inter', sans-serif;

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
    margin-bottom: 83px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    padding: 35px;
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
}  



</style>