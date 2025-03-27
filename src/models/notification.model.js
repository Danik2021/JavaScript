import Notiflix from "notiflix";

function error(message) {
  Notiflix.Notify.failure(message);
}

function warning(message) {
  Notiflix.Notify.warning(message);
}

function info(message) {
  Notiflix.Notify.info(message);
}

export const Notification = {
  error,
  warning,
  info,
};