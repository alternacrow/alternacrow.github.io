import dayjs from 'dayjs';

import localizedFormat from 'dayjs/plugin/localizedFormat';

export const setupDayjs = () => {
  dayjs.extend(localizedFormat);
};

type ISOString = string;
export const localDateStringFromISOString = (
  iosString: ISOString,
  format?: string,
) => {
  return dayjs(iosString).format(format);
};
