function formatUTCDate(date) {
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  const year = date.getUTCFullYear();

  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }

  return `${year}-${month}-${day}`;
}

const oneDay = 1000 * 60 * 60 * 24;

const formatNowMinusDays = (days) => formatUTCDate(plusDays(days))
const plusDays = (days) => new Date(Date.now() + oneDay * days)

module.exports = {
  formatNowMinusDays,
  formatUTCDate,
  plusDays
}
