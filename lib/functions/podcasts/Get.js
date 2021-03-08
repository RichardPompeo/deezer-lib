const fetch = require('node-fetch')
const Constants = require('../../util/Constants')

/**
 * Get a podcast by ID
 * @param {id} The podcast ID
 * @param {type} If null, returns podcast info, if "episodes", get the podcast episodes
 */
function getPodcast(id, type) {
  if (!id) throw new Error(`Missing param "id"`)
  if (!type) type = ''

  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Get.Podcast}/${id}/${type.toLowerCase()}`, {
      method: 'GET'
    })
      .then(result => result.json())
      .then(result => {
        if (result.error) {
          // throw new Error(`The type can only be: "episodes"`)
          throw new Error('Deezer API not working...')
        }
        return resolve(result)
      })
  })

  return promise
}

// Return random podcasts
function getRandomPodcasts() {
  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Get.Podcast}`, {
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
  getPodcast,
  getRandomPodcasts
}