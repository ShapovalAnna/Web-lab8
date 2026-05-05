import { useNavigate } from "react-router-dom";
import useFavorites from "../../hooks/useFavorites";

export default function FavoritesBar() {
    const navigate = useNavigate();
    const { favorites } = useFavorites();

    return (
        <div style={bar}>
            <button onClick={() => navigate("/")}>Gallery</button>

            <button onClick={() => navigate("/favorites")}>
                Favorites ({favorites.length})
            </button>
        </div>
    );
}

const bar = {
    position: "sticky",
    top: 0,
    background: "#16171d",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
};