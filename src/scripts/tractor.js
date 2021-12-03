import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js";

export const plantSeeds = (plantingPlan) => {
  plantingPlan.forEach((row) => row.forEach((plant) => {
    let currentPlant;
    switch(plant) {
      case "Asparagus":
        currentPlant = createAsparagus();
        break;

      case "Corn":
        currentPlant = createCorn();
        break;

      case "Potato":
        currentPlant = createPotato();
        break;

      case "Soybean":
        currentPlant = createSoybean();
        break;

      case "Sunflower":
        currentPlant = createSunflower();
        break;

      case "Wheat":
        currentPlant = createWheat();
        break;
    }

    addPlant(currentPlant);
  }))
}