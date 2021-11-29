
<script>
export default {
  props:{
    title:{
      type:String,
      require:true,
    },
    emphasize:{
      type:String,
      require:true,
    },
    color:{
      type:String,
      default:"blue"
    }
  },
  computed:{
    titleArray:function(){
      if(this.title&&this.emphasize){
        return this.title.split(this.emphasize)
      }
      Math.random
      return ''
    }
  },
  render:function(createElement) {
    console.dir(this.titleArray)
    const that = this
    return createElement(
      'div',
      [
        that.titleArray[0],
        createElement('span',
        {
          style:{color:that.color},
          domProps: {
            innerHTML: that.emphasize
          }
        }
        ),
        that.titleArray[1]
      ]
    )
  }
}
</script>

<style>

</style>