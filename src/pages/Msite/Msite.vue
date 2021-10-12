<template>
  <section class="msite">
    <!-- 首页头部title -->
    <!-- 使用 :title 来给头部组件传递数据 -->
    <HeaderTop title="西南交大">
      <!-- 要使用slot="left"指定插入的插槽位置 -->
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-daka-copy"></i>
      </router-link>
      <router-link class="header_login" slot="right" :to="userInfoid ? '/userinfo': '/login'">
        <span class="header_login_text" v-if="!userInfoid">
          登录|注册
        </span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-gouwuche_guanyuwomen"></i>
        </span>
      </router-link>
    </HeaderTop>

    <!--首页导航轮播图-->
    <nav class="msite_nav">
      <!-- swiper的容器div -->
      <div class="swiper-container" v-if="categorys.length">
        <!-- swiper的包裹层div -->
        <div class="swiper-wrapper">
          <!-- swiper的轮播div -->
          <div class="swiper-slide" v-for="(pages,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(data,index) in pages" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl+data.image_url">
              </div>
              <span>{{data.title}}</span>
            </a>
          </div>
        </div>
        <!-- swiper轮播图圆点 -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="back" v-else>
    </nav>

  
  </section>
</template>

<script>

import { Swiper, swiperSlide } from 'vue-awesome-swiper'

import 'swiper/swiper-bundle.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'


