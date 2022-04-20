import React, { useEffect, useState } from "react";
import useSWR from 'swr'
const fetcher = async url => await fetch(url).then(r => r.json())

export default function Playlist() {
  const key = "AIzaSyCpdrtQ_A8sx5Dvt0JSiLYbTRV01l7GsAU";
  const videoID = "EvsXkwgMFGE";
  const YOUTUBE_PLAYLIST_ITEMS_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoID}&maxResults=3&key=${key}&type=video`;
  // const { data, error, mutate } = useSWR(YOUTUBE_PLAYLIST_ITEMS_API, fetcher,{
  //   revalidateIfStale:false
  // })
  const data = {
  "kind": "youtube#searchListResponse",
  "etag": "-v3hINXrKohhG7o57XhP4tbKxIo",
  "nextPageToken": "CAMQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 127,
    "resultsPerPage": 3
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "z20i1SrsKFNqMFddVCESwdqYNzg",
      "id": {
        "kind": "youtube#video",
        "videoId": "WPni755-Krg"
      },
      "snippet": {
        "publishedAt": "2014-06-26T06:07:49Z",
        "channelId": "UCwobzUc3z-0PrFpoRxNszXQ",
        "title": "Study Music Alpha Waves: Relaxing Studying Music, Brain Power, Focus Concentration Music, ☯161",
        "description": "Study Music Alpha Waves: Relaxing Studying Music, Brain Power, Focus Concentration Music, ☯161 – YellowBrickCinema’s Study Music & Concentration Music is ideal background music to help you to study, concentrate, focus and work more effectively. This Study and Focus Music is ideal instrumental music to help you study, focus and relax before that big test or exam. Our Studying Music for concentration uses alpha waves and binaural beats to boost concentration and brain power, and is the ideal relaxing music for stress relief. Our soothing music for studying can help you study for exams and focus at work. We also have Classical Music for studying and concentration which can be used as background music, music for relaxation and meditation music.\n\nYellowBrickCinema composes Sleep Music, Study Music and Focus Music, Relaxing Music, Meditation Music (including Tibetan Music and Shamanic Music), Healing Music, Reiki Music, Zen Music, Spa Music and Massage Music, Instrumental Music (including Piano Music, Guitar Music and Flute Music) and Yoga Music. We also produce music videos with Classical Music from composers such as Mozart, Beethoven and Bach.\n\nOur music is popular for the following:\n\n► Sleep Music:\n\nYellowBrickCinema’s Sleep Music is the perfect relaxing music to help you go to relax, go to sleep, and enjoy deep sleep. Our music for sleeping is the best music for stress relief, to reduce insomnia, and encourage dreaming. Our calm music for sleeping uses delta waves and soft instrumental music to help you achieve deep relaxation, and fall asleep. Our relaxing sleep music can be used as background music, meditation music, relaxation music, peaceful music and sleep music. Let the soothing and calming sounds help you enjoy relaxing deep sleep.\n\nOur instrumental music is specially designed to encourage and enhance relaxation, meditation, brain function and concentration, spa and massage therapy, and healing music therapy. In addition, we use binaural beats (Delta Waves, Alpha Waves and Theta Waves) to naturally encourage a state of relaxation which is perfect for concentration, meditation or deep sleep. Our long music playlists are perfect for your daily meditation and relaxation. Our music videos use light, beautiful, calming sounds (some with nature sounds) that leave you feeling refreshed. \n\n►Meditation Music:\n\nOur relaxing Meditation Music is perfect for Deepak Chopra meditations, Buddhist meditation, Zen meditation, Mindfulness meditation and Eckhart Tolle meditation. This music is influenced by Japanese meditation music, Indian meditation music, Tibetan music and Shamanic music. Some benefits include cleansing the Chakra, opening the Third Eye and increasing Transcendental meditation skills. The work of Byron Katie, Sedona Method, Silva Method and the Secret highlights the fact that healing can occur through using the mind and being in the “now”. Healing Meditation can be practised using this music for best results.\n\n► Instrumental Music:\n\nYellowBrickCinema’s Instrumental Music includes guitar music, piano music and flute music. Our instrumental music can be used for relaxation, study, meditation and stress relief. \n\n► Classical Music:\n\nYellow Brick Cinema’s Classical Music is ideal for studying, reading, sleeping (for adults and babies) and general relaxation. We’ve compiled only the best quality music from some of the world’s most renowned composers such as Mozart, Beethoven, Vivaldi, Bach, Debussy, Brahms, Handel, Chopin, Schubert, Haydn, Dvorak, Schumann, Tchaikovsky and many more. Enjoy Yellow Brick Cinema’s Classical Music whilst relaxing, studying, working, reading, or falling asleep.\n\n► Spa and Massage Music:\n\nOur light spa music is useful after a long day of work to unwind and relax. The spa music, nature sounds, rain sounds, and easy listening instruments used in these tracks encourage ultimate relaxation. YellowBrickCinema’s music is great for massage therapy, and our music will help you relax your mind and body.\n\n►Reiki & Zen Music:\n\nOur Reiki Music and Zen Music is ideal for Reiki healing sessions, and encouraging a state of Zen. Let the calming, subtle sounds take you to a higher state of consciousness, and allow you to give and receive powerful Reiki vibrations.\n\n►Yoga Music:\n\nOur calming music is useful for yoga for beginners, yoga exercises, yoga chants influenced by Indian songs, African music, and is soothing music which can enable you to go into a yoga trance. If you are familiar with the work of Yogscast, Hare Krishna, Michael Franti, and Keshna be sure to use this. \n\n#studymusic\n#study\n#studyingmusic\n#concentrationmusic\n#instrumentalmusic",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/WPni755-Krg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/WPni755-Krg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/WPni755-Krg/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/WPni755-Krg/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/WPni755-Krg/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Yellow Brick Cinema - Relaxing Music",
        "liveBroadcastContent": "none",
        "publishTime": "2014-06-26T06:07:49Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "NxVwHEQrz_kXtMgUDSuZDXw7V_U",
      "id": {
        "kind": "youtube#video",
        "videoId": "vwIUJbIU57s"
      },
      "snippet": {
        "publishedAt": "2016-01-10T09:19:43Z",
        "channelId": "UC68KnvCZ-nJzmmuSu_tKASA",
        "title": "Mozart Relaxing Concerto for Studying 🎵 Classical Study Music for Reading & Concentration",
        "description": "This classical music video features one of the most famous concertos by Mozart. It's useful listening to it while studying for improving concentration. Most relaxing and upbeat instrumental flute, harp and orchestra movement for reading peacefully. \n\n-------------------\n\nWelcome to Just Instrumental Music! \n\n\n- Follow us on Facebook: https://www.facebook.com/JustInstrumentalMusic/\n\n- Twitter: https://twitter.com/JustInstrument1\n\n- Our Blog: https://justinstrumentalmusicc.blogspot.com\n\nThank you so much for watching this video. I hope you enjoy it and don't forget to Subscribe :)\n\n-------------------\n\nMusic:\n\"Concerto for Flute, Harp, and Orchestra (Mozart) III. Rondeau – Allegro\" by Alexander Murray, flute and Ann Yeung, harp, with the Sinfonia da Camera of the University of Illinois: Ian Hobson, music director (ibiblio.org/pandora/vorbis/index) is licensed under a Creative Commons Attribution license (https://creativecommons.org/licenses/by/3.0/)\n\n- Pictures purchased at Shutterstock and used under a Royalty-Free Subscription License Agreement (https://www.shutterstock.com/license) \nSource: https://www.shutterstock.com \nUser ID: 166132752\nOrder ID: SSTK-0C4T1-7A22\n\n#classicalmusic #musicforstudying #studymusic",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/vwIUJbIU57s/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/vwIUJbIU57s/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/vwIUJbIU57s/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/vwIUJbIU57s/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/vwIUJbIU57s/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Just Instrumental Music",
        "liveBroadcastContent": "none",
        "publishTime": "2016-01-10T09:19:43Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "PQFSRC6Ci-1GRKMyrkpGjszcg3k",
      "id": {
        "kind": "youtube#video",
        "videoId": "lTRiuFIWV54"
      },
      "snippet": {
        "publishedAt": "2019-12-06T14:38:15Z",
        "channelId": "UCSJ4gkVC6NrvII8umztf0Ow",
        "title": "1 A.M Study Session 📚 - [lofi hip hop/chill beats]",
        "description": "🎭 | Create your lofi avatar now\n→  https://bit.ly/lofigirl-generator\n\n🎼 | Listen on Spotify, Apple music and more\n→  https://fanlink.to/lofigirl-music\n\n🌎 | Lofi Girl on all social media\n→  https://fanlink.to/lofigirl-social\n\n👕 | Lofi Girl merch\n→  https://bit.ly/Iofigirl-shop\n\n💬 | Join the Lofi Girl community\n→   https://bit.ly/lofigirl-discord\n→   https://bit.ly/lofigirl-reddit\n\n🎨 Artwork by Margaux Peltat\n→ https://www.instagram.com/gomar_doodles/\n→ https://www.patreon.com/margauxpeltat\n\n🎵 Tracklist \n[00:00] Intro\n[00:15] WYS - Snowman\n[03:25] Fatb - Cotton Cloud\n[05:28] rook1e x tender spring - the places we used to walk\n[07:44] imagiro - wool gloves\n[10:28] Glimlip x Yasper - I'm sorry\n[12:43] mell-ø - Nova\n[14:24] goosetaf x the fields tape x francis - carried away\n[16:20] j'san x epektase - snow & sand\n[19:02] HM Surf - Single Phial\n[20:46] cocabona x Glimlip - Drops\n[22:43] Aso - espresso\n[25:10] Ambulo x mell-ø - Luminescence\n[26:50] DLJ x BIDØ - Explorers\n[28:48] Sarcastic Sounds - Wish You Were Mine\n[30:51] BluntOne - Reflections\n[32:48] Purrple Cat - Alone Time\n[36:08] Kupla - Owls of the Night\n[38:28] dryhope - Steps\n[40:54] ENRA - amber\n[42:20] Psalm Trees - fever\n[44:51] H.1 - Circle\n[46:41] Pandrezz - Cuddlin\n[49:32] Jordy Chandra - Late Night Call\n[51:44] less.people - Gyoza\n[53:42] G Mills - Keyframe\n[56:32] mvdb - breeze\n[58:06] Mondo Loops - Lunar Drive\n\n🎶 Support the beatmakers \nWYS → https://open.spotify.com/artist/2CiO7xWdwPMDlVwlt9qa1f\nFatb → https://open.spotify.com/artist/39c9r5tc96HMSEX9BbxE4T\nrook1e → https://open.spotify.com/artist/5NlA3ayVBDY3uDCCEZ1dID\ntender spring → https://open.spotify.com/artist/0WCCipy2qiobvuygnTMdkC\nimagiro → https://open.spotify.com/artist/2O8Fgh14LT9QBGfFM5q5Rb\nGlimlip → https://open.spotify.com/artist/5wEF5my54dE5vMMmSUz2q3\nYasper → https://open.spotify.com/artist/1axdL80XjVHdInGsJbURyt\nmell-ø → https://open.spotify.com/artist/6bA2OonnJsG1tN9yClu2aC\ngoosetaf → https://open.spotify.com/artist/46NCqFl8vhQZD77y7XkvJs\nthe fields tape → https://open.spotify.com/artist/6rRqxCKHpl9C5Imf2uinft\nfrancis → https://open.spotify.com/artist/042u9YTOPOZwaCFWQs2mHp\nj'san → https://open.spotify.com/artist/5iMUho98faEp2w6j5p44PH\nepektase → https://open.spotify.com/artist/31jYTsfmnHqcK7ahdqlqmo\nHM Surf → https://open.spotify.com/artist/6TeBxtluBMQixZcKkJ3ZrB\ncocabona → https://open.spotify.com/artist/5V8HGb7Pt982HEbpmglIYT\nAso → https://open.spotify.com/artist/45Ui3GdcxzbdJhhTtZLXO8\nAmbulo → https://open.spotify.com/artist/6sPQwc6lix6K1Gv64v91Ml\nDLJ → https://open.spotify.com/artist/3chQixmxhv9UmwQc8aBApA\nBIDØ → https://open.spotify.com/artist/7HSBpX7fVOinHb9CNcL6Qe\nSarcastic Sounds → https://open.spotify.com/artist/1bq8rqNnfrojn0OSAfeNXJ\nBluntOne → https://open.spotify.com/artist/225l1KEprObX8xgl8xo2Gc\nPurrple Cat → https://open.spotify.com/artist/73aKnLT4O8G2pBEfdlQzrE\nKupla → https://open.spotify.com/artist/7daSp9zXk1dmqNxwKFkL35\ndryhope → https://open.spotify.com/artist/50Ej4gF8iYESted3e4JZ4t\nENRA → https://open.spotify.com/artist/1jDbZQQs4VNtiC4AerpIg4\nPsalm Trees → https://open.spotify.com/artist/5pmXkV6A8yQdoa64xzvZ0S\nH.1 → https://open.spotify.com/artist/3azKf6nXrUCI1RLZkX4Aj6\nPandrezz → https://open.spotify.com/artist/65ZGdYSRT3Rmv6P7DN4XCC\nJordy Chandra  → https://open.spotify.com/artist/28VbaiiRmV4vk9O5ykVvCh\nless.people → https://open.spotify.com/artist/0QmdasntOdQpEwRd40wyp3\nG Mills → https://open.spotify.com/artist/0djvqMepj2XkHfvWTqkH1N\nmvdb → https://open.spotify.com/artist/0hleYpwrJSPEh2pCRTU0AY\nMondo Loops → https://open.spotify.com/artist/1XFN3VcuKr4tsTtQlRiTgK\n\n✔️ | This music is free to use in your livestreams & videos\n→  https://bit.ly/lofigirl-usethemusic\n\n📝 | Submit your music / art\n→ https://bit.ly/lofi-submission\n_____________________________________________\n\n✔️ | This music is free to use for your videos/livestreams\n→  https://bit.ly/lofigirl-usethemusic",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/lTRiuFIWV54/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/lTRiuFIWV54/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/lTRiuFIWV54/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/lTRiuFIWV54/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/lTRiuFIWV54/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Lofi Girl",
        "liveBroadcastContent": "none",
        "publishTime": "2019-12-06T14:38:15Z"
      }
    }
  ]
  }
  const error = ""
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log(data)
  if (data.items === "undefined") return <div>loading...</div>
  return (
    <>
    {
      <ul>
    {data.items.map(({ id, snippet = {} }) => {
      const { title, thumbnails = {}, resourceId = {} } = snippet;
      const { medium } = thumbnails;
      return (

        <li key={id}>
          <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
            <p>
              {medium!==undefined && <img width={medium.width} height={medium.height} src={medium.url} alt="" />}
              
            </p>
            <h3>{ title }</h3>
          </a>
        </li>
      )
    })}
  </ul>
    }
    </>
    
  )
}

{/* <ul>
    {data.items.map(({ id, snippet = {} }) => {
      const { title, thumbnails = {}, resourceId = {} } = snippet;
      const { medium } = thumbnails;
      return (
        <li key={id} className={styles.card}>
          <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
            <p>
              <img width={medium.width} height={medium.height} src={medium.url} alt="" />
            </p>
            <h3>{ title }</h3>
          </a>
        </li>
      )
    })}
  </ul> */}

// export default function Playlist(props){
//   const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/search';
//   const group = props.group;
//   const [links, setLinks]=useState([])
//   useEffect(() => {
//     (
//       async() => {
//         try{
//           const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/search';
//           const videoID = "EvsXkwgMFGE"
//           const response =  await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&relatedToVideoId=${videoID}&maxResults=3&key=AIzaSyDO74XJGLCjsrpVxrpVz1IlFm02m9ipIsE&type=video`);
//           const content = await response.json();
//           const g = content.items
//           setLinks(g)
//         } catch (e){
//           console.log("can't get");
//         }
//       }
//     )();
//   },group);
//   return (
//         <ul>
//         {links.map(({ id, snippet = {} }) => {
//         const { title, thumbnails = {}, resourceId = {} } = snippet;
//         const { medium } = thumbnails;
//         return (
//         <li key={id}>
//         <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
//           <p>
//             <img width={medium.width} height={medium.height} src={medium.url} alt="" />
//           </p>
//           <h3>{ title }</h3>
//         </a>
//       </li>
//     )
//     })}
// </ul>
//   )

// }


//BAD CODE
// const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/search';

// export async function getLinks() {
//   const videoID = "EvsXkwgMFGE"
//   const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&relatedToVideoId=${videoID}&maxResults=3&key=AIzaSyDO74XJGLCjsrpVxrpVz1IlFm02m9ipIsE&type=video`)
//   const data = await res.json();
//   return {
//     data
//   }
// }

// export default function Playlist (){
//     const data = getLinks()
//     const result = Promise.resolve(data)
//     console.log(result);
//     return (
// //         <ul>
// //         {data.items.map(({ id, snippet = {} }) => {
// //         const { title, thumbnails = {}, resourceId = {} } = snippet;
// //         const { medium } = thumbnails;
// //         return (
// //         <li key={id} className={styles.card}>
// //         <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
// //           <p>
// //             <img width={medium.width} height={medium.height} src={medium.url} alt="" />
// //           </p>
// //           <h3>{ title }</h3>
// //         </a>
// //       </li>
// //     )
// //     })}
// // </ul>
//     <div>hi</div>
//     )
// }