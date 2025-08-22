
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useEffect } from "react";
import { useContext } from "react";
import { Con } from '../js/context';
export default function Header(){
    const{darkmode,setDarkmode}=useContext(Con);
        useEffect(() => {
        if (darkmode) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    }, [darkmode]);
    function handleClick(type){
        if(type==="darkmode"){
            setDarkmode(true);
          
        }
        if(type==="lightmode"){
            setDarkmode(false);
        }
    }
    return(
        <>
        <header>
            <div className="container">
                <h1>what is the wrord?</h1>
                {darkmode?
                (
                    <div className="darkmode" onClick={()=>handleClick("lightmode")}>
                        <DarkModeIcon/>
                        
                    </div>
                ):
                (
                    <div className="lightmode" onClick={()=>handleClick("darkmode")}>
                        <LightModeIcon/>
                    </div>
                )
                }
            </div>
        </header>
        </>
    )
}