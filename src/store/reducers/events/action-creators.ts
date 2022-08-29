import { EventsActionEnum, Update } from "./types";

export const EventsActionCreators = {
    update: (payload: Boolean): Update => ({
        type: EventsActionEnum.UPDATE,
        payload,
    }),
};
