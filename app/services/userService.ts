import { IUserCredential } from "@/models/interfaces/IUserCredential";
import { ApiResponse } from "@/models/response/ApiResponse";
import { UserInfoResponse } from "@/models/response/UserInfoResponse";
import axios from "axios";

export class UserService {

	
	static create = async (userData: IUserCredential) => {
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

	static getByUid = async (uid: string): Promise<UserInfoResponse | undefined> => {
		try {
			const response = await axios.get<ApiResponse<UserInfoResponse>>(`/api/user/get-by-uid/${uid}`);
			const { data } = response.data;
			
			return data as UserInfoResponse;
		} catch (error: any) {
			console.log('Error en getUserById:', error.response?.data || error.message);
			//throw new Error(error.response?.data?.message || error.response?.data?.error || 'Error al obtener el cliente');
		}
	}
}