const fetch = require('node-fetch')
const Constants = require('../../util/Constants')

/**
 * Get a genre by ID
 * @param {id} The genre ID
 * @param {type} If null, returns genre info, but you can put some parameters to return other things
 * TYPE PARAMS:
 * "artists": Returns all artists for a genre
 * "podcasts": Returns all podcasts for a genre
 * "radios": Returns all radios for a genre
 */
function getGenre(id, type) {
  if (!id) throw new Error(`Missing param "id"`)
  if (!type) type = ''

  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Get.Genre}/${id}/${type.toLowerCase()}`, {
      method: 'GET'
    })
      .then(result => result.json())
      .then(result => {
        if (result.error) {
          throw new Error(`The type can only be: "artists", "podcasts" or "radios"`)
        }
        return resolve(result)
      })
  })

  return promise
}

module.exports = {
  getGenre
}