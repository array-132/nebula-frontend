import { myAxios } from "./helper";

export const signUp = async (user) => {

    const response = await myAxios
        .post("/api/v1/auth/register", user);
    return response.data;
}

export const loginUser = async (loginDetail) =>{
    const response = await myAxios
        .post('/api/v1/auth/login', loginDetail);
    return response.data;
}