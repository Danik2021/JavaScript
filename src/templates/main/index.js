import axios from "axios";

import { refs } from "./scripts/refs";
import { state } from "./scripts/state";
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { onClickSearchButton, onSubmitForm, onClickShowMoreButton } from "./scripts/handlers";
import { Notification } from "../../models/notification.model";

refs.form.addEventListener("submit", onSubmitForm);
refs.searchButton.addEventListener("click", onClickSearchButton);
refs.buttonShowMore.addEventListener("click", onClickShowMoreButton);

const API_URL = "https://pixabay.com/api/";
const key = "48781960-dc6df10b20f0dfee4adceb61a";

const otherParams = {
    image_type: "photo",
    orientation: "horizontal",
    safe_search: "true",
    per_page: 20,
    page: state.pageNum,
};

export async function fetchGalleryImages(query) {
    try {
        const dataFromApi = await axios.get(API_URL, {
            params: {
                key,
                q: query,
                ...otherParams,
            },
        });

        const colection = dataFromApi.data.hits;

        if (!colection.length) {
            if (!refs.buttonShowMore.classList.contains("hide")) refs.buttonShowMore.classList.add("hide");
            throw new Error("Sorry, there are no images matching your search query. Please try again.");
        }
        refs.buttonShowMore.classList.remove("hide");
        state.pageNum += 1;

        const massImages = colection.reduce(
            (acc, { webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
                return (
                    acc +
                    `<div class="photo-card">
                    
                    <a href="${largeImageURL}">
                          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                    </a>
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
                    </div>`
                );
            },
            ""
        );

        refs.container.insertAdjacentHTML("beforeend", massImages);

        if (refs.gallery !== null) refs.gallery.destroy();

        refs.gallery = new SimpleLightbox(".gallery .photo-card a", {
            caption: true,
            captionsData: "alt",
            captionDelay: 250,
        });
    } catch (error) {
        Notification.error(error.message);
    }
}
