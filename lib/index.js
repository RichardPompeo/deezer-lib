/**
 * @author {patek}
 * @copyright 
 */
const Albums = require('./functions/albums')
const Artists = require('./functions/artists')
const Playlists = require('./functions/playlists')
const Podcasts = require('./functions/podcasts')
const Radios = require('./functions/radios')
const Tracks = require('./functions/tracks')
const Users = require('./functions/users')

// Exporting modules, dividing them by categories
module.exports = {
  users: {
    searchUsers: Users.Search.searchUsers,
    getUser: Users.Get.getUser
  },
  tracks: {
    searchTracks: Tracks.Search.searchTracks,
    getTrack: Tracks.Get.getTrack
  },
  radios: {
    searchRadios: Radios.Search.searchRadios,
    getRadio: Radios.Get.getRadio,
    getRadioGenres: Radios.Get.getRadioGenres,
    getRadioTops: Radios.Get.getRadioTops,
    getRadioLists: Radios.Get.getRadioLists
  },
  albums: {
    searchAlbums: Albums.Search.searchAlbums
  },
  playlists: {
    searchPlaylists: Playlists.Search.searchPlaylists
  },
  podcasts: {
    searchPodcasts: Podcasts.Search.searchPodcasts
  },
  artists: {
    searchArtists: Artists.Search.searchArtists
  }
}