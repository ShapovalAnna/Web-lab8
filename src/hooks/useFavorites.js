import { useState, useEffect } from "react";

export default function useFavorites() {
    const [favorites, setFavorites] = useState([]);

    // Завантаження з localStorage
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(saved);
    }, []);

    //  Додавання / видалення
    const toggle = (item) => {
        let updated;

        if (favorites.some(f => f.id === item.id)) {
            updated = favorites.filter(f => f.id !== item.id);
        } else {
            updated = [...favorites, item];
        }

        setFavorites(updated);
        localStorage.setItem("favorites", JSON.stringify(updated));
    };

    // Перевірка
    const isFavorite = (id) => {
        return favorites.some(f => f.id === id);
    };

    return {
        favorites,
        toggle,
        isFavorite
    };
}