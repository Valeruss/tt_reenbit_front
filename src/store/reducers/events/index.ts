import { EventsState, EventsAction, EventsActionEnum } from './types';

const initialState: EventsState = {
    update: false,
};

export default function EventsReducer (state = initialState, action: EventsAction): EventsState {
    switch (action.type) {
        case EventsActionEnum.UPDATE:
            return { ...state, update: action.payload };
        default:
            return state;
    }
}