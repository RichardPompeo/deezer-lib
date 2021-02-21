const Search = require('./functions/Search')
const Get = require('./functions/Get')

// Exporting modules, dividing them by categories
module.exports = {
  users: {
    searchUsers: Search.searchUsers,
    getUser: Get.getUser
  },
  tracks: {
    searchTracks: Search.searchTracks,
    getTrack: Get.getTrack
  },
  radios: {
    searchRadios: Search.searchRadios,
    getRadio: Get.getRadio,
    getRadioGenres: Get.getRadioGenres,
    getRadioTops: Get.getRadioTops,
    getRadioLists: Get.getRadioLists
  },
  albums: {
    searchAlbums: Search.searchAlbums
  },
  playlists: {
    searchPlaylists: Search.searchPlaylists
  },
  podcasts: {
    searchPodcasts: Search.searchPodcasts
  },
  artists: {
    searchArtists: Search.searchArtists
  }
}