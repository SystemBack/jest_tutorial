const functions = require('./tutorial');

test('Add 2 + 4 should be 6', () =>{
    expect(functions.add(2,4)).toBe(6)
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull()
});

test('Should be falsy', () => {
    expect(functions.checkValue(false)).toBeFalsy()
});

test('Should be undefined', () => {
    expect(functions.checkValue(undefined)).toBeUndefined()
});

// for arrays and objects must use toEqual instead of toBe
test('Should be Lalo Cervantes Obj', () => {
    expect(functions.createUser()).toEqual({'firstName': 'Lalo', 'lastName': 'Cervantes'});
});

test('Should be less or equal than 12', () => {
    const num1 = 5;
    const num2 = 7;
    expect(num1 + num2).toBeLessThanOrEqual(12);
});

test('Should be greater than 12', () => {
    const num1 = 6;
    const num2 = 7;
    expect(num1 + num2).toBeGreaterThan(12);
});

//Regex
test('Should not have a numbers in the string', () => {
    expect('My Name is Lalo').not.toMatch(/[0-9]/);
});

test('The array should contains the admin value', () => {
    expect(['joe', 'jess', 'admin', 'test']).toContain('admin');
});

// With a promise
test('User should be Leanne Graham with a Promise', () => {
    expect.assertions(1); // is necessary with you work with a async promise this call to jest that we needs an assertion
    return functions.fetchUser() // the return is necessary too because is async call and if we don't put it the test do it to fast and not wait for the response of the async call
    .then(data => {
        expect(data.name).toBe('Leanne Graham');
    })
});


// With Async Await
test('User should be Leanne Graham with Async and Await', async () => {
    const data = await functions.fetchUser(); // the expect assertions and return is not necessary because we await to the response.
    expect(data.name).toBe('Leanne Graham');
});