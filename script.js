const apiUrl = "https://dummyjson.com/quotes";
const input = document.getElementById("input");
const quoteList = document.getElementById("quoteList");
let allQuotes = [];

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    allQuotes = data.quotes;
  })
  .catch(() => {
    quoteList.innerHTML = "<li style='color:red;'>Failed to fetch quotes.</li>";
  });

input.addEventListener("input", () => {
  const filteredQuotes = allQuotes.filter((quote) =>
    quote.quote.toLowerCase().includes(input.value.toLowerCase())
  );
  quoteList.innerHTML = "";
  filteredQuotes.forEach((quote) => {
    const listItem = document.createElement("li");
    listItem.textContent = quote.quote;
    quoteList.appendChild(listItem);
  });
  if (filteredQuotes.length === 0) {
    quoteList.innerHTML = "<li>No quotes found :(</li>";
  }
});
