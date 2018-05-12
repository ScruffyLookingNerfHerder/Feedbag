import axios from "axios";
// get the ENV import working!!!
const CLIENT_ID = "S2ZPM0I1JGASJURDWP1TT4NKJ3AN20IK1K0JE0KI0LEP52FF";
const CLIENT_SECRET = "UJCYMVWC4MUGL5VYS1N3ZNHWIJEHKUYK4QDS2VCNFMXSCVAM";
const API_KEY = "15a372b846b971348dc85396f31c7b40";

export default {
  getRest: function(near, catIds) {
    return axios.get(`https://api.foursquare.com/v2/venues/search`, {
      params: {
        near: near,
        categoryId: catIds,
        limit: 10,
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
    return axios.get(`https://proxy.calweb.xyz/http://www.recipepuppy.com/api/?q=` + recipeQuery + `&oi=1`, {
       params: {

       }
    })
  }
};
// getRec: function(recipeQuery) {
//   return axios.get(`https://proxy.calweb.xyz/http://www.recipepuppy.com/api/?q=` + recipeQuery + `&oi=1`, {
//     params: {
//       count: 30
// + `&oi=1`
// https://api.foursquare.com/v2/venues/search?near=arlington,va&categoryId=4d4b7105d754a06374d81259&query=italian,american&client_id=S2ZPM0I1JGASJURDWP1TT4NKJ3AN20IK1K0JE0KI0LEP52FF&client_secret=UJCYMVWC4MUGL5VYS1N3ZNHWIJEHKUYK4QDS2VCNFMXSCVAM&v=20180421
