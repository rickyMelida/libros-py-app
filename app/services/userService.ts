import { IUserCredential } from "@/models/interfaces/IUserCredential";
import axios from "axios";

export const createUser = async (userData: IUserCredential) => {
	try {
        const response = await axios.post(`/api/user/add`, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error: any) {
        console.log('Error en createUser:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || error.response?.data?.error || 'Error al agregar el cliente');
    }
}