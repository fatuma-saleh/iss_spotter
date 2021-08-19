
const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("Error when fetching IP address:",error)
//   } else {
//     console.log("It worked!! Returned ip",ip)
//   }
// });
// fetchCoordsByIP("99.251.130.127",(error,Coordinates) =>{
//   if (error) {
//     console.log("It didn't work:",error);
//     return;
//   }
//   console.log("It worked!! Returned coordinates",Coordinates);
      
// });


// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' },(error,passTimes) =>{
//   if (error) {
//     console.log("It didn't work:",error);
//     return;
//   }
//   console.log("It worked!! Returned flyOver Times:",isstimes);
      
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
  //console.log(passTimes)
});
