/* eslint-disable import/prefer-default-export */

export const formatAMPM = (date: Date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours || 12; // the hour '0' should be '12'
  const minutesFormatted = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours}:${minutesFormatted} ${ampm}`;
  return strTime;
};
