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
};