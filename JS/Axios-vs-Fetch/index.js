const axios = require("axios");

//fetch

function main() {
  fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
    const json = await res.json();
    console.log(json);
  });
}

main();

//axios
async function main() {
  const res = await axios.get("https://sum-server.100xdevs.com/todos");
  // const json=await res.json();
  console.log(res.data.todos.length);
}
//axios is smarter so it knows that the data is json so we dont have to res.json() it

//post

function main() {
  fetch("https://sum-server.100xdevs.com/todos", {
    method: "POST",
    headers: {
      Authorization: "bearer",
    },
  }).then(async (res) => {
    const json = await res.json();
    console.log(json);
  });
}

// in axios its easier to just name the axios
//  const res=await axios.post("https://sum-server.100xdevs.com/todos")
