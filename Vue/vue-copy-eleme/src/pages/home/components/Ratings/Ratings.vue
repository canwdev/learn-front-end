<template>
  <div class="ratings">
    <div class="ratings-wrap">
      <div class="left">
        <p class="score">{{seller.score}}</p>
        <p class="title">综合评分</p>
        <p class="rank">高于周边商家 {{seller.rankRate}}%</p>
      </div>
      <div class="right">
        <div class="star-wrap">
          <span class="title">服务态度</span>
          <star :size="36" :score="seller.serviceScore"></star>
          <span class="rank">{{seller.serviceScore}}</span>
        </div>
        <div class="star-wrap">
          <span class="title">商品评分</span>
          <star :size="36" :score="seller.foodScore"></star>
          <span class="rank">{{seller.foodScore}}</span>
        </div>
        <div class="star-wrap">
          <span class="title">送达时间</span>
          <span class="value">{{seller.deliveryTime}}分钟</span>
        </div>
      </div>

    </div>

    <div class="comment-wrap">
      <comment :comments="ratings"></comment>
    </div>

  </div>
</template>

<script>
import Star from '@/components/star/Star'
import Comment from '@/components/comment/Comment'

export default {
  components: {
    Star,
    Comment
  },
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      ratings: []
    }
  },
  created () {
    const URL = '/api/ratings'
    this.$http.get(URL).then((res)=>{
      res = res.body
      console.log('ratings', res)

      this.ratings = res
    }, (res)=>{
      console.log('GetError!', res)
    })
  }
}
</script>

<style lang="stylus" scoped>
  .ratings
    position absolute
    top 181px
    left 0
    right 0
    bottom 0
    overflow: auto
    background-color: #F3F5F7
    .ratings-wrap
      display: flex
      padding 20px 10px
      box-sizing border-box
      background #fff
      border-bottom 1px solid #EBECED
      .left
        width 40%
        text-align: center
        .score
          font-size:24px;
          font-weight:400;
          color:rgba(255,153,0,1);
        .title
          font-size:12px;
          font-weight:400;
          color:rgba(7,17,27,1);
          margin-top: 10px
        .rank
          font-size:10px;
          font-weight:400;
          color:rgba(147,153,159,1);
          margin-top: 8px
      .right
        width 60%
        border-left 1px solid #EDEEEE
        padding-left: 24px
        box-sizing border-box
        .star-wrap
          display flex
          align-items center
          font-size 12px
          .title
            margin-right: 12px
          .rank
            color: #FF9900
          .value
            color: #93999F
          .star>>>.star-item
              margin-right 6px
        .star-wrap+.star-wrap
          margin-top: 12px
  .comment-wrap
    background #ff
    margin-top 16px
    border-top: 1px solid #EBECED
    padding 15px 10px
    box-sizing border-box
</style>
