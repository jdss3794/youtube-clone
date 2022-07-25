import React from 'react';
import SideMenu from '../components/SideMenu';
import VideoList from './../components/VideoList';
import { useSelector } from 'react-redux';

const Search = () => {
  const { listLayout } = useSelector((state) => state.video);
  return (
    <>
      <SideMenu />
      <section className='main-content'>
      {listLayout && < VideoList display={listLayout} />}
      </section>
    </>
  );
};

export default Search;
