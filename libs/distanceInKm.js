function getDistanceFromLatLonInKm(lat,lon) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(53.339428-lat);  // deg2rad below
    var dLon = deg2rad(-6.257664-lon); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat)) * Math.cos(deg2rad(53.339428)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
return deg * (Math.PI/180)
}

module.exports = {
    getDistanceFromLatLonInKm: getDistanceFromLatLonInKm
}