import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

export const formatNewsPublishedDate = (date) => {
    return dayjs(date).format('DD MMMM YYYY');
};
