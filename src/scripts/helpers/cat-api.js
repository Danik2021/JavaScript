import Notiflix from "notiflix";
import { refs } from "../task-1";
import { addHideClass } from "./addHideClass";
import { removeHideClass } from "./removeHideClass";
import { catsByBreedsURL } from "../task-1";
import { CAT_API_URl } from "../task-1";

export function fetchBreeds() {
    refs.loader.classList.remove("hide");
    fetch(`${catsByBreedsURL}`)
        .then((r) => r.json())
        .then((cats) => {
            addHideClass(refs.loader);
            removeHideClass(refs.select);
            cats.forEach(({ breeds, id }) => {
                refs.select.insertAdjacentHTML("beforeend", `<option value="${id}">${breeds[0].name}</option>`);
            });
            refs.select.addEventListener("change", addCat);
        })
        .catch((error) => {
            Notiflix.Notify.failure("Failed to fetch cats: " + error.message);
            throw error;
        });
}

function addCat(e) {
    refs.catsCont.innerHTML = "";
    removeHideClass(refs.dataLoader);
    const idTimer = setTimeout(() => {
        fetchCatByBreed(e);
        clearTimeout(idTimer);
    }, 1000);
}

function fetchCatByBreed(e) {
    e.preventDefault();
    removeHideClass(refs.dataLoader);
    fetch(`${CAT_API_URl}${e.target.value}`)
        .then((r) => r.json())
        .then(({ breeds, url }) => {
            addHideClass(refs.dataLoader);
            refs.catsCont.insertAdjacentHTML(
                "beforeend",
                `<img src=${url}><div><h2>${breeds[0].name}</h2><p>${breeds[0].description}</p><p class="cat-api__temperament">${breeds[0].temperament}</p><div/> `
            );
        });
}
