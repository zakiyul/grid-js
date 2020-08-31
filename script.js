new gridjs.Grid({
  search: true,
  sort: true,
  pagination: {
    limit: 2,
  },
  columns: ["No", "Nama", "Alamat", "Sekolah"],
  data: [
    ["1", "Zakiul Fikri", "Mataram", "SMA Maju Jaya"],
    ["2", "Ahmad Tohir", "Bandung", "SMA Mundur Jaya"],
    ["3", "Taufik Rahim", "Ternate", "SMA Go Jaya"],
    ["4", "Siti Eliza", "Jakarta", "SMA Ikuzo Jaya"],
  ],
}).render(document.getElementById("table"));
