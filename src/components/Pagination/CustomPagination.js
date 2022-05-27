import { createTheme } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import { ThemeProvider } from '@emotion/react';

const darkTheme = createTheme({
    palette:{
          type:"dark",
    }
})

const CustomPagination = ({setPage,numOfPages=10})=>{

    const handlePageChange = (page)=>{
        setPage(page);
        window.scroll(0,0);
    }
    return(
        <div 
            style={{
                width:"100%",
                display:"flex",
                justifyContent:"center",
                marginTop:10,
                marginBottom:20,
            }}
        >
            <ThemeProvider theme={darkTheme}>
            <Pagination 
            color='primary'
            count={numOfPages}
            onChange={(e)=>handlePageChange(e.target.textContent)}
            hideNextButton
            hidePrevButton
             />
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination
