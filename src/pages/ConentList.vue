<template>
  <div class="main_area">
    <ListItem v-for="item of dataList" :key="item.id" :title="item.title" :content="item.content"
    :author="item.author" :date="item.date" :issue="item.issue" :reader="item.reader" :time="item.time" :like="item.like"
    />
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import bus from '../Store/Bus'
export default {
    components: {
        ListItem
    },
    mounted(){
        bus.emit('setTitle','宇宙很大 生活更大')
    },
    data(){
        return{
            dataList:[
                {
                    id:1,
                    title:"第一篇",
                    content:"很久很久以前，在很远很远的地方",
                    date:"2022-06-12",
                    time:"20:20",
                    author:"Ymrt",
                    reader:10,
                    issue:0,
                    like:5
                },
                {
                    id:2,
                    title:"第二篇",
                    content:"从前有座山，山上有座庙，庙里......",
                    date:"2022-06-12",
                    time:"20:20",
                    author:"Ymrt",
                    reader:10,
                    issue:0,
                    like:5
                },
            ]

        }
    }
}
</script>

<style scoped>
.main_area{
    width:80%;
    background: rgb(219, 215, 215);
}
</style>