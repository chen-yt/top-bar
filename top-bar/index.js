let height, scrollTop

Component({

  options: {
    multipleSlots: true
  },
 
  ready () {
    this.createSelectorQuery().select('.top-bar').boundingClientRect(res => {
      if (res) height = res.height
    }).exec()
  },

  data: {
    curView: 'top-bar'
  },

  methods: {
    scroll (e) {
      scrollTop = e.detail.scrollTop
    },

    touchEnd () {
      if (scrollTop > 0 && scrollTop < height / 3) {
        this.setData({
          curView: 'top-bar'
        })
      } else if (scrollTop >= height / 3 && scrollTop < height) {
        this.setData({
          curView: 'page'
        })
      }
    }
  }
})