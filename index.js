const plantStates = {

    Seed:         Symbol("seed"),
    Sprout:       Symbol("sprout"),
    Fruit:        Symbol("fruit"),
    RipeFruit:    Symbol("ripe fruit"),
    RottingFruit: Symbol("rotting fruit"),
    RottenFruit:  Symbol("rotten fruit"),
    Nothing:      Symbol("nothing")
};

let hunger = 0;

const consume = (plant) => {

    switch (plant) {

        case plantStates.Seed:
        case plantStates.Fruit:
        case plantStates.RottingFruit: --hunger;      break;
        case plantStates.Sprout:       ++hunger;      break;
        case plantStates.RottenFruit:    hunger += 2; break;
        case plantStates.RipeFruit:      hunger -= 2; break;
    }
};

const isStarving = () => hunger >= 20; // game over
