
import React, { useEffect, useState } from "react";
import useSWR from 'swr'
const fetcher = async url => await fetch(url).then(r => r.json())

export default function Playlist() {
  const key = "AIzaSyCpdrtQ_A8sx5Dvt0JSiLYbTRV01l7GsAU";
  const videoID = "EvsXkwgMFGE";
  const YOUTUBE_PLAYLIST_ITEMS_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoID}&maxResults=3&key=${key}&type=video`;
  const { data, error, mutate } = useSWR(YOUTUBE_PLAYLIST_ITEMS_API, fetcher,{
    revalidateIfStale:false
  })
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
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
              <img width={medium.width} height={medium.height} src={medium.url} alt="" />
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
//   const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/search';
//   const group = props.group;
//   const [links, setLinks]=useState([])
//   useEffect(() => {
//     (
//       async() => {
//         try{
//           const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/search';
//           const videoID = "EvsXkwgMFGE"
//           const response =  await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&relatedToVideoId=${videoID}&maxResults=3&key=AIzaSyDO74XJGLCjsrpVxrpVz1IlFm02m9ipIsE&type=video`);
//           const content = await response.json();
//           const g = content.items
//           setLinks(g)
//         } catch (e){
//           console.log("can't get");
//         }
//       }
//     )();
//   },group);
//   return (
//         <ul>
//         {links.map(({ id, snippet = {} }) => {
//         const { title, thumbnails = {}, resourceId = {} } = snippet;
//         const { medium } = thumbnails;
//         return (
//         <li key={id}>
//         <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
//           <p>
//             <img width={medium.width} height={medium.height} src={medium.url} alt="" />
//           </p>
//           <h3>{ title }</h3>
//         </a>
//       </li>
//     )
//     })}
// </ul>
//   )

// }


//BAD CODE
// const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/search';

// export async function getLinks() {
//   const videoID = "EvsXkwgMFGE"
//   const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&relatedToVideoId=${videoID}&maxResults=3&key=AIzaSyDO74XJGLCjsrpVxrpVz1IlFm02m9ipIsE&type=video`)
//   const data = await res.json();
//   return {
//     data
//   }
// }

// export default function Playlist (){
//     const data = getLinks()
//     const result = Promise.resolve(data)
//     console.log(result);
//     return (
// //         <ul>
// //         {data.items.map(({ id, snippet = {} }) => {
// //         const { title, thumbnails = {}, resourceId = {} } = snippet;
// //         const { medium } = thumbnails;
// //         return (
// //         <li key={id} className={styles.card}>
// //         <a href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}>
// //           <p>
// //             <img width={medium.width} height={medium.height} src={medium.url} alt="" />
// //           </p>
// //           <h3>{ title }</h3>
// //         </a>
// //       </li>
// //     )
// //     })}
// // </ul>
//     <div>hi</div>
//     )
// }