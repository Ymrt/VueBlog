<template>
  <div>
    <article>
    <h1></h1>
    <div>{{content}}</div>
    </article>
  </div>
</template>

<script>
import bus from '../Store/Bus'

export default {
    data(){
        return{
          title:"标题",
          content:null,
        }
    },
    mounted(){
      let path = this.$route.params.id
      console.log(path)
      this.axios.get(`https://localhost:7060/api/SuperHero/${path}`
      ).then((res)=>{
        this.title=res.data.firstName
        bus.emit('setTitle',this.title)
        console.log(res)
      })
    }
}
</script>

<style>

</style>