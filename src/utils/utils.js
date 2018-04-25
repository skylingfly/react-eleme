

/*eslint-disable*/
/***
 * array = [
 *  { a: 1 }
 *  { a: 1 }
 *  { b: 1 }
 * ]
 */
export const unique = (array, key) => {
  const filter =  array.reduce((acc, val) => {
    acc[val[key]] = val;
    return acc
  }, {})
  let result = []
  for (let key in filter) {
    result.push(filter[key])
  }
  return result
}


export const formatPhone = (phone) => {
  return phone.substr(0, 3) + '****' + phone.substr(7, 11)
}

const baseUrl = '//fuss10.elemecdn.com'
export const getImageUrl = (hash) => {
  if (!hash) {
    return null
  }
  const suffixArray = ['png', 'bmp', 'jpg', 'gif', 'jpeg', 'svg']
  const suffix = suffixArray.find(v =>  hash.indexOf(v) !== -1)
  if (!suffix) {
    return null
  } else {
    return `${baseUrl}/${hash.substring(0,1)}/${hash.substring(1,3)}/${hash.substring(3)}.${suffix}`
  }
}
