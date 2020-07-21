export default {
  /**
   * @param message
   * @param completeCallback  确定后的回调
   * @param title
   * @param buttonLabel
   * @constructor
   */
  $_qxz_cdv_alert(message, completeCallback, title = '提示', buttonLabel = '确定') {
    navigator.notification.alert(message, completeCallback, title, buttonLabel);
  },
  /**
   * 打开一个本机确认对话框，其中包含可自定义的标题和按钮文本。
   * 用户选择的结果将返回到结果回调。
   *
   * @param {String} message          在警报正文中打印的消息
   * @param {Function} resultCallback 用户单击按钮时调用的回调
   * @param {String} title             警报对话框的标题 (default: Confirm)
   * @param {Array} buttonLabels    按钮标签的数组（默认：['OK'，'Cancel']）
   */
  $_qxz_cdv_confirm(message, resultCallback, title = '提示', buttonLabel = ['确定', '取消']) {
    navigator.notification.confirm(message, resultCallback, title, buttonLabel);
  },
  $_qxz_cdv_file() {
    return cordova.file;
  },
  $_qxz_cdv_fileOpen2() {
    return cordova.plugins.fileOpener2;
  },
  // 设置标题
  $_qxz_cdv_navBarPlugin_setTitleText(title = '') {
    cordova.exec(null, null, 'NavBarPlugin', 'setTitleText', [title]);
  },
  $_qxz_show_error_text(text = '数据为空') {
    this.qxzErrorText = text;
    this.qxzIsErrorText = true;
  },
  $_qxz_hidden_error_text(text = '') {
    this.qxzErrorText = text;
    this.qxzIsErrorText = false;
  },
  toast(msg = 'Toast time forever s', time = 1800, mark = false, type = 'loading') {
    return this.$createToast({
      time,
      txt: msg,
      mask: mark,
      type
    });
  },
  ShowLoading(msg = '加载中...', time = 0, mark = true) {
    this.toast(msg, time, mark).show();
  },
  HideLoading(msg = '加载中...', time = 0, mark = true) {
    setTimeout(() => {
      this.toast(msg, time, mark).hide();
    }, 500);
  },
  ShowToast(msg, time, mark) {
    setTimeout(() => {
      this.toast(msg, time, mark, 'txt').show();
    }, 500);
  },
}
