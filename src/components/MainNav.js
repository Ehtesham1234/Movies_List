import * as React from 'react';
import {useEffect} from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";



export default function SimpleBottomNavigation() {

   const [value, setValue] = React.useState(0);
   let navigate = useNavigate();

   const navigationStyles={
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#22252b",
    zIndex: 100,

    }

    useEffect(() => {
      if (value === 0) {
          navigate("/");
      } else if (value === 1) {
          navigate("/movies")
      } else if (value === 2) {
          navigate("/series");
      } else if (value === 3) {
          navigate("/search");
      }
    }, [value, navigate]);
  return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        sx={navigationStyles}
      >
        <BottomNavigationAction 
        style={{color:"white"}} 
        label="Trending" 
        icon={<WhatshotIcon />} />

        <BottomNavigationAction 
        style={{color:"white"}} 
        label="Movies" 
        icon={<MovieIcon />} />

        <BottomNavigationAction 
        style={{color:"white"}} 
        label="TV Series" 
        icon={<TvIcon />} />

        <BottomNavigationAction 
        style={{color:"white"}} 
        label="Search" 
        icon={<SearchIcon />} />
      </BottomNavigation>
  );
}