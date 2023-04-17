/* To show that data fetching is happening asynchronously (in the background), but not on initial page refresh */

/*  
- JSON is the string format will "GET" from server or sent from  browser "POST"
- Since it is string we will need to "parse"  when we get or "stringify" when sent to server
 */

const url = "./api/people.json";

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  getData(url);
});

function getData(url) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  /* It gets fired when since ready state changes from 0 to 1 when used open() method */
  xhr.onreadystatechange = function () {
    // console.log(xhr);
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);

      const data = JSON.parse(xhr.responseText);
      console.log(data);

      const displayPeople = data
        .map((person) => {
          return `<p>${person.name}</p>`;
        })
        .join("");

      const element = document.createElement("div");
      element.innerHTML = displayPeople;
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        statusText: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };

  /* It sends the request to server, then it displays on the browser */
  xhr.send();
}

// It executes first, since the above functionality works asynchronously by browser, only when JavaScript is free then it takes the data from browser
// console.log("hello world");
