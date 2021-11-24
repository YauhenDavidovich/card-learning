import axios, {AxiosResponse} from "axios";
import {AddPackParamsType, GetPacksParamsType, ResponsePacksType, UpdatePackParamsType} from "./packsListApi";



const instance = axios.create({
    // baseURL: "https://neko-back.herokuapp.com/2.0",
    baseURL: process.env.REACT_APP_API_PATH,
    withCredentials: true,
})


// export const cardsListAPI = {
//     getPacks(params: GetPacksParamsType){
//         return instance.get<GetPacksParamsType, AxiosResponse<ResponsePacksType>>('cards/pack', {
//             params: {...params}
//         })},
//     addPack(pack:AddPackParamsType){
//         return instance.post<AddPackParamsType, AxiosResponse<ResponsePacksType>>('/cards/pack', {...pack})
//     },
//     deletePack(packId: string){
//         return instance.delete<AxiosResponse<ResponsePacksType>>('/cards/pack', {params: {id: packId}})
//     },
//     updatePack(params: UpdatePackParamsType) {
//         return instance.put<AddPackParamsType, AxiosResponse<ResponsePacksType>>('cards/pack', {cardsPack:{...params}})
//     }
// }