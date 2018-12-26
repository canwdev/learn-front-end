<template>
  <div class="seller">
    <div class="seller-rank-wrap card-view">
      <div class="title-rank">
        <div class="rank-box">
          <h1 class="title">{{seller.name}}</h1>
          <div class="ranks">
            <star :size="24" :score="seller.score"></star>
            ({{seller.ratingCount}}) 月售{{seller.sellCount}}单
          </div>
        </div>
        <div class="collection-box">
          <span class="icon-favorite"></span>
          收藏
        </div>
      </div>

      <div class="composite-rank">
        <div class="rank-box">
          <div class="title">起送价</div>
          <div class="value">{{seller.minPrice}}<small>元</small></div>
        </div>
        <div class="rank-box">
          <div class="title">商家配送</div>
          <div class="value">{{seller.deliveryPrice}}<small>元</small></div>
        </div>
        <div class="rank-box">
          <div class="title">平均配送时间</div>
          <div class="value">{{seller.deliveryTime}}<small>分钟</small></div>
        </div>
      </div>

    </div>

    <div class="activity-wrap card-view">
      <h5>公告与活动</h5>
      <p class="notice-box">{{seller.bulletin}}</p>

      <ul class="activities-box">
        <li v-for="(item, index) in seller.supports" :key="index">
          <spec-icon :typeId="item.type"></spec-icon>
          <p>{{item.description}}</p>
        </li>
      </ul>
    </div>

    <div class="seller-photos-wrap card-view">
      <h5>商家实景</h5>
      <div class="photos-box">
        <ul>
          <li v-for="(pic, index) in seller.pics">
            <img :src="pic">
          </li>
        </ul>
      </div>

    </div>

    <div class="seller-info-wrap card-view">
      <h5>商家信息</h5>
      <ul class="info-box">
        <li class="info-item" v-for="(info, index) in seller.infos">{{info}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Star from '@/components/star/Star'
import SpecIcon from '@/components/spec_icon/SpecIcon'

export default {
  components: {
    Star,
    SpecIcon
  },
  props: {
    seller: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" scoped>
  .seller
    position absolute
    top 181px
    left 0
    right 0
    bottom 0
    overflow: auto
    background-color: #F3F5F7
    .seller-rank-wrap
      .title-rank
        display flex
        justify-content space-between
        padding-bottom: 18px
        border-bottom 1px solid #EBECED
      .composite-rank
        display flex
        justify-content space-around
        text-align: center
        margin-top: 18px
        .rank-box+.rank-box
          border-left 1px solid #EBECED
        .rank-box
          flex 1
          width 33.33%
          .title
            margin-bottom: 4px;
            line-height: 10px;
            font-size: 10px;
            color: #93999f;
          .value
            line-height: 24px;
            font-size 24px;
            color: #07111b;
            small
              font-size: 10px;
    .activity-wrap
      .notice-box
        line-height: 24px;
        font-size: 12px;
        color: #f01414;
    .seller-photos-wrap
      .photos-box
        overflow-y hidden
        overflow-x: auto
      .photos-box>ul
        display flex
        flex-direction row
      .photos-box>ul>li
        margin: 2px
      .photos-box>ul>li>img
        height: 90px
        width 120px
        object-fit cover
    .card-view
      background #fff
      border-top 1px solid #EBECED
      border-bottom 1px solid #EBECED
      margin-bottom: 18px
      padding 18px
      &>h5
        margin-bottom: 12px;
        line-height: 14px;
        color: #07111b;
        font-size: 14px;
</style>
