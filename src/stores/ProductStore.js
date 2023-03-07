import { defineStore } from 'pinia'
export const useProductStore = defineStore('ProductStore', {

    state: () => {
        return {
            products: []
        }
    },
    actions: {
        async fetchdata() {
            await axios
                .get("https://mike.mgihub.com/api/products")
                .then((res) => this.products = res.data)
                .catch((err) => console.log(err));
        },
    }
})