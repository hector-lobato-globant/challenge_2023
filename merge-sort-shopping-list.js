function mergeSort(collection = []) {
    const minToMax = [...collection];
    minToMax.sort((a,b) => (a.unitPrice * a.quantity) - (b.unitPrice * b.quantity));
    const maxToMin = minToMax.slice().reverse();
    return {
        maxToMin,
        minToMax,
    }
}

const collection = [
    { name: "Doritos", unitPrice: 25, quantity: 2, },
    { name: "Penauts", unitPrice: 20, quantity: 3, },
    { name: "Pizza", unitPrice: 120, quantity: 2, },
    { name: "Beer", unitPrice: 15, quantity: 12, },
]

console.log(mergeSort(collection));