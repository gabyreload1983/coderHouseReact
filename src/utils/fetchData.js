export const fetchData = (time, task, condition = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (condition) {
        resolve(task);
      } else {
        reject("Error");
      }
    }, time);
  });
};
