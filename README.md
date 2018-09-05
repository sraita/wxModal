# wxModal
微信小程序自定义模态框组件

# 组件对外属性

|参数|类型|必填|说明|
---|---|---|---
show         | Boolean  | 是 | 用来控制模态框是否显示
autoclose    | Boolean  | 否 | 点击操作按钮后是否自动关闭模态框， 默认为 `true`
title        | String   | 是 | 提示的标题, 默认为`提示`
showCancel   | Boolean  |	否 | 是否显示取消按钮，默认为 `true`
cancelText   | String   |	否 | 取消按钮的文字，默认为`取消`，最多 4 个字符
cancelColor  | String   | 否 | 取消按钮的文字颜色，默认为 `#000000`
confirmText	 | String   |	否 | 确定按钮的文字，默认为 `确定`，最多 4 个字符
confirmColor | String   |	否 | 确定按钮的文字颜色，默认为 `#3CC51F`
bindconfirm  | Function |	否 | 点击`confirm` 后执行的函数
bindcancel   | Function |	否 | 点击`cancel` 后执行的函数


# 使用方法

1. 拷贝 `components > modal` 文件夹 到小程序的 `components` 目录下

2. 定义相关数据
```javascript
Page({
  /**
   * 页面的初始数据
   */
  data: {
    modalConf: {
      show: false, // 初始值应该为 false
      autoclose: false,
      title: '标题',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F'
    }
  },
  /**
   * 点击模态框 `confirm` 后执行的函数
   */
  onModalConfirm: function () {
    
  },
  /**
   * 点击模态框 `cancel` 后执行的函数
   */
  onModalCancel: function () {
    
  },

  showModal: function (event) {
    var conf = this.data.modalConf;
    conf.show = !conf.show;
    this.setData({
      modalConf: conf
    });
  }
  ...
})
```
3. 在需要使用该组件的地方添加以下内容
```html
<modal 
  show="{{modalConf.show}}" 
  autoclose="{{modalConf.autoclose}}"
  title="{{modalConf.title}}" 
  showCancel="{{modalConf.showCancel}}" 
  cancelText="{{modalConf.cancelText}}"
  cancelColor="{{modalConf.cancelText}}"
  confirmText="{{modalConf.cancelText}}" 
  confirmColor="{{modalConf.cancelText}}"
  bindconfirm="{{onModalConfirm}}"
  bindcancel="{{onModalCancel}}"
 >
<!-- 自定义内容区域 -->
<!-- 提示的内容, 可传入自定义 HTML -->
<!-- /end -->
 </modal>

```

4. 添加一个 `Button` 来控制 模态框的显示
```
<button bindtap="showModal">显示模态框</button>
```

5. 在对应 `page` 的 `.json`配置文件中添加 
```json
"usingComponents": {
  "modal": "/components/modal"
}
```
例如:
```json
# pages/index.json
{
  "usingComponents": {
    "modal": "/components/modal"
  }
}
```