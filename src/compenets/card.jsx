import { useNavigate } from "react-router-dom"
export default function Card({country}){
    const nav=useNavigate()
    function handleClick(){
     nav(`info/${country.name.common}`)
    }
    return(
        <div className="card" onClick={handleClick}>
            <div className="img">
                <img src={country.flags.svg} alt={country.name.common}/>
            </div>
            <div className="common">
                <h2>{country.name.common}</h2>
            </div>
                <div className="population">
                    <p>population:{country.population}</p>
                </div>
                <div className="region">
                    <p>region:{country.region}</p>
                </div>
                <div className="capital">
                    <p>captial:{country.capital[0]}</p>
                </div>
        </div>
    )
}