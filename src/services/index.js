import { env, endpoints } from "../env"

export const services = {
    loadMarketLists: () => {
        return fetch(`${env.apiURL}/${endpoints.loadMarketLists}`)
                .then(res => res.json())
    },

    createMarketList: (marketList) => {
        console.log('AQUI VAI A REQUEST', marketList);
    },
};