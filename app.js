class Shop {

  static async loadProducts(){

    const res = await fetch('/feeds/posts/default/-/produk?alt=json');

    const data = await res.json();

    const container = document.getElementById("shop");

    if(!data.feed.entry) return;

    data.feed.entry.forEach(post => {

      const title = post.title.$t;

      const content = post.content.$t;

      const imgMatch = content.match(/<img.*?src="(.*?)"/);

      const img = imgMatch ? imgMatch[1] : "";

      container.innerHTML += `
        <div class="product">
          <img src="${img}" loading="lazy">
          <h3>${title}</h3>
        </div>
      `;

    });

  }

}

document.addEventListener("DOMContentLoaded",()=>{
  Shop.loadProducts();
});
