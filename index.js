var t = $("#example").DataTable({
  paging: false,
  info: false,
  search: "sat",
});
$(".dataTables_filter input").addClass("search-query");

fetch("https://api.chiliz.net/openapi/quote/v1/ticker/24hr")
  .then((response) => response.json())
  .then(function (data) {
    for (var k in data) {
      t.row
        .add([
          data[k].symbol,
          data[k].highPrice,
          data[k].lastPrice,
          data[k].lowPrice,
          data[k].openPrice,
          data[k].quoteVolume,
          data[k].volume,
        ])
        .draw(false);
    }
  })
  .catch((error) => {});
