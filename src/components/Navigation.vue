<template>
  <div class="nav">
    <div> </div>
    <div class="title">{{title}}</div>
    <div>
      <!-- <span class="time_span">{{time}}</span>
      <span class="time_span">{{date}}</span> -->
    </div>
  </div>
</template>

<script>
import bus from '../Store/Bus'
export default {
  name: 'NavigationTemplete',
  props: {
    msg: String
  },
  data(){
    return{
      date:null,
      time:null,
      title:'宇宙很大 生活更大'
    }
  },
  methods:{
    UpdateTime(){
      let newdate = new Date()
      this.date = newdate.toLocaleDateString()
      this.time = newdate.toLocaleTimeString()
    }
  },
  mounted(){
    setInterval(this.UpdateTime,1000)
  },
  created(){
    bus.on('setTitle',target=>{
        this.title=target
    })
  },
 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title{
  font-size: 2pc;
}

.time_span{
  display: block;
  text-align: right;
  margin-right: 20px;
}

</style>
