export function getTimeFromMins(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return `${hours}ч ${minutes > 0 ? ` ${minutes}м` : ''}`;
};

export const checkPath = (el, location) => el.includes(location.pathname)

// for API
export const handleResponce = (res) => {
  if (res.ok) {
    return res.json();
  }
  // else if (!res.ok) {

  //   return res.text().then(text => {
  //        console.log(text)
  //      throw new Error(text) })
  // }
  // return Promise.reject(res.status);
  return res.text().then((text) => {
    return Promise.reject({
      status: res.status,
      errorText: JSON.parse(text).message,
      joiMessage: JSON.parse(text).validation?.body.message || ''
    });
  });
};



