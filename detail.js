let params = new URLSearchParams(window.location.search)
let id = params.get("id")

console.log(id);

fetch(`/data/destination${id}.json`)
// console.log(params);
