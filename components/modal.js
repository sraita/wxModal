// components/modal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    autoclose: {
      type: Boolean,
      value: true
    },
    title: {
      type: String,
      value: "提示"
    },
    showCancel: {
      type: Boolean,
      value: true
    },
    cancelText: {
      type: String,
      value: "取消"
    },
    cancelColor: {
      type: String,
      value: '#000000'
    },
    confirmText: {
      type: String,
      value: "确定"
    },
    confirmColor: {
      type: String,
      value: "#3CC51F"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 阻止默认mask 滚动穿透
    maskTouchMove: function () {},
    // 点击 mask ， 关闭 modal
    clickMask() {
      console.log(111)
      this.setData({ show: false })
    },
    cancel() {
      this.setData({ show: false })
      this.triggerEvent('cancel')
    },
    confirm() {
      console.log(this);
      if (this.data.autoclose) {
        this.setData({ show: false })
      }
      this.triggerEvent('confirm')
    }
  }
})
