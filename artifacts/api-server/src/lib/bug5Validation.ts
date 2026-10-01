
import { now } from 'date-fns';
import { todayDateOnly } from './dateUtils';

function hasFutureBirthDate(dateString: string): boolean {
    const regex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    if (!regex.test(dateString)) {
        return false;
    }

    const [year, month, day] = dateString.split('-').map(Number);
    const today = todayDateOnly(now());
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();

    if (year < todayYear) {
        return false;
    } else if (year === todayYear) {
        if (month < todayMonth) {
            return false;
        } else if (month === todayMonth) {
            return day > todayDay;
        }
    }

    return true;
}

export { hasFutureBirthDate };
