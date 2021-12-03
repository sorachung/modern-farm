import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

console.log("Welcome to the main module")

const yearlyPlan = createPlan();

console.log(yearlyPlan);

// const asparagusSeed = createAsparagus()
// const cornSeed = createCorn();
// const potatoSeed = createPotato();
// const soybeanSeed = createSoybean();
// const sunflowerSeed = createSunflower();
// const wheatSeed = createWheat();
// console.log(asparagusSeed, cornSeed, potatoSeed,soybeanSeed,sunflowerSeed,wheatSeed)

// addPlant(soybeanSeed);
// addPlant(cornSeed);
// const allPlants = usePlants();
// console.log(allPlants);

plantSeeds(yearlyPlan);
Catalog(harvestPlants(usePlants()))
