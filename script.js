const apiUrl = "https://dummyjson.com/quotes";
const input = document.getElementById("input"); 
const quoteList = document.getElementById("quoteList");

input.addEventListener("input", () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const filteredQuotes = data.quotes.filter((quote) =>
        quote.quote.toLowerCase().includes(input.value.toLowerCase())
      );
      quoteList.innerHTML = "";
      filteredQuotes.forEach((quote) => {
        const listItem = document.createElement("li");
        listItem.textContent = quote.quote;
        quoteList.appendChild(listItem);
      });
      filteredQuotes.length === 0
        ? (quoteList.innerHTML = "<li>No quotes found :(</li>")
        : "";
    })
    .catch(() => {
      quoteList.innerHTML =
        "<li style='color:red;'>Failed to fetch quotes.</li>";
    });
});
