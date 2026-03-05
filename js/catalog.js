const products = [
  {
    nama:"Sofa Minimalis",
    harga:"Rp 2.500.000",
    gambar:"https://via.placeholder.com/400"
  },
  {
    nama:"Meja Kayu",
    harga:"Rp 1.200.000",
    gambar:"https://via.placeholder.com/400"
  },
  {
    nama:"Kursi Santai",
    harga:"Rp 700.000",
    gambar:"https://via.placeholder.com/400"
  }
]

function renderCatalog(){

  const app = document.getElementById("app")

  let html = "<div class='catalog'>"

  products.forEach(p=>{
    html += `
      <div class="product">
        <img src="${p.gambar}">
        <h3>${p.nama}</h3>
        <p>${p.harga}</p>
      </div>
    `
  })

  html += "</div>"

  app.innerHTML = html

}

renderCatalog()
