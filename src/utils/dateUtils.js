import moment from 'moment';

export const getTenDaysAgo = () => {
  return moment().subtract(10, 'days').format('YYYY-MM-DD');
};