let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const cars in statistics) {
    if(cars.startsWith('r') || statistics[cars] % 2 == 1) {
        console.log(statistics[cars]);
    }
}