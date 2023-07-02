export function getTimeFromMins(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return `${hours}ч ${minutes > 0 ? ` ${minutes}м` : ''}`;
}

export const checkPath = (el, location) => el.includes(location.pathname);

// for API
export const handleResponce = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.text().then((text) => {
    return Promise.reject({
      status: res.status,
      errorText: JSON.parse(text).message,
    });
  });
};
