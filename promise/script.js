let users = ['Peter', 'Gabriel', 'John'];

function pushUser(name) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(name);
            let error = false;

            if (!error) {
                resolve();
            } else {
                reject({ msg: "Some error" })
            }
        }, 1000);
    })
    return promise
}

function showUsers() {
    console.log(users);
}

pushUser('Tom')
    .then(showUsers)
    .catch(function (err) {
        console.log(err);
    });