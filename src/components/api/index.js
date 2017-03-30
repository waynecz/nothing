import axios from 'axios'

const post = (url, data, option = {loading: false, errmsg: '请求发生异常'}) => {
  const apiHost = ''
  return axios({
    url: apiHost + url,
    data: data,
    method: 'POST'
  }).catch(e => {
    console.warn(e);
  }).then(res => {
    if (res.data.success) {
      return res.data
    } else {
      console.log(res.data.message || option.errmsg);
      return res.data
    }
  })
};

const APIS = {
  login (data) {
    const url = '/operator/login';
    return post(url, data)
  }
};

export default APIS