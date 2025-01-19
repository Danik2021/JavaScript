export function executePromise(promiseIds, data) {
    if (promiseIds[data.index + 1] !== undefined) enqueuePromise();
}
