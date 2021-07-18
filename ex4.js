const increase = (num) => {
  const promise = new Promise((resolve, reject) => {
    // resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = num + 10;

      if (result > 50) {
        // 50보다 높으면 에러 발생
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result); // num 값에 +10 후 성공 처리
    }, 1000);
  });
  return promise;
};

increase(0)
  .then((num) => {
    // Promise에서 resolve된 값은 .then을 통해 받아 올 수 있음
    console.log(num);
    return increase(num); // Promise를 리턴하면
  })
  .then((num) => {
    // 또 .then으로 처리 가능
    console.log(num);
    return increase(num);
  })
  .then((num) => {
    console.log(num);
    return increase(num);
  })
  .then((num) => {
    console.log(num);
    return increase(num);
  })
  .then((num) => {
    console.log(num);
    return increase(num);
  })
  .catch((e) => {
    // 도중에 에러가 발생한다면 .catch를 통해 알 수 있음
    console.log(e);
  });
