import * as PostActions from '../actions/post.actions';
import { Post } from '../models/post.model';

// Action jest importowany z ngrx/store
// tworze typ Action  który jest użyty w case PostAcion.ALL(ALL to np. UPVOTE)
export type Action = PostActions.All;

//default app state
const defaultState: Post = {
    text: "This is a default title, type to change...",
    likes: 0
}

//function to create new state object
const newState = (state, newData) => {
    return Object.assign({}, state, newData)
}

export function postReducer (state: Post = defaultState, action: Action) {
    console.log (action.type, state)

    switch (action.type) {
        case PostActions.EDIT_TEXT:
        return newState(state, { text: action.payload });

        case PostActions.UPVOTE:
        return newState(state, { likes: state.likes +1 });

        case PostActions.DOWNVOTE:
        return newState(state, { likes: state.likes -1 });

        case PostActions.RESET:
        return defaultState;

        default: 
        return state;



    }
}