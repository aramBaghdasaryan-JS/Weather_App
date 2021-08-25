import React, { useCallback, Fragment } from 'react';
import '../../assets/styles/weather.css';


const CurrentCity = ({ value, onChange, sendCity }) => {
    const onSubmit = useCallback(e => {
        e.preventDefault();
        sendCity();
    }, [sendCity]);

    return (
        <Fragment>
            <h1>Weather App</h1>
            <form action="#" onSubmit={onSubmit}>
                <input value={value} type="text" onChange={onChange} className="search" placeholder="Search by city name"/>
                <button type="submit" className="btn">Submit</button>
                <p className="error"></p>
            </form>
        </Fragment>
    );
}

export default CurrentCity;