function getClosestWeek(targetWeek, data) {
  const targetWeekNumber = parseInt(targetWeek);
  let closestData = null;
  let closestWeekDiff = Infinity;

  data.forEach((item) => {
    const itemWeekNumber = parseInt(item.week);
    const weekDiff = Math.abs(itemWeekNumber - targetWeekNumber);

    if (weekDiff < closestWeekDiff) {
      closestWeekDiff = weekDiff;
      closestData = item;
    }
  });

  return closestData;
}

export { getClosestWeek };
