const xhr = new XMLHttpRequest();

xhr.open("GET", "./api/sample.txt");

/* It gets fired when since ready state changes from 0 to 1 when used open() method */
xhr.onreadystatechange = function () {
  // console.log(xhr);
  if (xhr.readyState === 4 && xhr.status === 200) {
    const paragraph = document.createElement("p");
    paragraph.textContent = xhr.responseText;
    document.body.appendChild(paragraph);
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

// It executes first, since the above functionality works asynchronously by browser, only when JavaScript is free then it takes the data from browser
console.log("hello world");
