//1. forEach() method
const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}

fruits.forEach(appendIndex);

//------------OR---------------------
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function (veggie, index) {
    console.log(`${index}. ${veggie}`);
});

//2. filter() method filters items on condition
const nums = [0, 10, 20, 30, 40, 50];
nums.filter(function (num) {
    return num > 20;
})

//3. map() method map each array item over to another array's item
[0, 10, 20, 30, 40, 50].map(function (num) {
    return num / 10
})
