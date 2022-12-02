export type City = {
    base: string;
    clouds: { all: number };
    cod: number;
    coord: { lon: number, lat: number };
    dt: number;
    id: number;
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        grnd_level: number,
        sea_level: number,
        pressure: number,
        humidity: number,
    };
    name: string;
    sys: { country: string, sunrise: number, sunset: number };
    timezone: number;
    visibility: number;
    wind: { speed: number, deg: number, gust: number };
    weather: { id: number, main: string, description: string, icon: string }[];
};

export type InitialState = {
    cities: City[]
};
