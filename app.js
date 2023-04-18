// Fetch built-in
// promised based
// XHR is not wrong, you can complete all our upcoming examples and projects using XHR. Fetch is just alternative approach that has simpler and cleaner syntax. The end result is the same.Still get dynamically, behind the scenes.

const url = "./api/people.json";

/* Fetch is a builtin functionality that makes to do less work for setup so we can start implementating */
fetch(url)
  .then((response) => console.log(response))
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

const promise = new Promise((resolve, reject) => {
  let value = false;
  if (value) {
    resolve([1, 2, 5]);
  } else {
    reject(new Error(`The value is ${value}`));
  }
  return promise;
});

promise.then((data) => console.log(data)).catch((error) => console.log(error));
