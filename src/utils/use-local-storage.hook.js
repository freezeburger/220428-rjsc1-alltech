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

const updateStorageCreator = ( token, setStoredData ) => {

    return  (updatedData) => {
        try {
            const value = JSON.stringify(updatedData);
            window.localStorage.setItem(token, value);
            setStoredData(updatedData);
        } catch (error) {
            console.log(error);
        }
    }
}

export default function useLocalStorage(token, data = {}) {
    
   const [storedData, setStoredData] = useState(getInitialStorage(token, data));
   const updateStorage = updateStorageCreator(token,setStoredData);

   return [storedData, updateStorage];
}
