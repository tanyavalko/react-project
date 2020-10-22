const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages:
        [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are u' },
            { id: 3, message: 'ok' },
            { id: 4, message: 'aaaa' },
            { id: 5, message: 'bbbb' },
            { id: 6, message: 'bla' },
        ],
    dialogs:
        [
            { id: 1, name: 'Dim' },
            { id: 2, name: 'Andrei' },
            { id: 3, name: 'Rok' },
            { id: 4, name: 'Ivan' },
            { id: 5, name: 'Maria' },
            { id: 6, name: 'Tanya' },
        ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody; 
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 7, message: body }]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;