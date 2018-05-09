import axios from "axios";
// get the ENV import working!!!
const CLIENT_ID = "S2ZPM0I1JGASJURDWP1TT4NKJ3AN20IK1K0JE0KI0LEP52FF";
const CLIENT_SECRET = "UJCYMVWC4MUGL5VYS1N3ZNHWIJEHKUYK4QDS2VCNFMXSCVAM";
const API_KEY = "15a372b846b971348dc85396f31c7b40";

export default {
  getRest: function(near, query) {
    return axios.get(`https://api.foursquare.com/v2/venues/search`, {
      params: {
        near: near,
        query: query,
        limit: 30,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        v: 20180421
      }
    })
  },
  getVenue: function(vID) {
    return axios.get(`https://api.foursquare.com/v2/venues/` + vID, {
      params: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        v: 20180421
      }
    })
  },
  getRec: function(recipeQuery) {
    return axios.get('/api/RecipeEXP/' + recipeQuery, {
      params: {}
    })
  }
};
// getRec: function(recipeQuery) {
//   return axios.get(`https://proxy.calweb.xyz/http://www.recipepuppy.com/api/?q=` + recipeQuery + `&oi=1`, {
//     params: {
//       count: 10
// "https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&client_id=S2ZPM0I1JGASJURDWP1TT4NKJ3AN20IK1K0JE0KI0LEP52F&client_secret=UJCYMVWC4MUGL5VYS1N3ZNHWIJEHKUYK4QDS2VCNFMXSCVAM&v=20180421");
