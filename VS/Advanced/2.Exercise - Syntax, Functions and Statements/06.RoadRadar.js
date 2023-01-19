function roadRadar(speed, area) {
  let limit = 0;

  if (area == "city") {
    limit = 50;
  } else if (area == "motorway") {
    limit = 130;
  } else if (area == "interstate") {
    limit = 90;
  } else {
    limit = 20;
  }
  let status = "";
  let isOk = false;

  let difference = speed - limit;
  if (difference <= 0) {
    isOk = true;
  } else if (difference <= 20) {
    status = "speeding";
  } else if (difference <= 40) {
    status = "excessive speeding";
  } else {
    status = "reckless driving";
  }
  if (isOk) {
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
  } else {
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
    );
  }
}
roadRadar(50, "city");
