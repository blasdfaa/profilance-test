export const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const getRandomId = () => '_' + Math.random().toString(36).substr(2, 9);
