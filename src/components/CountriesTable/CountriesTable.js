import styles from "./CountriesTable.module.css";
import {useState} from "react";
import Link from 'next/link';


const orderBy = (countries, value,  direction) => {
    if (direction === "asc") {
    return [...countries].sort((a, b) => (a[value] > b[value] ? 1 : -1));
}

if (direction === "desc") {

    return [...countries].sort((a, b) => (a[value] > b[value] ? -1 : 1));
}

return countries;

};


const CountriesTable = ({countries}) => {

const [direction, setDirection] = useState();
const [value, setValue] = useState();


    const orderedCountries = orderBy(countries,value, direction) ;
    const switchDirection = () => {
    if (!direction) {
        setDirection("desc");
    } else if (direction === "desc") {
        setDirection ("asc");

    } else {
        setDirection (null);
    }

    }

    const setValueDirection  = (value) => {
        switchDirection();
        setValue(value);
    }

    return (
    <div>
    <div className={styles.row}>

    <button className={styles.heading_population} 
    onClick={() => setValueDirection("name")}    >
    <div>Name</div>
</button>

<button className={styles.heading_population} 
onClick={() => setValueDirection("population")}    >
    <div>Population</div>


</button>

    </div>
    
{orderedCountries.map((country) => (


<Link href = {`/country/${country.alpha3Code}`}>
<div className={styles.row}>
<div className={styles.name}>{country.name}</div>
<div className={styles.population}>{country.population}</div>


</div>

</Link>

))}
</div> 
)
};
export default CountriesTable;