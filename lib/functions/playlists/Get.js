const fetch = require('node-fetch')
const Constants = require('../../util/Constants')

/**
 * Get a playlist by ID
 * @param {id} The playlist ID
 * @param {type} If null, returns playlist info, but you can put some parameters to return other things
 * TYPE PARAMS:
 * "fans": Return a list of playlist's fans. Represented by an array of User objects
 * "tracks": Return a list of playlist's tracks. Represented by an array of Track object
 * "radio": Return a list of playlist's recommendation tracks. Represented by an array of Track object
 */
function getPlaylist(id, type) {
  if (!id) throw new Error(`Missing param "id"`)
  if (!type) type = ''

  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Get.Playlist}/${id}/${type.toLowerCase()}`, {
      method: 'GET'
    })
      .then(result => result.json())
      .then(result => {
        if (result.error) {
          throw new Error(`The type can only be: "fans", "tracks" or "radio"`)
        }
        return resolve(result)
      })
  })

  return promise
}

module.exports = {
  getPlaylist
}