function leapYear(year) {
    if (year < 1582) {
        throw new Error('Gregorian calendar leap years did not exist before 1582.');
    }

    else if (year % 400 === 0) {
        return true;
    }
    else if (year % 100 === 0) {
        return false;
    }
    else if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

export default leapYear;