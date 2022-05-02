import { useState } from "react";

/* if (!token.toString().includes("TOKEN_")) {
    return;
} */

const getInitialStorage = ( token, data ) => {

    return () => {
        try {
            const item = window.localStorage.getItem(token);
            return item ? JSON.parse(item) : data;
        } catch (error) {
            return data;
        }
    }
}

export default function useLocalStorage(token, data = {}) {
    
   const [storedData, setStoredData] = useState(getInitialStorage(token, data));

   const updateStorage = (updatedData) => {
    try {
        const value = JSON.stringify(updatedData);
        window.localStorage.setItem(token, value);
        setStoredData(data);
    } catch (error) {
        console.log(error);
    }
};

   return [storedData, updateStorage];
}
