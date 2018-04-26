import axios from "axios";
// get the ENV import working!!!


export default {
  getRest: function(near, query) {
    return axios.get(`https://api.foursquare.com/v2/venues/search`, {
      params: {
        near: near,
        query: query,
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
  }
};

// "https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&client_id=S2ZPM0I1JGASJURDWP1TT4NKJ3AN20IK1K0JE0KI0LEP52F&client_secret=UJCYMVWC4MUGL5VYS1N3ZNHWIJEHKUYK4QDS2VCNFMXSCVAM&v=20180421");
