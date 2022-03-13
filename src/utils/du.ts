import dayjs from 'dayjs';

import localizedFormat from 'dayjs/plugin/localizedFormat';

export const setupDayjs = () => {
  dayjs.extend(localizedFormat);
};

type ISOString = string;
export const localDateStringFromISOString = (
  isoString: ISOString,
  format?: string,
) => {
  return dayjs(isoString).format(format);
};
