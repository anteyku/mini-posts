<template>
<teleport to="body">
    <vue3-snackbar style="font-family: sans-serif" bottom left :duration="3000"></vue3-snackbar>
</teleport>
  <b-container>
    <b-row class="post"> 
      <b-col lg="6" class="post__left">
          <img v-lazy="{src: `anime.jpg`}" alt="" class="post__left__post-mini__img">
          <div class="post__left__post-mini__description">
            <div class="post__left__post-mini__description__create-time">
              <i class="material-icons">access_time</i>
              14:23 06.03.2022
            </div>
              <router-link to="/" class="post__left__post-mini__description__title van-multi-ellipsis--l2">
                Влог о том что я ел сегодня на выходные
              </router-link>
            <div class="post__left__post-mini__description__author">
              <span>by</span>
               FantaMen
            </div>
          </div>
      </b-col>
      <b-col lg="6" class="post__right">
        <b-row>
          <b-col lg="6" class="post__left">
            <img v-lazy="{src: `anime-girl-sunset-glow-loneliness-3c-3840x2160.jpg`}" alt="" class="post__left__post-mini__img">
            <div class="post__left__post-mini__description">
              <div class="post__left__post-mini__description__create-time">
                <i class="material-icons">access_time</i>
                14:23 06.03.2022
              </div>
              <router-link to="/" class="post__left__post-mini__description__title van-multi-ellipsis--l2">
                Влог о том что я ел сегодня на выходные
              </router-link>
              <div class="post__left__post-mini__description__author">
                <span>by</span>
                FantaMen
              </div>
            </div>
          </b-col>       
           <b-col lg="6" class="post__left">
            <img v-lazy="{src: `anime-girl-sunset-glow-loneliness-3c-3840x2160.jpg`}" alt="" class="post__left__post-mini__img">
            <div class="post__left__post-mini__description">
              <div class="post__left__post-mini__description__create-time">
                <i class="material-icons">access_time</i>
                14:23 06.03.2022
              </div>
              <router-link to="/" class="post__left__post-mini__description__title van-multi-ellipsis--l2">
                Влог о том что я ел сегодня на выходные
              </router-link>
              <div class="post__left__post-mini__description__author">
                <span>by</span>
                FantaMen
              </div>
            </div>
          </b-col>  
           <b-col lg="6" class="post__left">
            <img v-lazy="{src: `anime-girl-sunset-glow-loneliness-3c-3840x2160.jpg`}" alt="" class="post__left__post-mini__img">
            <div class="post__left__post-mini__description">
              <div class="post__left__post-mini__description__create-time">
                <i class="material-icons">access_time</i>
                14:23 06.03.2022
              </div>
              <router-link to="/" class="post__left__post-mini__description__title van-multi-ellipsis--l2">
                Влог о том что я ел сегодня на выходные
              </router-link>
              <div class="post__left__post-mini__description__author">
                <span>by</span>
                FantaMen
              </div>
            </div>
          </b-col>  
          <b-col lg="6" class="post__left">
            <img v-lazy="{src: `anime-girl-sunset-glow-loneliness-3c-3840x2160.jpg`}" alt="" class="post__left__post-mini__img">
            <div class="post__left__post-mini__description">
              <div class="post__left__post-mini__description__create-time">
                <i class="material-icons">access_time</i>
                14:23 06.03.2022
              </div>
              <router-link to="/" class="post__left__post-mini__description__title van-multi-ellipsis--l2">
                Влог о том что я ел сегодня на выходные
              </router-link>
              <div class="post__left__post-mini__description__author">
                <span>by</span>
                FantaMen
              </div>
            </div>
          </b-col>                                          
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
 async mounted(){
    console.log(`Постов страница`)
    for(let elem in this.$store.state.pageActive){
      this.$store.state.pageActive[elem] = false
    }
    this.$store.state.pageActive.posts = true;


  await this.axios.get(`http://${this.$store.state.serverAdress}/getNewPost/`)
  .then((response)=>{
    console.log(response)
  })


  }
}
</script>

<style lang="less" scoped>
  @roboto: 'Roboto', sans-serif;
  @inter: 'Inter', sans-serif;

  .post{
    margin-top: 74px;
    .post__left{
      min-height: 350px;
      position: relative;
      padding: 0px;
      overflow: hidden;
      background-color: black;

        .post__left__post-mini__img{
          position: absolute;
          top: 0;
          left: 0;
          width: auto;
          height: 100%;
          filter: brightness(73%);
          
        }
        .post__left__post-mini__description{
          width: 90%;
          position: absolute;
          bottom: 0;
          left: 5%;
          margin-bottom: 20px;
          .post__left__post-mini__description__create-time{
            width: 100%;
            color: white;
            text-align: left;
            font-family: @roboto;
            font-weight: 300;
            display: flex;
            i{
              font-size: 1rem;
              margin-right: 5px;
              color: rgb(179, 179, 179);
            }
          }
          .post__left__post-mini__description__title{
            color: white;
            font-family: @roboto;
            text-align: left;
            font-weight: 500;
            font-size: 25px;
            margin-top: 8px;
          }
          .post__left__post-mini__description__author{
            color: white;
            text-align: left;
            margin-top: 10px;
            font-weight: 300px;
            font-size: 1rem;
            span{
              color: rgb(179, 179, 179);
            }
          }
        }
    }
    .post__right{
     
        .post__left{
      
          position: relative;
          padding: 0px;
          overflow: hidden;
          min-height: 175px;
          background-color: black;

            .post__left__post-mini__img{
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              filter: brightness(73%);
            }
            .post__left__post-mini__description{
              width: 90%;
              position: absolute;
              bottom: 0;
              left: 5%;
              margin-bottom: 23px;
              .post__left__post-mini__description__create-time{
                width: 100%;
                color: white;
                text-align: left;
                font-family: @roboto;
                font-weight: 300;
                display: flex;
                i{
                  font-size: 1rem;
                  margin-right: 5px;
                  color: rgb(179, 179, 179);
                }
              }
              .post__left__post-mini__description__title{
                color: white;
                font-family: @roboto;
                text-align: left;
                font-weight: 500;
                font-size: 25px;
                margin-top: 8px;
              }
              .post__left__post-mini__description__author{
                color: white;
                text-align: left;
                margin-top: 10px;
                font-weight: 300px;
                font-size: 1rem;
                span{
                  color: rgb(179, 179, 179);
                }
              }
            }
        }      
    }
  }

</style>