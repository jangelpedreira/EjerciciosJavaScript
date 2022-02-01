const users = [

    {username: 'ppc90', age: 30, premium: false},
    
    {username: 'lu65', age: 24, premium: true},
    
    {username: 'maria3', age: 36, premium: false},
    
    {username: 'abc123', age: 30, premium: false},
    
    {username: 'sergio58', age: 30, premium: true},
    
    ];

users
    .filter(user => user.premium)
    .map(user => console.log("El usuario " + user.username + ' es premium'));
    
const noPremiumUsers = users.filter(user => user.premium == false);

console.log('Usuarios no premium: ');
console.log(noPremiumUsers);








