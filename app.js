const fs = require('fs')
const getDistance = require('./libs/distanceInKm')

function customersWithin100Km(filename) {

    fs.stat(filename, (err,stat) => {
        if (err == null) {
            var lines = fs.readFileSync(filename, 'utf-8')
                .split('\n')
                .filter(Boolean);
            var customerLessThan100Km = []
            // console.log((JSON.parse(lines[0])).name)

            for (let i = 0; i < lines.length; i++) {
                var jsonCustomer = (JSON.parse(lines[i]))
                var lat = jsonCustomer.latitude;
                var long = jsonCustomer.longitude;
                var distance = getDistance.getDistanceFromLatLonInKm(lat,long);

                if (distance < 100){
                    var arr = JSON.parse(`{"name": "${jsonCustomer.name}","user_id": "${jsonCustomer.user_id}"}`)
                    customerLessThan100Km.push(arr);
                }
            }


            customerLessThan100Km.sort(function(a,b) 
            {return (Number(a.user_id) > Number(b.user_id)) ? 1 : ((Number(b.user_id) > Number(a.user_id)) ? -1 : 0);} );

            console.log(customerLessThan100Km);
            return customerLessThan100Km;
        } else if(err.code === 'ENOENT'){
            console.log('file doesnt exist')
            return ('file doesnt exist')
        } else {
            console.log(err.code);
            return(err.code);
        }
    })

}

// customersWithin100Km('Customers.txt')

module.exports = {
    customersWithin100Km: customersWithin100Km
}








