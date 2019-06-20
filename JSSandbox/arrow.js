const hello1 = () => {
    console.log('Hello1');
}
const hello2 = () => console.log('Hello2');

const hello3 = () => 'Hello3';

const hello4 = () => ({ msg:'Hello4'});

const users = ['a', 'aa', 'bbb'];

const usersLength = users.map(user => user.length);


hello1();
hello2();
console.log(hello3());
console.log(hello4());
console.log(usersLength);
