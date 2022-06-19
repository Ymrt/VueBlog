<template>
  <div class="item" @click="toDetail">
    <span>{{ content }}</span>
    <p>
        {{date}} {{time}} {{author}} 阅读:({{reader}}) 评论:({{issue}}) 点赞:({{like}})
    </p>
    <!-- <hr /> -->
  </div>
</template>

<script>

export default {
  props: {
    title: String,
    content: String,
    date:String,
    time:String,
    author:String,
    reader:Number,
    issue:Number,
    like:Number
  },
  data(){
    return{
      id:1
    }
  },
  methods:{
    toDetail:function(){
      this.$router.push(`/detail/${this.id}`);
    }
  }
};
</script>

<style  scoped>
.item {
  text-align: left;
  height: 100px;
  background: rgb(166, 169, 169);
  position: relative;
  border-bottom: 1px solid #f00;
}

p{
    text-align: right;
    margin: 0;
}
/* span{
    text-align: left;
} */
</style>>
