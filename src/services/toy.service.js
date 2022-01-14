import Axios from 'axios';
import { utilService } from './util.service.js'
const axios = Axios.create({
    withCredentials: true
})

const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]


export const toyService = {
    query,
    getById,
    save,
    add,
    remove,
    getEmptyToy,
}

async function query(filterBy) {
    try {
        let {data} = await axios.get(`http://localhost:3030/api/toy`)
        data = _getFilteredToys(filterBy,data)
        return data
    } catch (err) {
        console.log('cannot bring toys', err);
    }

}
async function getById(toyId) {
    try {
        const res = await axios.get(`http://localhost:3030/api/toy/${toyId}`)
        return res.data
    } catch (err) {
        console.log('cannot bring toy', err);
    }
}
async function remove(toyId) {
    try {
        const res = await axios.delete(`http://localhost:3030/api/toy/${toyId}`)
        return res
    } catch (err) {
        console.log('cannot delete toy', err);
    }
}
async function save(newToy) {
        try {
            console.log('Updating toy')
            const {data} = await axios.put(`http://localhost:3030/api/toy/${newToy._id}`, newToy)
            return data
        } catch (err) {
            console.log('cannot save toy', err);
        }

}
async function add(newToy) {
        try {
            const {data} = await axios.post('http://localhost:3030/api/toy', newToy)
            return data
        } catch (err) {
            console.log('cannot save toy', err);
        }
    }

    function _getFilteredToys(filterBy, toys) {
        const { name, inStock } = filterBy
        let filteredToys = toys.filter((toy) => {
            return toy.name.toLowerCase().includes(name.toLowerCase())
        })
        switch (inStock) {
            case 'All':
                return filteredToys;
            case 'inStock':
                return filteredToys.filter((toy) => {
                    return toy.inStock === true
                })
            case 'outOfStock':
                return filteredToys.filter((toy) => {
                    return toy.inStock === false
                })

        }
    }

    function getEmptyToy() {
        return {
            "name": '',
            "price": '',
            "labels": [],
            "createdAt": Date.now(),
            "img": "default.png"
        }


    }