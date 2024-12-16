import {urlApi} from "../const/host.js";

export default defineNuxtPlugin((nuxtApp) => {
    const api = $fetch.create({
        baseURL: urlApi
    })

    return {
        provide: {
            api
        }
    };
});

