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
                .get("http://127.0.0.1:8000/api/products")
                .then((res) => this.products = res.data)
                .catch((err) => console.log(err));
        },
    }
})