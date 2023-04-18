// Fetch built-in
// promised based
// XHR is not wrong, you can complete all our upcoming examples and projects using XHR. Fetch is just alternative approach that has simpler and cleaner syntax. The end result is the same.Still get dynamically, behind the scenes.

const url = "./api/people.jsons";

/* Using Implicit Return */
fetch(url)
  .then((response) => console.log(response))
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
