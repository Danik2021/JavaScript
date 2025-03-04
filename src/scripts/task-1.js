import axios from "axios";
import Notiflix from "notiflix";
import SimpleLightbox from "simplelightbox";
import { state } from "./helpers/pageState";
import { onSubmitForm, onClickButton, onClickShowMoreButton } from "./helpers/events";

// const gallery = new SimpleLightbox(".gallery .photo-card img");
// const images = document.querySelectorAll(".gallery .photo-card img");

export const refs = {
    form: document.querySelector(".search-form"),
    input: document.querySelector(".search-form__input"),
    button: document.querySelector(".search-form__button"),
    container: document.querySelector(".gallery"),
    buttonShowMore: document.querySelector(".gallery-button"),
};

onSubmitForm();
onClickButton();
onClickShowMoreButton();

export async function fetchGalleryImages(paramSort) {
    try {
        const dateFromApi = await axios.get("https://pixabay.com/api/", {
            params: {
                key: "48781960-dc6df10b20f0dfee4adceb61a",
                q: `${paramSort}`,
                image_type: "photo",
                orientation: "horizontal",
                safe_search: "true",
                per_page: 20,
                page: state.pageNum,
            },
        });

        const colection = dateFromApi.data.hits;

        if (colection.length < 20) {
            refs.buttonShowMore.classList.add("hide");
            throw new Error("Sorry, there are no images matching your search query. Please try again.");
        }
        refs.buttonShowMore.classList.remove("hide");
        state.pageNum += 1;

        const massImages = colection
            .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
                return `<div class="photo-card">
                <a href="">
                            <img src="${webformatURL}" alt="" loading="lazy" />
                    <div class="info">
                            <p class="info-item">
                                <b>Likes</b>
                                <span>${likes}</span>
                            </p>
                            <p class="info-item">
                                <b>Views</b>
                                <span>${views}</span>

                            </p>
                            <p class="info-item">
                                <b>Comments</b>
                                <span>${comments}</span>
                            </p>
                            <p class="info-item">
                                <b>Downloads</b>
                                <span>${downloads}</span>
                            </p>
                         </div>
                    </div>`;
            })
            .join(" ");

        refs.container.insertAdjacentHTML("beforeend", massImages);
    } catch (error) {
        Notiflix.Notify.failure(error.message);
    }
}
