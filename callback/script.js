let users = ['Peter', 'Gabriel', 'John'];

function pushUser(name, callback) {
    setTimeout(() => {
        users.push(name);
        callback();
    }, 500);
}

function showUsers(name){
    console.log(users);
}

pushUser('Tom', pushUser())
