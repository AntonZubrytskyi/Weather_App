export const getLocalStorage = (key: string) => {
    try {
        const cities = JSON.parse(localStorage.getItem(key) || '');
        if (cities) {
            return cities
        }
        return [];
    } catch (err) {
        console.log('error', err);
    }
};
