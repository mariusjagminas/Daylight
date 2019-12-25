import moment from 'moment';

export const findNextDate = date => {
	const currentDate = moment(date);
	const currentYear = currentDate.format('YYYY');
	const winterSolsticeDate = moment(`${currentYear}-12-22`);

	const timeInterval = winterSolsticeDate.diff(currentDate);
	const nextDate = winterSolsticeDate.add(timeInterval);

	if (currentDate > winterSolsticeDate) nextDate.add(1, 'y');

	return nextDate.format('Do MMMM YYYY');
};
