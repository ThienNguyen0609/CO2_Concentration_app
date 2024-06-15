import axios from '../configs/axios'

const getConcentration = async () => {
    const response = await axios.get(`/get/${import.meta.env.VITE_PATH_LINK}`)
    return response
}

const getConcentrationByTimestamp = async (timestamp) => {
    const response = await axios.post(`/get/${import.meta.env.VITE_PATH_LINK}/timestamp`, timestamp)
    return response
}

const postConcentration = async (data) => {
    const response = await axios.post(`/post/${import.meta.env.VITE_PATH_LINK}`, data)
    return response
}

const truncateConcentration = async () => {
    const response = await axios.delete(`/truncate/${import.meta.env.VITE_PATH_LINK}`)
    return response
}

export {
    getConcentration,
    postConcentration,
    truncateConcentration,
    getConcentrationByTimestamp
}