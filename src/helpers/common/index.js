export const normalizeLink = (link) => link.split('://')[1];


const colorMap = {
  bad: ['#FF1A1A', '#FFCCCC'],
  satisfies: ['#EF8C11', '#FCD3A0'],
  good: ['#1AFF79', '#CCFFE1'],
}

export const getColorByPercent = (percent) => {
  if (percent < 0.5) return colorMap.bad;
  if (percent < 0.75) return colorMap.satisfies;

  return colorMap.good;


}