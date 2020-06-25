const chunkArray = require("./chunkArray")

test('should be defined', () => {
    expect(chunkArray).toBeDefined()
});

test('should be return and array divide by 3', () => {
    expect(chunkArray([1,2,3,4,5,6,7,8], 3)).toEqual([[1,2,3], [4,5,6], [7,8]])
});