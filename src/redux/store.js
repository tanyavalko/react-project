// import profileReducer from './profileReducer';
// import dialogsReducer from './dialogsReducer';
// import sidebarReducer from './sidebarReducer';


// let store = {
//   _state: {
//     profilePage: {
//       posts:
//         [
//           { id: 1, message: 'Hi', likeCount: 10 },
//           { id: 2, message: 'How are u', likeCount: 12 }
//         ],
//       newPostText: ''
//     },
//     dialogsPage: {
//       messages:
//         [
//           { id: 1, message: 'Hi' },
//           { id: 2, message: 'How are u' },
//           { id: 3, message: 'ok' },
//           { id: 4, message: 'aaaa' },
//           { id: 5, message: 'bbbb' },
//           { id: 6, message: 'bla' },
//         ],
//       dialogs:
//         [
//           { id: 1, name: 'Dim' },
//           { id: 2, name: 'Andrei' },
//           { id: 3, name: 'Rok' },
//           { id: 4, name: 'Ivan' },
//           { id: 5, name: 'Maria' },
//           { id: 6, name: 'Tanya' },
//         ],
//       newMessageBody: ""
//     },
//     sideBar: {
//       friends:
//         [
//           { id: 1, name: 'Dim' },
//           { id: 2, name: 'Andrei' },
//           { id: 3, name: 'Rok' },
//         ]
//     }
//   },

//   _callSubscriber() {
//     console.log('state changed');
//   },

//   getState() {
//     return this._state;
//   },

//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//     this._callSubscriber(this._state);
//   }
// }

// export default store;
