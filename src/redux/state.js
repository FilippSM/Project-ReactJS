let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20},
            {id: 3, message: 'Hello', likesCount: 10}
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
            {id: 1, message: 'Hi', box: 'one'},
            {id: 2, message: "What's new?", box: 'two'},
            {id: 3, message: 'By.', box: 'three'},
            {id: 4, message: 'What\'s new?', box: 'four'},
            {id: 5, message: 'I\'m good.', box: 'five' }
        ]
    }
}

export default state;