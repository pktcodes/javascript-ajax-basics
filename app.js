// Fetch built-in
// promised based
// XHR is not wrong, you can complete all our upcoming examples and projects using XHR. Fetch is just alternative approach that has simpler and cleaner syntax. The end result is the same.Still get dynamically, behind the scenes.

const url = "./api/people.json";

/* Returns Promise and the resolve is "response"*/
// const response = fetch(url);
// console.log(response);

// fetch(url)
//   .then((response) => {
//     // Response Object
//     // Useful methods and properties
//     // Convert response into JSON data
//     // Returns Promise

//     console.log(response);
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

/* Using Implicit Return */
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
