// Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

// For example:

// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
// For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
// For a mass of 1969, the fuel required is 654.
// For a mass of 100756, the fuel required is 33583.
// The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

// What is the sum of the fuel requirements for all of the modules on your spacecraft?

const sumFuel = array => {
    const div3Round = array.map(n => {
        return (Math.floor(n / 3)) - 2
    })
    const sum = div3Round.reduce((a, b) => a + b, 0)
    return sum
};

// So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative. For example:

// A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
// At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
// The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.


const sumFuelforFuel = array => {
    const fuelPerModule = array.map(n => {
        let totFuel = 0
        let startFuel = (Math.floor(n / 3)) - 2
        totFuel += startFuel
        if (startFuel > 2) {
            do {
                fuelforFuel = (Math.floor(startFuel / 3)) - 2;
                startFuel = fuelforFuel
                totFuel += fuelforFuel
            }
            while (startFuel > 5)
        } else {
            totFuel = startFuel
        }
        return totFuel
    })
    const sum = fuelPerModule.reduce((a, b) => a + b, 0)
    return sum
}