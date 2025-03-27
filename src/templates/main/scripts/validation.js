import { Notification } from '../../../models/notification.model';

export function isValidInput(query) {
    if (query.length < 3) {
        Notification.warning("Sorry, there are very short search query. Please try enter more longer query. 🙂‍↔️");
        return false;
    }

    if (query === "") {
        Notification.error("Sorry, there are no images matching your search query. Please try again. 🙂‍↔️");
    }

    return Boolean(query);
}