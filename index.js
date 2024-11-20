
/**
 * Calculates the number of days between two dates.
 *
 * @param {Date} startDate - The start date.
 * @param {Date} endDate - The end date.
 * @param {boolean} [inclusive=true] - Whether to include the start and end dates in the count.
 * @returns {number} The number of days between the dates, or an error message if the end date is earlier than the start date.
 */
function betweenDates(startDate, endDate, inclusive = true) {
  if (startDate > endDate) {
    throw new Error("End date cannot be earlier than the Start date.");
  }
  // Calculate the time difference in milliseconds
  const timeDifference = Math.abs(endDate - startDate);

  // Convert time difference from milliseconds to days
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const daysDifference = Math.ceil(timeDifference / millisecondsPerDay);

  return inclusive ? daysDifference + 1 : ((daysDifference - 1) >= 0 ? daysDifference - 1 : 0);
}

module.exports = betweenDates;
