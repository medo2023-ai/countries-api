import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import Card from './card';
import { useSearchParams } from "react-router-dom";
import { useContext } from 'react';
import { Con } from '../js/context';
export default function Countries() {
    const{darkmode}=useContext(Con);
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const region = searchParams.get("region") || "all";

    useEffect(() => {
        setLoading(true);
        fetch("https://restcountries.com/v3.1/all?fields=name,region,capital,flags,population")
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setCountries(data);

                if (region === "all") {
                    setFilter(data);
                } else {
                    setFilter(data.filter(c => c.region.toLowerCase() === region.toLowerCase()));
                }
            })
            .catch(err => console.error(err));
    }, [region]); // re-run when region changes

    if (loading) {
        return <div className='loading'></div>;
    }

    function handleSearch(e) {
        const value = e.target.value.toLowerCase();
        const filtered = countries.filter((country) =>
            country.name.common.toLowerCase().includes(value)
        );
        setFilter(filtered);
    }

    function handleSelect(e) {
        const value = e.target.value;
        setSearchParams({ region: value }); // update URL
    }

    return (
        <section className="countries">
            <div className="container">
                <div className="flex">
                    <div className="search">
                        <input
                            type="search"
                            placeholder="search for a country"
                            onChange={handleSearch}
                        />
                        <div className='search-icon'>
                           <SearchIcon style={{ color: darkmode && "black"}} />
                        </div>
                    </div>

                    <select onChange={handleSelect} value={region}>
                        <option value="all">All</option>
                        <option value="africa">Africa</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                    </select>
                </div>

                <section className='countries-card'>
                    {filter.length===0?<p>not found</p>:(
                          filter.map((countr) => (
                        <Card key={countr.name.common} country={{ ...countr }} />
                    ))
                    )}
                  
                </section>
            </div>
        </section>
    );
}
