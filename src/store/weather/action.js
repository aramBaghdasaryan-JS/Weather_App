import { CURRENT_CITY, GET_CITY_WEATHER, GET_LOADER } from './types';
import { config } from '../../config';

export const setCity = payload => ({
    type: CURRENT_CITY,
    payload
});

export const getWeather = async (dispatch, getState) => {
    const { city } = getState().weather;
    if (!city) return false;

    dispatch({ type: GET_LOADER, payload: true });
    await fetch(config.API_URI + city)
        .then((resp) => resp.json())
        .then(payload => {
            setTimeout(() => {
                dispatch({ type: GET_CITY_WEATHER, payload });
            }, 1000);
        });
};