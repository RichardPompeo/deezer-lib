const fetch = require('node-fetch')
const Constants = require('../util/Constants')

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