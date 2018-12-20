<template>
  <div class="comment">
    <div class="header">
      <h1>商品评价</h1>
      <ul class="tags">
        <li class="blue" :class="{'active':selectedType===ALL}" @click="changeType(ALL)">全部 <span class="number">{{comments.length}}</span>
        </li>
        <li class="blue" :class="{'active':selectedType===GOOD}" @click="changeType(GOOD)">推荐 <span class="number">{{commentsGood.length}}</span>
        </li>
        <li :class="{'active':selectedType===BAD}" @click="changeType(BAD)">吐槽 <span class="number">{{commentsBad.length}}</span>
        </li>
      </ul>
      <div class="comment-switch" @click="toggleOnlyContent">
        <span class="icon icon-check_circle" :class="{'active':onlyHasContent}"></span>
        <span class="text">只看有内容的评价</span>
      </div>
    </div>
    <div class="comment-list">
      <ul v-show="comments && comments.length">
        <li v-for="(item, index) in comments" :key="index" v-show="commentsListShow(item.rateType, item.text)">
          <div class="user-info">
            <div class="time">{{item.rateTime | _formatDate}}</div>
            <div class="avatar">
              <span class="user-name">{{item.username}}</span>
              <img :src="item.avatar">
            </div>
          </div>
          <div class="cmt-info">
            <span class="icon" :class="{'icon-thumb_up':item.rateType===0,'icon-thumb_down':item.rateType===1}"></span>
            <span class="text">{{item.text}}</span>
          </div>
        </li>
      </ul>
      <div class="no-comment" v-show="!comments || !comments.length">暂无评价</div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from '@/common/js/util'

  export default {
    props: {
      comments: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        ALL: 2,
        GOOD: 0,
        BAD: 1,
        onlyHasContent: true,
        selectedType: 2,
      }
    },
    filters: {
      _formatDate(time) {
        return formatDate(new Date(time), 'yyyy-MM-dd hh:mm');
      }
    },
    computed: {
      // good 筛选器
      commentsGood () {
        return this.comments.filter((obj)=> obj.rateType === this.GOOD)
      },
      commentsBad () {
        return this.comments.filter((obj) => obj.rateType === this.BAD)
      }
    },
    methods: {
      init () {
        this.selectedType = this.ALL
        this.onlyHasContent = true
      },
      toggleOnlyContent () {
        this.onlyHasContent = !this.onlyHasContent
      },
      changeType (type) {
        this.selectedType = type
      },
      commentsListShow (type, text) {
        // 只显示有内容的评价
        if (this.onlyHasContent && !text) {
          return false
        }

        if (this.selectedType === this.ALL) {
          return true
        } else {
          return this.selectedType === type
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.comment
  .header
    h1
      font-size:14px;
      font-weight:400;
      color:rgba(7,17,27,1);
      line-height:14px;
    .tags
      display flex
      justify-content flex-start
      padding 18px 0
      border-bottom 1px solid #EDEDEE
      &>li
        background #E9EBEC
        font-size 12px
        padding 12px
        margin-right 8px
        .number
          font-size 10px
        &.active
          background #4d555d
          color: #fff
      .blue
        background rgba(0, 160, 220, 0.2)
        &.active
          background #00A0DC
    .comment-switch
      padding 15px 0
      color: #B7BBBF
      font-size 14px
      display flex
      align-items center
      .icon
        font-size 24px
        margin-right: 2px
        &.active
          color: #00c850
  .comment-list
    border-top 1px solid #EDEDEE
    &>ul>li
      padding 15px 0
      .user-info
        display flex
        justify-content space-between
        align-items center
        font-size:10px;
        color:rgba(147,153,159,1);
        .avatar
          img
            width 14px
            height 14px
            border-radius 50%
      .cmt-info
        margin-top: 12px
        color: #07111B
        font-size 14px
      .text
        line-height: 18px
      .icon
        color: #B7BBBF
      .icon-thumb_up
        color #00A0DC
    &>ul>li+li
      border-top 1px solid #F9F9F9
    .no-comment
      text-align: center
      margin: 20px auto
</style>
