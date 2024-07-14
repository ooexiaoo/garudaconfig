const CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'USD',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Nashik, Maharashtra, India',
    scale: 'C'
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia'],
      r: ['https://yandex.com/search/?', 'Yandex']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar',
    "1": 'boards',
    "2": 'music',
    "3": 'tech',
    "4": 'CHILL',
  },
  disabled: [],
  openLastVisitedTab: true,
  tabs: [
    {
      name: 'QUICK',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'SnapShot',
        links: [
          {
            url: 'https://secret.kawaiidoro.com',
            name: 'Home',
            icon: 'home',
            icon_color: '#ff4000'
          },
          {
            name: 'Added Notes',
            url: 'https://secret.kawaiidoro.com/000-digital-garden/recently-added-notes/',
            icon: 'leaf',
            icon_color: '#90ee90'
          },
          {
            name: 'Edited Notes',
            url: 'https://secret.kawaiidoro.com/000-digital-garden/recently-edited-notes/',
            icon: 'book',
            icon_color: '#ffa500'
          },
          {
            name: 'Anime 2024',
            url: 'https://secret.kawaiidoro.com/media-db/anime-list-2024/',
            icon: 'brand-funimation',
            icon_color: '#ff0000'
          },
          {
            name: 'Movies 2024',
            url: 'https://secret.kawaiidoro.com/movie-list-2024/',
            icon: 'movie',
            icon_color: '#29a6ec'
          }
        ]
      },
      {
        name: 'YouTube',
        links: [
          {
            name: 'Varun',
            url: 'https://www.youtube.com/@grxaaa',
            icon: 'brand-youtube',
            icon_color: '#cd201f'
          },
          {
            name: 'Access 01',
            url: 'https://www.youtube.com/@ACCESSZERO1',
            icon: 'brand-youtube',
            icon_color: '#cd201f'
          }
        ]
      },
      {
        name: 'Quick Links',
        links: [
          {
            name: 'GitHub',
            url: 'https:github.com/ooexiaoo',
            icon: 'brand-github',
            icon_color: '#000000'
          },
          {
            name: 'X',
            url: 'https://x.com/exiavp',
            icon: 'brand-x',
            icon_color: '#ff0000'
          },
          {
            name: 'Pinterest',
            url: 'https://www.pinterest.com/00EXIA00/',
            icon: 'brand-pinterest',
            icon_color: '#bd081c'
          },
          {
            name: 'WallHaven',
            url: 'https://www.wallhaven.cc',
            icon: 'wallpaper',
            icon_color: 'gray'
          },
          {
            name: 'KawaiiBlog',
            url: 'https://blog.kawaiidoro.com',
            icon: 'article',
            icon_color: '#ea428b'
          }
        ]
      }
      ]
    },
    {
      name: 'music',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'music services',
          links: [
            {
              url: 'https://soundcloud.com/',
              icon: 'brand-soundcloud',
              icon_color: '#c57750'
            },
            {
              url: 'https://youtu.be/',
              icon: 'brand-youtube',
              icon_color: '#996767'
            },
            {
              url: 'https://r-a-d.io/',
              icon: 'radio'
            },
          ]
        },
        {
          name: 'music boards',
          links: [
            {
              name: '/music/',
              url: 'https://lainchan.org/music/',
              icon: 'disc'
            },
            {
              name: '/mu/',
              url: 'https://boards.4channel.org/mu/',
            }
          ]
        }
      ]
    },
    {
      name: 'LINUX',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'Inspirations',
          links: [
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/',
              icon: 'cpu-2',
              icon_color: '#9d5fc7'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#00ffff'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/',
              icon: 'code-circle-2',
              icon_color: '#ffc100'
            }
          ]
        },
        {
          name: 'Quick Links',
          links: [
            {
              name: 'Arch AUR',
              url: 'https://aur.archlinux.org/',
              icon: 'brand-amigo',
              icon_color: '#ed008c'
            },
            {
              name: 'Garuda',
              url: 'https://forum.garudalinux.org/',
              icon: 'device-desktop-analytics',
              icon_color: '#ff7b95'
            }
          ]
        },
        /* {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox'
            },
            {
              name: 'rust docs',
              url: 'https://doc.rust-lang.org/book/',
              icon: 'notebook',
              icon_color: '#977a3a'
            }
          ]
        } */
      ]
    },
    {
      name: 'CHILL',
      background_url: 'src/img/banners/bg-4.gif',
      categories: [{
        name: 'Art',
        links: [
          {
            url: 'https://canva.com/',
            name: 'Canva',
            icon: 'brand-canva',
            icon_color: '#ff0000'
          },
          {
            name: 'Image Converter',
            url: 'https://ezgif.com/jpg-to-webp',
            icon: 'leaf',
            icon_color: '#90ee90'
          },
          {
            name: 'Pixlr',
            url: 'https://pixlr.com/express/',
            icon: 'brand-pixlr',
            icon_color: '#000000'
          },
          {
            name: 'ArtStation',
            url: 'https://www.artstation.com/',
            icon: 'brand-artstation',
            icon_color: '#f5f5f5'
          },
          {
            name: 'Behance',
            url: 'https://www.behance.net',
            icon: 'brand-behance',
            icon_color: '#1769ff'
          }
        ]
      },
      {
        name: 'Shopping',
        links: [
          {
            name: 'Amazon',
            url: 'https://www.amazon.com/',
            icon: 'brand-amazon',
            icon_color: '#ff9900'
          },
          {
            name: 'Flipkart',
            url: 'https://www.flipkart.com/',
            icon: 'brand-flipkart',
            icon_color: '#ff0000'
          },
          {
            name: 'Snapdeal',
            url: 'https://www.snapdeal.com/',
            icon: 'brand-snapdeal',
            icon_color: '#ff0000'
          },
          {
            name: 'OLX',
            url: 'https://www.olx.com/',
            icon: 'brand-olx',
            icon_color: '#ff9900'
          },
          {
            name: 'Ajio',
            url: 'https://www.ajio.com/',
            icon: 'brand-ajio',
            icon_color: '#ff9900'
          }
        ]
      },
      {
        name: 'Chaman',
        links: [
          {
            name: '/g/',
            url: 'https://4chan.org/g/',
          },
          {
            name: '/Δ/',
            url: 'https://archive.arisuchan.jp/%CE%94/catalog.html'
          },
          {
            name: '/λ/',
            url: 'https://www.lainchan.org/%CE%BB/catalog.html'
          },
          {
            name: '/sec/',
            url: 'https://www.lainchan.org/sec/catalog.html'
          },
          {
            name: '/prog/',
            url: 'https://boards.420chan.org/prog/',
            icon: 'code'
          }
        ]
      }
      ]
    }]
});
