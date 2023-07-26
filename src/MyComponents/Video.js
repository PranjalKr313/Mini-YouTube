import React, { useEffect, useState } from 'react'
const API = "AIzaSyBfnb51ms5zRpMceaXBrYpYb7inmHb5drw"
const channelId="UCq-Fj5jknLsUf-MWSy4_brA"

var fetchurl = `https://www.googleapis.com/youtube/v3/search?part=snippet,id&key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=6`
//{data ? data.map(item => <p key={item.id}>{item.name}</p>) : <p>Loading...</p>}
export const Video = () => {
    const [allvideos, setAllvideos] = useState([])
    useEffect(()=>{
        fetch(fetchurl).then((response)=> response.json()).then((resJson)=>{
            const result = resJson.items.map(doc=>({
                ...doc,
                Videolink: "https://www.youtube.com/embed/"+doc.id.videoId
            }));
            setAllvideos(result)
        })
    },[])
    console.log(allvideos)
    return (
        <div className='res'>
            {allvideos.map((item)=>{
                return (
                    <div className='result'>
                        <p>{item.snippet.title}</p>
                        <iframe width="460" height="248" src={item.Videolink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                )
            })}
        </div>

    )
}