import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Con } from "../js/context";
export default function Info() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const{darkmode}=useContext(Con);

  useEffect(() => {
    setLoading(true);
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]); // API returns an array
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [name]);

  if (loading) {
    return <div className="loading"></div>;
  }


  return (
    <section className="info">
        
      <div className="container">
         <Link to="/" style={{color:darkmode?"white":"black"}}> Back</Link>
        <div className="card">
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
        </div>
      
    </section>
  );
}
