import React, { useRef, useEffect } from 'react';
import './index.css';
import { useDispatch } from 'react-redux';
import {
  getVideoList,
  videoListLayout,
} from './../../../store/video/videoSlice';
import { useNavigate } from 'react-router-dom'; //검색창에서 엔터 쳤을때 메인페이지로
import { searchUrl } from '../../../lib/api';

const SearchForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const navigate = useNavigate(); //검색창에서 엔터 쳤을때 메인페이지로
  const onSearch = (input) => {
    const url = searchUrl(input);
    dispatch(getVideoList(url));
    dispatch(videoListLayout('list'));
    navigate('/'); //검색창에서 엔터 쳤을때 메인페이지로
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const input = inputRef.current.value; /* search 변수로 전송 */
    input && onSearch(input);
    inputRef.current.value = '';
  };

  return (
    <form className='search' onSubmit={onSubmit}>
      <input
        placeholder='검색'
        type='text'
        className='searchInput'
        ref={inputRef}
      />

      <button className='searchBtn'>
        <img
          src='/images/search.png'
          alt='search icon'
          className='searchIcon'
        />
      </button>
    </form>
  );
};

export default SearchForm;
