// Fetch built-in
// promised based
// XHR is not wrong, you can complete all our upcoming examples and projects using XHR. Fetch is just alternative approach that has simpler and cleaner syntax. The end result is the same.Still get dynamically, behind the scenes.

const url = "./api/people.json";

const btn = document.querySelector(".btn");

btn.addEventListener("click", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayPeople(data);
  } catch (error) {
    console.log(error);
  }
});

const displayPeople = (people) => {
  const displayData = people
    .map((person) => {
      const { name } = person;
      return `<p>${name}</p>`;
    })
    .join("");
  const element = document.createElement("div");
  element.innerHTML = displayData;
  document.body.appendChild(element);
};

// console.log(random);

// Here "catch" will not block running the app like the above console statement does as random is not defined
try {
  console.log("hello");
  console.log(random);
} catch (error) {
  console.log(error);
}

console.log("hello");
