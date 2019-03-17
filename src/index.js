/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  if (preferences.length == 0) {
    return 0;
  }

  var exludedNum = [];
  var count = 0;

  for (var i = 0; i < preferences.length; i++) {

    if (exludedNum.indexOf(preferences[i]) != -1) {
      continue;
    }

    if (preferences[i] == (i + 1)) {
      exludedNum.push(preferences[i]);
      continue;
    }

    if ((preferences[preferences[preferences[i] - 1] - 1] - 1) == i) {
      count++;
      exludedNum.push(preferences[i]);
      exludedNum.push(preferences[preferences[i] - 1]);
      exludedNum.push(preferences[preferences[preferences[i] - 1] - 1]);
    }
  }
  return count;
}
