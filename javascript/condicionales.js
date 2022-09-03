const age = 45;

if (age <= 18) {
  console.log("es menor de edad");
} else if (age >= 75) {
  if (age === 75) {
    console.log("tienes 75");
  } else {
    console.log("es un anciano");
  }
} else {
  console.log(`es un adulto de ${age} años`); // ("es un adulto de"+ age);
}
