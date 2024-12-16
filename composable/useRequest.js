import { useNuxtApp } from '#app'

export const useRequest = async (method, url, data, callback) => {
    const { $api } = useNuxtApp()

    await $api(url, {
        method: method,
        body: data,
    })
    .then(function (response) {
        callback(response)
    })
    .catch((error) => {
        console.log(error)
    })
}

