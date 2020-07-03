const github = new Github;
const ui = new UI;

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
                    ui.showAlert('User not found', 'alert alert-danger');
                    break;
                case false:
                    console.log('found')
                    // show profile
                    ui.showProfile(data.profile);
                    break
            }
        })
    } else {
        // clear profile
        ui.clearProfile();
    }
});