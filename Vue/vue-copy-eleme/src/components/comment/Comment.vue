<template>
  <div class="comment">
    <div class="header">
      <h1>商品评价</h1>
      <ul class="tags">
        <li class="blue">全部 11</li>
        <li class="blue">推荐 11</li>
        <li>吐槽 11</li>
      </ul>
      <div class="comment-switch">
        <span class="icon-check_circle"></span>
        <span class="text">只看有内容的评价</span>
      </div>
    </div>
    <div class="comment-list">
      <ul>
        <li v-for="(item, index) in comments" :key="index">
          <div class="user-info">
            <div class="time">2018-12-16 14:48:54</div>
            <div class="avatar">
              <span class="user-name">{{item.username}}</span>
              <img :src="item.avatar">
            </div>
          </div>
          <div class="cmt-info">
            <span class="icon icon-thumb_up"></span>
            <span>{{item.text}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  const ALL = 2;
  const GOOD = 0;
  const BAD = 1;

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
        selectedType: ALL,
        onlyHasContent: false,
      }
    },
    methods: {
      toggleOnlyContent () {
        this.onlyHasContent = !this.onlyHasContent
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
    .comment-switch
      padding 15px 0
      color: #B7BBBF
      font-size 14px
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
      .icon
        color: #B7BBBF
      .icon-thumb_up
        color #00A0DC
    &>ul>li+li
      border-top 1px solid #F9F9F9
</style>
