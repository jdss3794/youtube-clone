import React from 'react';
import VideoView from './../components/videoView';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import VideoItem from './../components/VideoItem/index';

const Watch = () => {
  const [query, setQuery] = useSearchParams();
  const id = query.get('id');
  const channelId = query.get('channelId');
  const { data } = useSelector((state) => state.video);
  const lte10VideoData = data.filter((item, idx) => idx < 10);
  return (
    <section className='list content'>
      <VideoView id={id} channelId={channelId} />
      <ul className='watchList VideoRowList'>
        {lte10VideoData.map((item, idx) => (
          <VideoItem
            key={item.snippet.thumbnails.default.url}
            item={item.snippet}
            value={item}
          />
        ))}
      </ul>
    </section>
  );
};

export default Watch;
