export const getInventory = async () => {
    const res = await fetch("http://localhost:3000/inventory");
    return res.json();
};