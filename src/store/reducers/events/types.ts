export interface EventsState {
    update: Boolean;
};

export enum EventsActionEnum {
    UPDATE = 'UPDATE',
};

export interface Update {
    type: EventsActionEnum.UPDATE;
    payload: Boolean;
};

export type EventsAction = 
    Update;