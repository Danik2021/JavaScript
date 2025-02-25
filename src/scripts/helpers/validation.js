import { fetchGalleryImages } from "../task-1";
import Notiflix from "notiflix";

export default function onSearchImages(filter) {
    if (filter === "") {
        Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again. 🙂‍↔️");
        return;
    }
    fetchGalleryImages(filter);
}
