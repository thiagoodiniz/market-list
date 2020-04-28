import { env, endpoints } from "../env"
import axios from 'axios'

export const services = {
    loadMarketLists: () => {
        return fetch(`${env.apiURL}/${endpoints.loadMarketLists}`)
                .then(res => res.json())
    },

    createMarketList: (marketList) => {
        return axios.post(`${env.apiURL}/${endpoints.registerMarketList}`, marketList)
            .then(res => {
                console.log('marketList registered:', res.data.list)
            })
    },

    deleteMarketList: (marketList) => {
        return axios.delete(`${env.apiURL}/${endpoints.removeMarketList}/${marketList._id}`)
            .then(res => {
                console.log(res.data.message);
            })
    },
};