const fetch = require('node-fetch')
const Constants = require('../../util/Constants')

/**
 * Get a track by ID
 * @param {id} The track ID
 */
function getTrack(id) {
  if (!id) throw new Error(`Missing param "id"`)

  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Get.Track}/${id}`, {
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
  getTrack
}