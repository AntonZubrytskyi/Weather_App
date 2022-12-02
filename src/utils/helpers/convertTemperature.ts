export const convertTemperature = (value: number) => {
    return ((value - 32) * 5 / 9).toFixed(1);
};
