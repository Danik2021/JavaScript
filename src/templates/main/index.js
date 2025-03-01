import axios from "axios";

import { refs } from "./scripts/refs";
import { state } from "./scripts/state";
import { onClickSearchButton, onSubmitForm, onClickShowMoreButton } from './scripts/handlers';
import { Notification } from '../../models/notification.model';

refs.form.addEventListener("submit", onSubmitForm);
refs.searchButton.addEventListener("click", onClickSearchButton);
refs.buttonShowMore.addEventListener("click", onClickShowMoreButton);

const API_URL = "https://pixabay.com/api/";
const key = "48781960-dc6df10b20f0dfee4adceb61a";

const otherParams = {
  image_type: "photo",
  orientation: "horizontal",
  safesearch: "true",
  per_page: 20,
  page: state.pageNum,
}

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
      if (!refs.buttonShowMore.classList.contains('hide')) refs.buttonShowMore.classList.add("hide");
      throw new Error("Sorry, there are no images matching your search query. Please try again.");
    }

    refs.buttonShowMore.classList.remove("hide");
    state.pageNum += 1;

    // TODO: можна використати замість reduce:
    // const massImages = colection
    //     .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    //         return `<div class="photo-card">
    //                     <img src="${webformatURL}" alt="" loading="lazy" />
    //             <div class="info">
    //                     <p class="info-item">
    //                         <b>Likes</b>
    //                         <span>${likes}</span>
    //                     </p>
    //                     <p class="info-item">
    //                         <b>Views</b>
    //                         <span>${views}</span>

    //                     </p>
    //                     <p class="info-item">
    //                         <b>Comments</b>
    //                         <span>${comments}</span>
    //                     </p>
    //                     <p class="info-item">
    //                         <b>Downloads</b>
    //                         <span>${downloads}</span>
    //                     </p>
    //                  </div>
    //             </div>`;
    //     })
    //     .join(" ");

    const massImages = colection
      .reduce((acc, { webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return acc + `<div class="photo-card">
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
      }, '');

    refs.container.insertAdjacentHTML("beforeend", massImages);
  } catch (error) {
    Notification.error(error.message);
  }
}