export default {
  data () {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com',
      userInfoid:'lyg',
      categorysArr: [
  {
    "id": 20,
    "is_in_serving": true,
    "description": "苦了累了，来点甜的",
    "title": "甜品饮品",
    "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22complex_category_ids%22%3A%5B240%2C241%2C242%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A239%2C%22name%22%3A%22%5Cu751c%5Cu54c1%5Cu996e%5Cu54c1%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%94%9C%E5%93%81%E9%A5%AE%E5%93%81&animation_type=1&is_need_mark=0&banner_type=",
    "image_url": "/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg",
    "icon_url": "",
    "title_color": "",
    "__v": 0
  },
  {
    "id": 10,
    "is_in_serving": true,
    "description": "足不出户，便利回家",
    "title": "商超便利",
    "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu5546%5Cu8d85%5Cu4fbf%5Cu5229%22%2C%22complex_category_ids%22%3A%5B254%2C255%2C256%2C257%2C258%2C271%2C272%2C273%2C274%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A252%2C%22name%22%3A%22%5Cu5546%5Cu5e97%5Cu8d85%5Cu5e02%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E5%95%86%E8%B6%85%E4%BE%BF%E5%88%A9&animation_type=1&is_need_mark=0&banner_type=",
    "image_url": "/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg",
    "icon_url": "",
    "title_color": "",
    "__v": 0
  },
  {
    "id": 15,
    "is_in_serving": true,
    "description": "附近美食一网打尽",
    "title": "美食",
    "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu7f8e%5Cu98df%22%2C%22complex_category_ids%22%3A%5B207%2C220%2C233%2C260%5D%2C%22is_show_all_category%22%3Afalse%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E7%BE%8E%E9%A3%9F&animation_type=1&is_need_mark=0&banner_type=",
    "image_url": "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
    "icon_url": "",
    "title_color": "",
    "__v": 0
  },
  {
    "id": 225,
    "is_in_serving": true,
    "description": "有菜有肉，营养均衡",
    "title": "简餐",
    "link": "eleme://restaurants?filter_key=%7B%22activity_types%22%3A%5B3%5D%2C%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu7b80%5Cu9910%22%2C%22complex_category_ids%22%3A%5B209%2C212%2C215%2C265%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%7B%22id%22%3A3%2C%22name%22%3A%22%5Cu4e0b%5Cu5355%5Cu7acb%5Cu51cf%22%2C%22icon_name%22%3A%22%5Cu51cf%22%2C%22icon_color%22%3A%22f07373%22%2C%22is_need_filling%22%3A1%2C%22is_multi_choice%22%3A0%2C%22filter_value%22%3A3%2C%22filter_key%22%3A%22activity_types%22%7D%5D%7D&target_name=%E7%AE%80%E9%A4%90&animation_type=1&is_need_mark=0&banner_type=",
    "image_url": "/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg",
    "icon_url": "",
    "title_color": "",
    "__v": 0
  },
  {
    "id": 403297,
    "is_in_serving": true,
    "description": "大胆尝鲜，遇见惊喜",
    "title": "新店特惠",
    "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu65b0%5Cu5e97%5Cu7279%5Cu60e0%22%2C%22complex_category_ids%22%3A%5B207%2C220%2C233%2C239%2C244%2C248%2C252%2C260%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22support_ids%22%3A%5B-1%5D%2C%22activities%22%3A%5B%5D%7D&target_name=%E6%96%B0%E5%BA%97%E7%89%B9%E6%83%A0&animation_type=1&is_need_mark=0&banner_type=",
    "image_url": "/a/fa/d41b04d520d445dc5de42dae9a384jpeg.jpeg",
    "icon_url": "",
    "title_color": "",
    "__v": 0
  },
  {
    "id": 92,
    "is_in_serving": true,
    "description": "准时必达，超时赔付",
    "title": "准时达",
    "link": "eleme://restaurants?filter_key=%7B%22support_ids%22%3A%5B9%5D%2C%22activities%22%3A%5B%7B%22id%22%3A9%2C%22name%22%3A%22%5Cu51c6%5Cu65f6%5Cu8fbe%22%2C%22icon_name%22%3A%22%5Cu51c6%22%2C%22icon_color%22%3A%22E8842D%22%2C%22is_need_filling%22%3A0%2C%22is_multi_choice%22%3A1%2C%22filter_value%22%3A9%2C%22filter_key%22%3A%22support_ids%22%2C%22description%22%3A%22%5Cu51c6%5Cu65f6%5Cu8fbe%22%7D%5D%7D&target_name=%E5%87%86%E6%97%B6%E8%BE%BE&animation_type=1&is_need_mark=0&banner_type=",
    "image_url": "/3/84/8e031bf7b3c036b4ec19edff16e46jpeg.jpeg",
    "icon_url": "",
    "title_color": "",
    "__v": 0
  },
  {
    "id": 1,
    "is_in_serving": true,
    "description": "0元早餐0起送，每天都有新花样。",
    "title": "预订早餐",
    "link": "eleme://web?url=https%3A%2F%2Fzaocan.ele.me&target_name=%E9%A2%84%E8%AE%A2%E6%97%A9%E9%A4%90&animation_type=1&is_need_mark=&banner_type=",
    "image_url": "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
    "icon_url": "",
    "title_color": "",
    "__v": 0
  },
  {
    "id": 65,
    "is_in_serving": true,
    "description": "",
    "title": "土豪推荐",
    "link": "eleme://restaurants?filter_key=%7B%22activities%22%3A%5B%7B%22filter_key%22%3A%22tags%22%2C%22filter_value%22%3A0%7D%5D%7D&target_name=%E5%9C%9F%E8%B1%AA%E6%8E%A8%E8%8D%90&animation_type=1&is_need_mark=0&banner_type=",
    "image_url": "/e/7e/02b72b5e63c127d5bfae57b8e4ab1jpeg.jpeg",
    "icon_url": "",
    "title_color": "",
    "__v": 0
  },
  {
    "id": 288,
    "is_in_serving": true,
    "description": "无辣不欢",
    "title": "川湘菜",
    "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu5ddd%5Cu6e58%5Cu83dc%22%2C%22complex_category_ids%22%3A%5B221%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A220%2C%22name%22%3A%22%5Cu7279%5Cu8272%5Cu83dc%5Cu7cfb%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E5%B7%9D%E6%B9%98%E8%8F%9C&animation_type=1&is_need_mark=0&banner_type=",
    "image_url": "/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg",
    "icon_url": "",
    "title_color": "",
    "__v": 0
  },
  {
    "id": 286,
    "is_in_serving": true,
    "description": "",
    "title": "麻辣烫",
    "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu9ebb%5Cu8fa3%5Cu70eb%22%2C%22complex_category_ids%22%3A%5B214%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E9%BA%BB%E8%BE%A3%E7%83%AB&animation_type=1&is_need_mark=0&banner_type=",
    "image_url": "/3/c7/a9ef469a12e7a596b559145b87f09jpeg.jpeg",
    "icon_url": "",
    "title_color": "",
    "__v": 0
  },
  {
    "id": 289,
    "is_in_serving": true,
    "description": "老字号，好味道",
    "title": "包子粥店",
    "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu5305%5Cu5b50%5Cu7ca5%5Cu5e97%22%2C%22complex_category_ids%22%3A%5B215%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E5%8C%85%E5%AD%90%E7%B2%A5%E5%BA%97&animation_type=1&is_need_mark=0&banner_type=",
    "image_url": "/2/17/244241b514affc0f12f4168cf6628jpeg.jpeg",
    "icon_url": "",
    "title_color": "",
    "__v": 0
  },
  {
    "id": 9,
    "is_in_serving": true,
    "description": "内心小公举，一直被宠爱",
    "title": "鲜花蛋糕",
    "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu9c9c%5Cu82b1%5Cu86cb%5Cu7cd5%22%2C%22complex_category_ids%22%3A%5B249%2C250%2C251%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A248%2C%22name%22%3A%22%5Cu9c9c%5Cu82b1%5Cu86cb%5Cu7cd5%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E9%B2%9C%E8%8A%B1%E8%9B%8B%E7%B3%95&animation_type=1&is_need_mark=0&banner_type=",
    "image_url": "/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg",
    "icon_url": "",
    "title_color": "",
    "__v": 0
  },
  {
    "id": 285,
    "is_in_serving": true,
    "description": "寿司定食，泡菜烤肉",
    "title": "日韩料理",
    "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu65e5%5Cu97e9%5Cu6599%5Cu7406%22%2C%22complex_category_ids%22%3A%5B229%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A260%2C%22name%22%3A%22%5Cu5f02%5Cu56fd%5Cu6599%5Cu7406%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E6%97%A5%E9%9F%A9%E6%96%99%E7%90%86&animation_type=1&is_need_mark=0&banner_type=",
    "image_url": "/6/1a/1e0f448be0624c62db416e864d2afjpeg.jpeg",
    "icon_url": "",
    "title_color": "",
    "__v": 0
  },
  {
    "id": 8,
    "is_in_serving": true,
    "description": "一天变女神",
    "title": "果蔬生鲜",
    "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu679c%5Cu852c%5Cu751f%5Cu9c9c%22%2C%22complex_category_ids%22%3A%5B245%2C246%2C247%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A244%2C%22name%22%3A%22%5Cu679c%5Cu852c%5Cu751f%5Cu9c9c%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E6%9E%9C%E8%94%AC%E7%94%9F%E9%B2%9C&animation_type=1&is_need_mark=0&banner_type=",
    "image_url": "/4/34/ea0d51c9608310cf41faa5de6b8efjpeg.jpeg",
    "icon_url": "",
    "title_color": "",
    "__v": 0
  },
  {
    "id": 236,
    "is_in_serving": true,
    "description": "大口大口把你吃掉",
    "title": "汉堡薯条",
    "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu6c49%5Cu5821%22%2C%22complex_category_ids%22%3A%5B212%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A207%2C%22name%22%3A%22%5Cu5feb%5Cu9910%5Cu4fbf%5Cu5f53%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E6%B1%89%E5%A0%A1%E8%96%AF%E6%9D%A1&animation_type=1&is_need_mark=0&banner_type=",
    "image_url": "/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg",
    "icon_url": "",
    "title_color": "",
    "__v": 0
  },
  {
    "id": 287,
    "is_in_serving": true,
    "description": "西餐始祖，欧洲的味道",
    "title": "披萨意面",
    "link": "eleme://restaurants?filter_key=%7B%22category_schema%22%3A%7B%22category_name%22%3A%22%5Cu62ab%5Cu8428%5Cu610f%5Cu9762%22%2C%22complex_category_ids%22%3A%5B211%5D%2C%22is_show_all_category%22%3Atrue%7D%2C%22restaurant_category_id%22%3A%7B%22id%22%3A260%2C%22name%22%3A%22%5Cu5f02%5Cu56fd%5Cu6599%5Cu7406%22%2C%22sub_categories%22%3A%5B%5D%2C%22image_url%22%3A%22%22%7D%2C%22activities%22%3A%5B%5D%7D&target_name=%E6%8A%AB%E8%90%A8%E6%84%8F%E9%9D%A2&animation_type=1&is_need_mark=0&banner_type=",
    "image_url": "/7/b6/235761e50d391445f021922b71789jpeg.jpeg",
    "icon_url": "",
    "title_color": "",
    "__v": 0
  }
],
    }
  },
  components: {
    HeaderTop,
     Swiper,
  },

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .header
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
        .icon-sousuo
          font-size 25px
          color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 50%
        color #fff
        text-align center
        .header_title_text
          font-size 20px
          color #fff
          display block
      .header_login
        font-size 14px
        color #fff
        position absolute
        right 15px
        top 50%
        transform translateY(-50%)
        .header_login_text
          color #fff
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
</style>
