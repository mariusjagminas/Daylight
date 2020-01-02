import moment from "moment";

export const findNextDate = date => {
  const currentDate = moment(date);
  const currentYear = currentDate.format("YYYY");
  const winterSolsticeDate = moment(`${currentYear}-12-21 00:00`);
  const summerSolticeDate = moment(`${currentYear}-06-21 00:00`);
  const nextSummerSolticeDate = moment(`${currentYear}-06-21 00:00`).add(
    1,
    "y"
  );
  let referencePoint = nextSummerSolticeDate;
  if (currentDate < summerSolticeDate) referencePoint = summerSolticeDate;
  if (currentDate > summerSolticeDate && currentDate < winterSolsticeDate)
    referencePoint = winterSolsticeDate;

  const timeInterval = referencePoint.diff(currentDate);
  const nextDate = referencePoint.add(timeInterval);

  return nextDate.format("Do MMMM YYYY");
};
