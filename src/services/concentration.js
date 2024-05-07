import axios from '../configs/axios'

const getConcentration = async () => {
    const response = await axios.get("/get/concentrationTest")
    return response
}

const truncateConcentration = async () => {
    const response = await axios.delete("/truncate/concentrationTest")
    return response
}

export {
    getConcentration,
    truncateConcentration
}