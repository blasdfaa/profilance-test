export const setDataToStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const getDataFromStorage = (key) => {
    const data = localStorage.getItem(key);

    if (data) {
        return JSON.parse(data);
    }

    return null;
};

export const removeDataFromStorage = (key) => {
    localStorage.removeItem(key);
};
