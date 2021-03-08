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
const Genre = require('./functions/genre')

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
    searchPlaylists: Playlists.Search.searchPlaylists,
    getPlaylist: Playlists.Get.getPlaylist
  },
  podcasts: {
    searchPodcasts: Podcasts.Search.searchPodcasts,
    getPodcast: Podcasts.Get.getPodcast, // Not working, because the Deezer API is in error
    getRandomPodcasts: Podcasts.Get.getRandomPodcasts
  },
  artists: {
    searchArtists: Artists.Search.searchArtists
  },
  genre: {
    getGenre: Genre.Get.getGenre
  }
}