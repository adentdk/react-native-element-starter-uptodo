export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const dayDiff = (date1: Date, date2: Date) => {
  const diff = date2.getTime() - date1.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

export const getFormattedDate = (date: Date, format: string = 'yyyy-mm-dd') => {
  const day = date.getDate();
  const month = date.getMonth();
  const monthName = MONTH_NAMES[month];
  const year = date.getFullYear();
  return format.replace('dd', day.toString().padStart(2, '0')).replace('mm', (month + 1).toString().padStart(2, '0')).replace('yyyy', year.toString());
};

export const getFormattedDateJson = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return {
    day,
    month,
    year,
    monthName: MONTH_NAMES[date.getMonth()],
  };
};

export const getTimeFromDate = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes}`;
};


export const getTimeJson = (time: string) => {
  const [timeOnly, ampm] = time.split(' ');

  const [hours, minutes] = timeOnly.split(':');

  return {
    hours12: parseInt(hours, 10) % 12,
    hours24: ampm === 'PM' ? parseInt(hours, 10) + 12 : parseInt(hours, 10),
    minutes: parseInt(minutes, 10),
    ampm,
  };
};

export const getFormattedTime = (time: string, format = 'HH:mm') => {
  const { hours12, hours24, minutes, ampm } = getTimeJson(time);

  return format
    .replace('HH', hours24.toString().padStart(2, '0'))
    .replace('hh', hours12.toString().padStart(2, '0'))
    .replace('mm', minutes.toString().padStart(2, '0'))
    .replace('tt', ampm);
};

export const timeAgo = (date: Date) => {
  const diff = Date.now() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }

  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }

  if (hours < 24) {
    return `${hours} hours ago`;
  }

  if (days < 30) {
    return `${days} days ago`;
  }

  if (months < 12) {
    return `${months} months ago`;
  }

  return `${years} years ago`;
};

export const timeAgoJson = (date: Date) => {
  const diff = Date.now() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return {
      value: seconds,
      unit: 'seconds',
    };
  }

  if (minutes < 60) {
    return {
      value: minutes,
      unit: 'minutes',
    };
  }

  if (hours < 24) {
    return {
      value: hours,
      unit: 'hours',
    };
  }

  if (days < 30) {
    return {
      value: days,
      unit: 'days',
    };
  }

  if (months < 12) {
    return {
      value: months,
      unit: 'months',
    };
  }

  return {
    value: years,
    unit: 'years',
  };
};
