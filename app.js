const github = new Github;

const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if (userText !== "") {
        github.getUser(userText)
        .then(data => {
            switch(data.profile.message === 'Not Found') {
                case true:
                    console.log('not found')
                    // show alert
                    break;
                case false:
                    console.log('found')
                    // show profile
                    break
            }
        })
    } else {
        // clear profile
    }
});