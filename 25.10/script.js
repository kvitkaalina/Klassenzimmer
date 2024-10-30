const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const accumulator = arr.reduce((acc, currentValue) => {
    return`${acc} and ${currentValue}`
    
})

console.log(accumulator);
