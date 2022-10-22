import React, {useRef, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { useGlobalContext } from '../../context';

const Searchform = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if ((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("Search...");
      setResultTitle("Please Enter Something....");
    } else{
      setSearchTerm(searchText.current.value);
    }
    navigate("/book");
  }

  return (
//     <div class="ui loading search" onSubmit={handleSubmit}>
//   <div class="ui icon input">
//     <input class="prompt" type="text" placeholder='Search...' ref = {searchText} />
//     <button onClick={handleSubmit}><i class="search icon" ></i></button>
    
//   </div>
//   <div class="results"></div>
// </div>
<div class="ui fluid category search" onSubmit={handleSubmit}>
  <div class="ui icon input">
    <input class="prompt" type="text" placeholder="Search..." ref = {searchText} />
    <button class="ui brown basic button" onClick={handleSubmit}> Search </button>
  </div>
  <div class="results"></div>
</div>
  )
}

export default Searchform