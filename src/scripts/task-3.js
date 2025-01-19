import Notiflix from "notiflix";
import { enqueuePromise, executePromise } from "./helpers/executePromise";

const refs = {
    firstDelay: document.querySelector(".delay"),
    delayStep: document.querySelector(".step"),
    amount: document.querySelector(".amount"),
    form: document.querySelector(".form"),
};

const { firstDelay, delayStep, amount, form } = refs;

form.addEventListener("submit", start);

function start(event) {
    event.preventDefault();
    const timer = setTimeout(() => {
        const promiseIds = Array.from({ length: Number(amount.value) }, (_, index) => index);
        // [0, 1, 2, 3, 4,].length() = 5
        let i = 0;

        const enqueuePromise = () => {
            if (i >= promiseIds.length) return; // Якщо більше немає запитів
            const currentPromise = new Promise((resolve, reject) => {
                const promiseTimer = setTimeout(() => {
                    const shouldResolve = Math.random() > 0.3;
                    if (shouldResolve) {
                        resolve({ index: i, result: `Promise ${promiseIds[i]} resolved` });
                    } else {
                        reject({ index: i, result: `Promise ${promiseIds[i]} rejected` });
                    }
                    i++;

                    clearTimeout(promiseTimer);
                }, Number(delayStep.value));
            });

            currentPromise
                .then((data) => {
                    Notiflix.Notify.success(`Result :>> ${data.result}`);
                    executePromise(promiseIds, data);
                })
                .catch((data) => {
                    Notiflix.Notify.failure(`Result :>> ${data.result}`);
                    executePromise(promiseIds, data);
                });
        };

        enqueuePromise();
        clearTimeout(timer);
    }, Number(firstDelay.value));
}
