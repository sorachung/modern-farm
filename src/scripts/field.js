const field = [];

export const addPlant = (seedObj) => {
  if (Array.isArray(seedObj)) {
    field.push(seedObj[0]);
    field.push(seedObj[1]);
  } else {
    field.push(seedObj);
  }
};

export const usePlants = () => {
  return field.map((plant) => ({ ...plant }));
};
