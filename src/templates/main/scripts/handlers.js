import { state } from "./state";
import { refs } from "./refs";
import { isValidInput } from "./validation";
import { fetchGalleryImages } from "../index";

export function onSubmitForm(e) {
    e.preventDefault();
}

export function onClickSearchButton() {
    refs.container.innerHTML = "";
    state.filter = refs.input.value;
    onSearchImages(state.filter);
}

export function onClickShowMoreButton() {
    onSearchImages(state.filter);
}

export function onSearchImages(query) {
    if (isValidInput(query)) {
        fetchGalleryImages(query);
    }
}

export function onLoading(status) {
    refs.searchButton.disabled = status;
    refs.buttonShowMore.disabled = status;
}
