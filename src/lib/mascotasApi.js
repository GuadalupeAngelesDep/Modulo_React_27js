const BASE_URL = "https://mascota-67267-default-rtdb.firebaseio.com/mascotas";

export default {
    getAllMascotas: async () => {
        const response = await fetch(`${BASE_URL}/.json`);
        const data = response.json()
        return data;
    },

    getMascotaById: async (mascotaId) => {
        const response = await fetch(`${BASE_URL}/${mascotaId}/.json`);
        const data = response.json();
        return data;
    },
    updateMascotaById: async (mascotaObject, mascotaId) => {
        const response = await fetch(`${BASE_URL}/${mascotaId}/.json`, {
            method: "PATCH",
            body: JSON.stringify(mascotaObject)
        });
        const data = response.json();
        return data;
    }
}