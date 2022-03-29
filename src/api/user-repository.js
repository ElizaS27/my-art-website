import axios from "axios";

const baseURL = "https://random-data-api.com/api/";

    
const getRandomUsers = () => {
  return axios.get(baseURL + 'users/random_user?size=9')
};

const getRandomRestaurants = () => {
  return axios.get(baseURL + 'restaurant/random_restaurant?size=9')
};

export {getRandomUsers, getRandomRestaurants};