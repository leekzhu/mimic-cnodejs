'use strict';

export default function dateCountFilter() {
  const msAnHour = 3600000;
  const hourAnMonth = 720;
  const hourAnYear = 8640;
  return (input) => {
    let period = Math.ceil((Date.now() - Date.parse(input)) / msAnHour);
    if (period < 24) {
      return period + '小时前';
    } else if (period < hourAnMonth){
      return Math.floor(period / 24) + '天前';
    } else if (period < hourAnYear) {
      return Math.floor(period / hourAnMonth) + '月前';
    } else {
      let now = new Date();
      let then = new Date(input);
      return now.getUTCFullYear() - then.getUTCFullYear + '年前';
    }
    return period + '小时前';
  };
}
