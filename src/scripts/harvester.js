export const harvestPlants = (plantsArr) => {
  const seedsArr = [];
  plantsArr.forEach((plant) => {
    let output = plant.output;
    if (plant.type === "Corn") {
      output = output / 2;
    }
    for( let i = 1; i <= output; i++) {
      seedsArr.push(plant);
    }
    
    
  })

  return seedsArr;
}