import React from 'react'

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/search';

export async function getLinks() {
  const videoID = "EvsXkwgMFGE"
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&relatedToVideoId=${videoID}&maxResults=3&key=AIzaSyDO74XJGLCjsrpVxrpVz1IlFm02m9ipIsE&type=video`)
  const data = await res.json();
  return {
    data
  }
}

export default function Playlist (){
    const data = getLinks()
    const result = Promise.resolve(data)
    console.log(result);
    return (
//         <ul>
//         {data.items.map(({ id, snippet = {} }) => {
//         const { title, thumbnails = {}, resourceId = {} } = snippet;
//         const { medium } = thumbnails;
//         return (
//         <li key={id} className={styles.card}>
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
    <div>hi</div>
    )
}