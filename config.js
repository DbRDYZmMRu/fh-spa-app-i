import { reactive } from "./lib/petite-vue.js";

// Config Data to set the app's data and methods
const config = reactive({
  BASE_URL: '/',
  routeView: '',
  route: "home",
  routeView: "null",
  cssFiles: [],
  jsFiles: [],
  pageComponents: [],
  renderCount: 0,
  IPAccess: false,
  workPlan: "is to get more modules",
  initialCountNo: 10,
  someValue: 'initial value',
  doNothing() {
    console.log("clixked");
  },
  
  
  // Page Resources like CSS and JS
  resources: {
    index: {
      path: '/home',
      view: {
        primary: '../assets/templates/route/index.js',
      },
      images: {
        albumCover1: 'assets/images/logo.png',
        albumCover2: 'assets/images/albums/colourfullight.jpg',
      },
      media: {
        song1: 'path/to/song-1.mp3',
        song2: 'path/to/song-2.mp3',
      },
      json: {
        albumData: 'path/to/album-data.json',
      }
    },
    publications: {
      path: '/publications',
      view: {
        primary: '../assets/templates/route/publications.js',
      },
      images: {
        albumCover1: 'assets/images/logo.png',
        albumCover2: 'assets/images/albums/colourfullight.jpg',
      },
      media: {
        song1: 'path/to/song-1.mp3',
        song2: 'path/to/song-2.mp3',
      },
      json: {
        albumData: 'path/to/album-data.json',
      }
    },
    musicpool: {
      path: '/musicpool',
      view: {
        primary: '../assets/templates/route/musicpool.js',
      },
      images: {
        ValenceEve: '../../assets/images/albums/ValenceEve.jpg',
        farthermemes: '../../assets/images/albums/farthermemes.png',
        theSessions: '../../assets/images/albums/theSessions.jpg',
        itspop: '../../assets/images/albums/itspop.png',
        Troubadour: '../../assets/images/albums/Troubadour.png',
        Nightswan: '../../assets/images/albums/Nightswan.jpg',
        theLovertap3: '../../assets/images/albums/theLovertap3.jpg',
        lantern: '../../assets/images/albums/lantern.jpg',
        theo: '../../assets/images/albums/theo.jpg',
        jacaranda: '../../assets/images/albums/jacaranda.jpg',
        screentime: '../../assets/images/albums/screentime.jpg',
        frith: '../../assets/images/albums/frith.jpg',
        december13: '../../assets/images/albums/december13.jpg',
        colourfullight: '../../assets/images/albums/colourfullight.jpg',
        hiv: '../../assets/images/albums/hiv.jpg'
      },
      media: {
        song1: 'path/to/song-1.mp3',
        song2: 'path/to/song-2.mp3',
      },
      json: {
        albumData: 'path/to/album-data.json',
      }
    },
    bio: {
      path: '/bio',
      view: {
        primary: '../assets/templates/route/bio.js',
      },
      images: {
        albumCover1: 'assets/images/logo.png',
        albumCover2: 'assets/images/albums/colourfullight.jpg',
      },
      media: {
        song1: 'path/to/song-1.mp3',
        song2: 'path/to/song-2.mp3',
      },
      json: {
        albumData: 'path/to/album-data.json',
      }
    },
    upcoming: {
      path: '/upcoming',
      view: {
        primary: '../assets/templates/route/upcoming.js',
      },
      images: {
        albumCover1: 'assets/images/logo.png',
        albumCover2: 'assets/images/albums/colourfullight.jpg',
      },
      media: {
        song1: 'path/to/song-1.mp3',
        song2: 'path/to/song-2.mp3',
      },
      json: {
        albumData: 'path/to/album-data.json',
      }
    },
    cookies: {
      path: '/cookies',
      view: {
        primary: '../assets/templates/route/cookies.js',
      },
      images: {
        albumCover1: 'assets/images/logo.png',
        albumCover2: 'assets/images/albums/colourfullight.jpg',
      },
      media: {
        song1: 'path/to/song-1.mp3',
        song2: 'path/to/song-2.mp3',
      },
      json: {
        albumData: 'path/to/album-data.json',
      }
    },
    notFound: {
      path: '/notFound',
      view: {
        primary: '../assets/templates/route/notFound.js',
      },
      images: {
        albumCover1: 'assets/images/logo.png',
        albumCover2: 'assets/images/albums/colourfullight.jpg',
      },
      media: {
        song1: 'path/to/song-1.mp3',
        song2: 'path/to/song-2.mp3',
      },
      json: {
        albumData: 'path/to/album-data.json',
      }
    }
  }
});

export default config;