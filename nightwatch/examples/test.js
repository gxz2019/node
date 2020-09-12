module.exports = {
  'Basic e2e Test' (browser) {
      browser
          .url('http://www.baidu.com/') // 打开google页面
          .waitForElementVisible('body') // 确定能看到body元素
          .setValue('#kw', 'nightWatch') //在搜索框输入nightWatch
          .click('#su') //点击搜索
          .pause(1000) //等待一秒钟
          .assert.containsText('#wrapper', 'nightwatch') //查询结果中是否包括nightWatch
          .end()
  }
}