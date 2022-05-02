import { useState } from "react";

export default function useLocalStorage(token, data = {}) {
    const pouet = JSON.stringify(data);
    
    if (!token.toString().includes("TOKEN_")) {
        return;
    }

    const savedData = window.localStorage.getItem(token) || pouet;
    const parsedData = JSON.parse(savedData);

    const [data, setData] = useState(parsedData);
    
    const updateData = (data) => {
        window.localStorage.setItem(token, data);
    }
}
