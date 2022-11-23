import React, { useEffect, useState } from "react";
import './Accueil.css';
import FestivalData from './festivalData.json';
import FestivalList from "./components/FestivalList";
import Pagination from "./components/Pagination";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Multiselect from "multiselect-react-dropdown";

function Accueil() {
   const [festivalsData, setFestivalsData] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage, setPostsPerPage] = useState(5);
   const [filteredData, setFilteredData] = useState(FestivalData);
   const [wordEntered, setWordEntered] = useState("");
   const [filterOptions, setFilterOptions] = useState(["ville","genre"]);

  useEffect(() => {  
    const getData = async () => { 
      const response = await fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/');
      const json = await response.json();    
      setFestivalsData(json);
      currentPosts = FestivalData.slice(firstPostIndex, lastPostIndex);  
    }
    getData();
 },[]);

 let searchWord = "";
 const lastPostIndex = currentPage * postsPerPage;
 const firstPostIndex = lastPostIndex - postsPerPage;
 var currentPosts = filteredData.slice(firstPostIndex, lastPostIndex);

 const handleFilter = (event) => {
   searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = FestivalData.filter((value) => {
      return value.fields.discipline_dominante.includes(searchWord);
    });
    if (searchWord === "") {
      setFilteredData(FestivalData);
    } else {
      setFilteredData(newFilter);
    }
 };
 const onRemove = (event) => {

};
  const onSelect = (event) => {

  };

  return (
    <div className='app'>
      <h1 className="festivalText">Festival    Galery</h1>
      <div className="searchInputs">
        <div className="multiselectContainer">
        <Multiselect
          displayValue="key"
          isObject={false}
          onRemove={onRemove}
          onSelect={onSelect}
          options={filterOptions}
          showCheckbox
      />
        </div>
          <input
                className="search-txt"
                type="text"
                placeholder="Type something"
                value={wordEntered}
                onChange={handleFilter}
          />
          <div className="searchIcon">
              <SearchRoundedIcon fontSize="small" />
          </div>
      </div>
      <FestivalList festivalsData={currentPosts} />
      <Pagination
          totalPosts={filteredData.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
      />
</div>
  ); 
}

export default Accueil;
