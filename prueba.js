const passengerLocation = { lat: 37.7749, lon: -122.4194 };
const drivers = [
    { id: 1, location: { lat: 37.7849, lon: -122.4094 }, available: true },
    { id: 2, location: { lat: 37.7649, lon: -122.4294 }, available: false },
    { id: 3, location: { lat: 37.7749, lon: -122.4094 }, available: true },
    { id: 4, location: { lat: 37.7755, lon: -122.4155 }, available: true }, 
    { id: 5, location: { lat: 37.7849, lon: -122.4094 }, available: true },  
  ];

const closestDriver = assignDriver(passengerLocation, drivers.filter(driver => driver.available));
console.log("El conductor mas cercano al pasajero es "+closestDriver.id);



function assignDriver(passengerLocation, drivers){

    let distancia = Infinity; 
    let conductor = null;

    for(let driver of drivers){
     
        let d1= calculateDistance(passengerLocation.lat, passengerLocation.lon,driver.location.lat, driver.location.lon);

        if(d1<distancia){

            distancia = d1;
            conductor=driver;
        }

    }

return conductor;


}


function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; 
  
    const dLat = (lat2 - lat1) * (Math.PI / 180); 
    const dLon = (lon2 - lon1) * (Math.PI / 180);
  
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  
    return R * c; 
  }
