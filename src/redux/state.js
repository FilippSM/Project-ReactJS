let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Illidan'},
            {id: 3, name: 'Rogan'},
            {id: 4, name: 'Garosh'},
            {id: 5, name: 'Jupiter'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: "What's new?"},
            {id: 3, message: 'By.'}
        ]
    }
}

export default state;