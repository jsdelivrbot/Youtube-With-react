import React from 'react';
import VideoListItem from './vidieo_list_item';
const VideoList = (props) =>{
//  const videos = props.videos;
const videoItems = props.videos.map((video)=>{
  return (
    < VideoListItem
    OnVideoSelect={props.OnVideoSelect}
    key={video.etag}
    video={video}/>);
});

  return(
    <ul className="col-md-4 List-group">
      {videoItems}
    </ul>

  );

};
export default VideoList;
