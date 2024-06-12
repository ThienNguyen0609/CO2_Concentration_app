import axios from '../configs/axios'

const getConcentration = async () => {
    const response = await axios.get("/get/concentrationTest")
    return response
}

const getConcentrationByTimestamp = async (timestamp) => {
    const response = await axios.post("/get/concentrationTest/timestamp", timestamp)
    return response
}

const postConcentration = async (data) => {
    const response = await axios.post("/post/concentrationTest", data)
    return response
}

const truncateConcentration = async () => {
    const response = await axios.delete("/truncate/concentrationTest")
    return response
}

export {
    getConcentration,
    postConcentration,
    truncateConcentration,
    getConcentrationByTimestamp
}