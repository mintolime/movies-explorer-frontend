export function getTimeFromMins(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return `${hours}ч ${minutes > 0 ? ` ${minutes}м` : ''}`;
};

export const checkPath= (el,location) => el.includes(location.pathname)

