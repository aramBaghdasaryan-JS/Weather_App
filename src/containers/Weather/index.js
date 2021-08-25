import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../assets/styles/weather.css';
import CurrentCity from '../../components/CurrentCity';
import WeatherInfo from '../../components/WeatherInfo';
import { setCity, getWeather } from '../../store/weather/action';


const Weather = () => {
    const { city, loader, data } = useSelector(state => state.weather);
    const dispatch = useDispatch();

    console.log(data);
    return (
        <div className="main-container">
            <div className="container top">
                <CurrentCity
                    value={city}
                    sendCity={() => dispatch(getWeather)}
                    onChange={e => dispatch(setCity(e.target.value))}
                />

                <WeatherInfo data={data} loader={loader}/>
            </div>
        </div>
    );
};

export default Weather;