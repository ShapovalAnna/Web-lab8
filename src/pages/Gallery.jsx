import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInventory } from "../services/inventoryApi";
import InventoryGallery from "../components/gallery/InventoryGallery";

export default function Gallery() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getInventory().then(setItems);
    }, []);

    return (
        <div>
            {/*  HEADER */}
            <div style={topBar}>
                {/* пустий блок для центрування */}
                <div style={{ width: "120px" }} />

                {/* заголовок по центру */}
                <h1 style={title}>Gallery</h1>

                {/* кнопка справа */}
                <button
                    onClick={() => navigate("/favorites")}
                    style={favBtn}
                >
                    Favorites
                </button>
            </div>

            {/*  ГАЛЕРЕЯ */}
            <InventoryGallery items={items} />
        </div>
    );
}


const topBar = {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "#16171d",
    padding: "15px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
};

const title = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    margin: 0,
};

const favBtn = {
    background: "#ec4899",
    color: "white",
    padding: "12px 24px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
};