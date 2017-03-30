const axios = require('axios')

const host = 'http://dev.izhuan365.com:20360'

let getToken = function () {
  axios.get(host + '/openapi/token/getAccessToken', {
    headers: {
      openId: 'CBT34K5J549J34K93J439',
      key: '8SS834J340C84J4392383J'
    }
  }).then(res => {
    console.log(res.data)
  })
}

let setStatus = function () {
  axios.post(host + '/openapi/car/status', {
    data: 'traceId=1635&aduitTime=2017-03-30 12:11:33&aduitState=n&remark=测试接口',
    headers: {
      openId: 'CBT34K5J549J34K93J439',
      token: '79a9230e16ac5cd94b38fb32a018a60b',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }).then(res => {
    console.log(res.data)
  })
}

let token = '79a9230e16ac5cd94b38fb32a018a60b'


setStatus()
