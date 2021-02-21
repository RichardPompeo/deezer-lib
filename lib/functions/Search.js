const fetch = require('node-fetch')
const Constants = require('../util/Constants')

/**
 * Search for tracks 
 * @param {query} Is what will be sought in the API
 * @param {limit} Is the result limit
 */
function searchTracks(query, limit) {
  if (!query) throw new Error(`Missing param: "query"`)
  if (!limit) limit = 1;

  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Search}/${Constants.TYPES.Track}?q=${query}&limit=${limit}`, {
      method: 'GET',
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
 * Search for artists
 * @param {query} Is what will be sought in the API
 * @param {limit} Is the result limit
 */
function searchArtists(query, limit) {
  if (!query) throw new Error(`Missing param: "query"`)
  if (!limit) limit = 1;

  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Search}/${Constants.TYPES.Artist}?q=${query}&limit=${limit}`, {
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

/**
 * Search for radios
 * @param {query} Is what will be sought in the API
 * @param {limit} Is the result limit
 */
function searchRadios(query, limit) {
  if (!query) throw new Error(`Missing param: "query"`)
  if (!limit) limit = 1;

  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Search}/${Constants.TYPES.Radio}?q=${query}&limit=${limit}`, {
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
 * Search for playlists
 * @param {query} Is what will be sought in the API
 * @param {limit} Is the result limit
 */
function searchPlaylists(query, limit) {
  if (!query) throw new Error(`Missing param: "query"`)
  if (!limit) limit = 1;

  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Search}/${Constants.TYPES.Playlist}?q=${query}&limit=${limit}`, {
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
 * Search for podcasts 
 * @param {query} Is what will be sought in the API
 * @param {limit} Is the result limit
 */
function searchPodcasts(query, limit) {
  if (!query) throw new Error(`Missing param: "query"`)
  if (!limit) limit = 1;

  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Search}/${Constants.TYPES.Podcast}?q=${query}&limit=${limit}`, {
      method: 'GET',
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
 * Search for users
 * @param {query} Is what will be sought in the API
 * @param {limit} Is the result limit
 */
function searchUsers(query, limit) {
  if (!query) throw new Error(`Missing param: "query"`)
  if (!limit) limit = 1;

  var promise = new Promise((resolve, reject) => {
    fetch(`${Constants.ENDPOINTS.Search}/${Constants.TYPES.User}?q=${query}&limit=${limit}`, {
      method: 'GET',
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
  searchAlbums,
  searchArtists,
  searchPlaylists,
  searchRadios,
  searchTracks,
  searchPodcasts,
  searchUsers
}