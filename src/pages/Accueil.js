import React, { useState } from "react";
import './Accueil.css';
import FestivalData from './../festivalData.json';
import FestivalList from "./../components/FestivalList";
import Pagination from "./../components/Pagination";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Select from 'react-select';

export default function Accueil() {
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage, setPostsPerPage] = useState(5);
   const [filteredData, setFilteredData] = useState(FestivalData);
   const [wordEntered, setWordEntered] = useState("");
   const [selectedOption, setSelectedOption] = useState(null);

   const data = [
    {
      value: 1,
      label: "commune"
    },
    {
      value: 2,
      label: "genre"
    }
  ];

  const handleChange = e => {
    setSelectedOption(e.label);
  }

 let searchWord = "";
 const lastPostIndex = currentPage * postsPerPage;
 const firstPostIndex = lastPostIndex - postsPerPage;
 var currentPosts = filteredData.slice(firstPostIndex, lastPostIndex);

 const handleFilter = (event) => {
   searchWord = event.target.value;
    setWordEntered(searchWord);

    if(selectedOption == null ){
      const newFilter = FestivalData.filter((value) => {
        return value.fields.discipline_dominante.toLowerCase().includes(searchWord);
      });
      if (searchWord === "") {
        setFilteredData(FestivalData);
      } else {
        setFilteredData(newFilter);
      }
    }else if (selectedOption === "commune") {
      const newFilter = FestivalData.filter((value) => {
        return value.fields.commune_principale_de_deroulement.toLowerCase().includes(searchWord);
      });
      setFilteredData(newFilter);
    }else if (selectedOption === "genre") {
      const newFilter = FestivalData.filter((value) => {
        return value.fields.discipline_dominante.toLowerCase().includes(searchWord);
      });
      setFilteredData(newFilter);
    }
   
 };

  return (
    <div className='accueilClass'>
      <h1 className="festivalText">Festival    Galery</h1>
      <div className="selectClassContainer">
          <div className="selectClass">
          <Select
            placeholder="Filter Options"
            value={data.find(x => x.label === selectedOption) } // set selected value
            options={data} // set list of the data
            onChange={handleChange} // assign onChange function
          />
          </div>
          <div className="searchInputs">
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
