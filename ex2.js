const increase = (num, callback) => {
  setTimeout(() => {
    const result = num + 10;

    if (callback) {
      callback(result);
    }
  }, 1000);
};

increase(0, (result) => {
  console.log(result);
});
