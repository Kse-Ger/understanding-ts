let logged; // for variables it is okay not to define a tape

function sendAnalytics(data: string) { // for parameters in ts you have to define a type
    console.log(data)
    logged = true;
}

sendAnalytics("The data");