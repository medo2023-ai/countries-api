import Header from "./header";
import Countries from "./countries";
import { Outlet } from "react-router-dom";
export default function Mainlayout(){
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}