const { default: Axios } = require("axios");

const functions = {
    add: (n1, n2) => n1 + n2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () =>{
        const user = {firstName: 'Lalo'};
        user['lastName'] = 'Cervantes';

        return user;
    },
    fetchUser: () => Axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error')
}

module.exports = functions;