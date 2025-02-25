import onSearchImages from "../helpers/validation";
import { state } from "./pageState";
import { refs } from "../task-1";

export function onSubmitForm() {
    refs.form.addEventListener("submit", (e) => {
        e.preventDefault();
    });
}

export function onClickButton() {
    refs.button.addEventListener("click", () => {
        refs.container.innerHTML = "";
        state.filter = refs.input.value;
        onSearchImages(state.filter);
    });
}

export function onClickShowMoreButton() {
    refs.buttonShowMore.addEventListener("click", () => {
        onSearchImages(state.filter);
    });
}
