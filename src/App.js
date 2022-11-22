import React, { useEffect, useState } from "react";
import './App.css';
import FestivalData from './festivalData.json';
import FestivalList from "./components/FestivalList";
import Pagination from "./components/Pagination";
function App() {
   const [festivalsData, setFestivalsData] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage, setPostsPerPage] = useState(8);

/*   useEffect(() => {  
    const getData = async () => { 
      try { 
          const response = await fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/');
          const json = await response.json();    
          setFestivalsData(json);
          currentPosts = festivalsData.slice(firstPostIndex, lastPostIndex);
            } 
      catch (error) 
      { console.error(error); }
    }
    getData();
 },[]);

 const lastPostIndex = currentPage * postsPerPage;
 const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = festivalsData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className='app'>
    <h1>Festival Gallery</h1>
     <FestivalList festivalsData={currentPosts} />
    <Pagination
        totalPosts={festivalsData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
    />
</div>
  ); */


  useEffect(() => {  
    const getData = async () => { 
  
          const response = await fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/');
          const json = await response.json();    
          setFestivalsData(json);
          currentPosts = FestivalData.slice(firstPostIndex, lastPostIndex);  
    
    }
    getData();
 },[]);

 const lastPostIndex = currentPage * postsPerPage;
 const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = FestivalData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className='app'>
    <h1>Festival Gallery</h1>
     <FestivalList festivalsData={currentPosts} />
    <Pagination
        totalPosts={FestivalData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
    />
</div>
  ); 

}

export default App;
