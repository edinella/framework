const url = process.env.NUXT_VITE_SERVER_FETCH

const manifest = await $fetch(url + '/manifest')

export default manifest