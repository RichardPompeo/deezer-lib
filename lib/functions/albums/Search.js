const fetch = require('node-fetch')
const Constants = require('../../util/Constants')

/**
 * Search for albums 
 * @param {query} Is what will be sought in the API
 * @param {limit} Is the result limit
 */
function searchAlbums(query, limit) {
  if (!query) throw new Error(`Missing param: "query"`)
  if (!limit) limit = 1;

  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Search}/${Constants.TYPES.Album}?q=${query}&limit=${limit}`, {
      method: 'GET'
    })
      .then(result => result.json())
      .then(result => {
        if (result.error) return reject(result.error)
        return resolve(result)
      })
  })

  return promise
}

module.exports = {
  searchAlbums
}