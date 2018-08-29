// Define a function getFirstSelector(selector), which accepts a selector and
// returns the first element that matches.
const getFirstSelector = selector => document.querySelector(selector);
// Define a function nestedTarget() that pulls a .target out of #nested
const nestedTarget = () => document.querySelector(".target");
// Passing in "#nested" [by itself] results in a false positive

// Define a function deepestChild() that pulls out the most deeply nested child
// from div#grand-node.
const deepestChild = () => {
  return document.querySelector("#grand-node div div div div");
};
// Define a function increaseRankBy(n) that increases the ranks in all of the
// .ranked-lists by n
const increaseRankBy = n => {
  const ranks = document.querySelectorAll('.ranked-list li');
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  ranks.forEach(rank => rank.innerHTML = parseInt(rank.innerHTML) + n);
};
