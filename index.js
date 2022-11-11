let newInventoryCarModels = ['S1', 'T1', 'S2', 'S1', 'S2', 'S1']
let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]

// let i = 0;
// while (i < newInventoryCarModels.length) {
//     console.log(typeof newInventoryCarModels[i])
//     i++
// } 


// for (let i = 0; i < newInventoryCarModels.length; i++) {
//     console.log(typeof newInventoryCarModels[i])
// }

// let typeS1Count = 0

// for (let i = 0; i < newInventoryCarModels.length; i++) {
//     if (newInventoryCarModels[i] === `S1` || newInventoryCarModels[i] === `T1`) {
//         typeS1Count++;
//     }
// }

// console.log("Number of S1 Cars is:" + typeS1Count)

let lorrieCount = 0
for (let i = 0; i < newInventoryCarTypes.length; i++) {
    if (newInventoryCarTypes[i] === `Lorrie`)
    lorrieCount++;
}

console.log("Number of Lorrie Cars is:" + lorrieCount)