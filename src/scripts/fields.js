const allPlants = [];

export const addPlant = (seedObj) => {
  if (Array.isArray(seedObj)) {
    allPlants.push(seedObj[0]);
    allPlants.push(seedObj[1]);
  } else {
    allPlants.push(seedObj);
  }
};

export const usePlants = () => {
  return allPlants.map((plant) => ({ ...plant }));
};
