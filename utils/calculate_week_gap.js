function calculateWeekGap(date1, date2) {
  const startDate = new Date(date1);
  const endDate = new Date(date2);

  const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());

  const weekDiff = timeDiff / (7 * 24 * 60 * 60 * 1000);

  return Math.floor(weekDiff);
}

export { calculateWeekGap };
