export function formatDate(date, fmt) {
  // 匹配yyyy，替换成年
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
}

export function saveToLocal(id, key, value) {
  let data = window.localStorage.m_data
  if (!data) {
    data = {}
    data[id] = {}
  } else {
    data = JSON.parse(data)
    if (!data[id]) {
      data[id] = {}
    }
  }
  data[id][key] = value

  window.localStorage.m_data = JSON.stringify(data)
}

export function loadFromLocal(id, key, def) {
  let data = window.localStorage.m_data

  if (!data) {
    return def
  }
  let obj = JSON.parse(data)[id]
  if (!obj) {
    return def
  }

  return obj[key] || def
}

function padLeftZero(str) {
  // return ('00' + str).substr(str.length);
  return str.padStart(2,'0')
}
