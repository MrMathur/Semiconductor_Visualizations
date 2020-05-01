probDistElectron = [];
probDistOpacity = [];
probList = [];

for (let i = 15; i < 400; i++) {
  let prob = i / 100 * Math.exp(-i / 100);
  probDistOpacity[i] = prob;
  for (let j = 0; j < Math.floor(prob * 100); j++) {
    probDistElectron.push(i);
    probList.push(prob);
  }
}
scaleOpacity = (value) => {
  return map(value, Math.min(...probList), 1, 1, 255);
}