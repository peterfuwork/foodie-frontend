import axios from "axios";

export default {

    getPosition() {
        // Simple wrapper
        return new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej);
        });
    },
    
    async main() {
        var position = await this.getPosition();  // wait for getPosition to complete
        return position;
    },

    async fetchYelpRestaurants() {
        const response = await this.main();
        const lat = await response.coords.latitude;
        const lon = await response.coords.longitude;
        console.log(lat, lon);
        const data = await axios.post('http://localhost:4000/api/yelp_restaurants', {
            lat,
            lon
        })
        console.log(data);
        return data;
    }

}