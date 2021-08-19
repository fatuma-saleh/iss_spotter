const { fetchMyIP,fetchCoordsByIP  } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("Error when fetching IP address:",error)
//   } else {
//     console.log("It worked!! Returned ip",ip)
//   }
// });
fetchCoordsByIP("99.251.130.127",(error,Coordinates) =>{
  if (error) {
    console.log("It didn't work:",error);
    return;
  }
  console.log("It worked!! Returned coordinates",Coordinates);
      
});

