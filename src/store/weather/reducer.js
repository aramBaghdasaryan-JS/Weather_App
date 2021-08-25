import { CURRENT_CITY, GET_LOADER, GET_CITY_WEATHER } from './types';

const initialState = {
    city: '',
    loader: false,
    data: null,
};

export const weatherReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case CURRENT_CITY: {
            return {
                ...state,
                city: payload
            };
        }
        case GET_LOADER: {
            return {
                ...state,
                loader: payload
            };
        }
        case GET_CITY_WEATHER: {
            return {
                ...state,
                loader: false,
                data: { ...payload, city: state.city },
            };
        }
        default: {
            return state;
        }
    }
};
