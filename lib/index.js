const Search = require('./functions/Search')
const Get = require('./functions/Get')

module.exports = {
  users: {
    searchUsers: Search.searchUsers,
    getUser: Get.getUser
  },
  tracks: {
    searchTracks: Search.searchTracks
  },
  radios: {
    searchRadios: Search.searchRadios
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