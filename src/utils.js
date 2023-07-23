export const getDataLS = (key) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
};

export const nextWeek = () => {
  const firstDay = new Date();
  const nextWeek = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 1000);
  console.log(nextWeek);
  return nextWeek;
};

export function getNextDay(date, targetDay) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the current date
  const today = new Date(date);

  // Get the index of the target day in daysOfWeek array
  const targetDayIndex = daysOfWeek.indexOf(targetDay);

  // Calculate the difference in days between today and the target day
  let daysUntilTargetDay = targetDayIndex - today.getDay();

  // If the target day is today or already passed this week, add 7 to get the next occurrence
  if (daysUntilTargetDay <= 0) {
    daysUntilTargetDay += 7;
  }

  // Calculate the date of the next target day
  const nextTargetDay = new Date(today);
  nextTargetDay.setDate(today.getDate() + daysUntilTargetDay);

  return nextTargetDay;
}
