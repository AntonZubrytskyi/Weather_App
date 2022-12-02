import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {InitialState, City} from '../types';
import {getLocalStorage} from "../utils/helpers/getLocalStorage";


const initialState: InitialState = {
    cities: getLocalStorage('cities') || [],
};
const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        storeCity(state, action: PayloadAction<City>) {
            state.cities = [...state.cities, action.payload]
        },
        updateCityWeather(state, action: PayloadAction<City>) {
            const data = action.payload;
            const updatedCity = state.cities.map((city: City) => city.id === data.id ? data : city);
            state.cities = updatedCity;
        },
        deleteCityById(state, action: PayloadAction<number>) {
            state.cities = state.cities.filter(city => city.id !== action.payload);
        },
    }
});

export default weatherSlice.reducer;
export const {
    storeCity,
    updateCityWeather,
    deleteCityById
} = weatherSlice.actions;
