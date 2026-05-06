import { useState } from "react";
import useFavorites from "../../hooks/useFavorites";

export default function InventoryCard({ item, onOpen }) {

    const { toggle, isFavorite } = useFavorites();

    const [hovered, setHovered] = useState(false);

    return (
        <div
            style={{
                ...card,

                transform: hovered
                    ? "scale(1.03)"
                    : "scale(1)",

                boxShadow: hovered
                    ? "0 10px 25px rgba(0,0,0,0.25)"
                    : "0 4px 10px rgba(0,0,0,0.1)",
            }}

            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}

            onClick={() => onOpen(item)}
        >
            <img
                src={item.photo}
                alt={item.inventory_name}
                style={img}
            />

            <div style={title}>
                {item.inventory_name}
            </div>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    toggle(item);
                }}

                style={favBtn}
            >
                {isFavorite(item.id)
                    ? "❤️"
                    : "🤍"}
            </button>
        </div>
    );
}

const card = {
    background: "#d1d5db",
    padding: "10px",
    borderRadius: "12px",
    cursor: "pointer",
    position: "relative",
    transition: "0.2s ease",
};

const img = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
};

const title = {
    marginTop: "10px",
    textAlign: "center",
    color: "#000",
    fontSize: "16px",
    fontWeight: "500",
};

const favBtn = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "30px",
    cursor: "pointer",
};