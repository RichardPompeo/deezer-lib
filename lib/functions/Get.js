const fetch = require('node-fetch')
const Constants = require('../util/Constants')

/**
 * Get a user by ID
 * @param {id} The user ID
 * @param {type} If null, returns user info, but you can put some parameters to return other things
 * TYPE PARAMS:
 * "tracks": Return a list of user's favorite tracks. Represented by an array of Track object
 * "albums": Return a list of user's favorite albums. Represented by an array of Album object
 * "artists": Return a list of user's favorite artists. Represented by an array of Artist object
 * "charts": Use charts/albums, charts/playlists or charts/tracks.
 * "flow": Returns a list of user's flow tracks, represented by an array of Track object.
 * "followers": Return a list of user's Friends, represented by an array of User object
 * "playlists": Return a list of user's public Playlist, represented by an array of Playlist object. Permission is needed to return private playlists
 * "podcasts": Return a list of user's favorite podcasts. Represented by an array of Podcast object
 * "radios": Return a list of user's favorite Radios, represented by an array of Radio object.
 */
function getUser(id, type) {
  if (!id) throw new Error(`Missing param "id"`)
  if (typeof id !== 'number') throw new Error(`The param "id" must be a number`)
  if (!type) type = ''

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

/**
 * Get a track by ID
 * @param {id} The track ID
 */
function getTrack(id) {
  if (!id) throw new Error(`Missing param "id"`)
  if (typeof id !== 'number') throw new Error(`The param "id" must be a number`)

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

/**
 * Get a radio by ID
 * @param {id} The radio ID
 * @param {type} If null, returns radio info, if "tracks", get first 40 tracks in the radio
 */
function getRadio(id, type) {
  if (!id) throw new Error(`Missing param "id"`)
  if (typeof id !== 'number') throw new Error(`The param "id" must be a number`)
  if (!type) type = ''

  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Get.Radio}/${id}/${type.toLowerCase()}`, {
      method: 'GET'
    })
      .then(result => result.json())
      .then(result => {
        if (result.error) {
          throw new Error(`The type can only be: "tracks"`);
        }
        return resolve(result)
      })
  })

  return promise
}

// Returns a list of radio splitted by genre
function getRadioGenres() { 
  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Get.Radio}/${Constants.TYPES.Genres}`, {
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

// Return the top radios (default to 25 radios)
function getRadioTops() {
  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Get.Radio}/${Constants.TYPES.Top}`, {
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

// Returns a list of personal radio splitted by genre (as MIX in website)
function getRadioLists() {
  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Get.Radio}/${Constants.TYPES.Lists}`, {
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
  getUser,
  getTrack,
  getRadio,
  getRadioGenres,
  getRadioTops,
  getRadioLists
}