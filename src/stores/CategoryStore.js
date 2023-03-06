import axios from 'axios'
import { defineStore } from 'pinia'
export const useCategoryStore = defineStore('categoryStore', {
    state: () => {
        return {
            categories: []
        }
    },
    actions: {
        async fetchCategories() {
            await axios
                .get("http://mike.mgihub.com/api/categories")
                .then((res) => (this.categories = res.data))
                .catch((err) => console.log(err));
        },
    }

})