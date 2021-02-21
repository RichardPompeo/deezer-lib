const fetch = require('node-fetch')
const Constants = require('../../util/Constants')

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
  getRadio,
  getRadioGenres,
  getRadioLists,
  getRadioTops
}