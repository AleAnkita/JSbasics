const opObj = require('./myOperations.js')

//
test('adds two numbers', () =>{
    //console.log(opObj.add(2,3))
    expect(opObj.add(2,3)).toBe(5)
}
)

test('get the difference between two numbers', ()=>{
    //console.log(opObj.subtract(5,2))
    expect(opObj.subtract(5,2)).toBe(3)
})