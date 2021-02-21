const fetch = require('node-fetch')
const Constants = require('../util/Constants')

function getUser(id, type) {
  if (!id) throw new Error(`Missing param "id"`)
  if (typeof id !== 'number') throw new Error(`The param "id" must be a number`)
  if (!type) type = ' '
  if (typeof type !== 'string') throw new Error(`The param "type" must be a string`)

  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Get.User}/${id}/${type.toLowerCase()}`, {
      method: 'GET'
    })
      .then(result => result.json())
      .then(result => {
        if (result.error) {
          throw new Error(`The types can only be: "tracks", "albums", "artists", "charts", "flow", "followers", "playlists", "podcasts" or "radios"`);
        }
        return resolve(result)
      })
  })

  return promise
}

module.exports = {
  getUser
}