function request(url, data = false, method = 'GET') {
  return new Promise(async (resolve, reject) => {
    const options = {
      method
    }
    if (data && method === 'POST') {
      options.body = JSON.stringify(data)
    }
    fetch(url, options)
    const response = await fetch(url, options)
    const result = await response.json()
    if (response.Ok && response.status === 200) {
      resolve(result)
    } else {
      reject(result)
    }
  })
}

export const post = (url, data) => request(url, data, 'POST')
export const get = (url) => request(url)
