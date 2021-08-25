import React, { useCallback, Fragment } from 'react';
import '../../assets/styles/weather.css';
import format from 'date-fns/format';
import Loader from "../Loader";

const WeatherInfo = (props) => {
    console.log(props);
        return (
        <section>
            {props.loader ? (
                <Loader/>
            ) : (
                <Fragment>
                    {props.data && (
                        <div className="container">
                            <div className="icon">
                                <img src="" alt="" className="weather-icon"/>
                            </div>
                            <div className="location">
                                <div className="city">{props.data.city}</div>
                                <div className="date">{format(new Date(), 'dd MMM yyyy')}</div>
                            </div>
                            <div className="current">
                                <div className="temp">Temp: {props.data.temperature}</div>
                                <div className="weather">Weather: {props.data.description}</div>
                                <div className="temp-range">Wind speed: {props.data.wind}</div>
                            </div>
                        </div>
                    )}
                </Fragment>
            )}
        </section>
    );
}

export default WeatherInfo;