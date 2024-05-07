import axios from '../configs/axios'

const getConcentration = async () => {
    const response = await axios.get("/get/concentrationTest")
    return response
}

export {
    getConcentration
}