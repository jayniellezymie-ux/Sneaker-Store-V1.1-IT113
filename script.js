// ===== PRODUCTS ARRAY =====
const products = [
    {
        name: "Air Jordan MVP 92",
        price: 8395,
        images: [
            "ShoesImage/JORDAN+MVP+92.avif",
            "ShoesImage/JORDAN+MVP+92 (1).avif",
            "ShoesImage/JORDAN+MVP+92 (2).avif",
            "ShoesImage/JORDAN+MVP+92 (3).avif",
            "ShoesImage/JORDAN+MVP+92 (4).avif",
            "ShoesImage/JORDAN+MVP+92 (5).avif",
            "ShoesImage/JORDAN+MVP+92 (6).avif",
            "ShoesImage/JORDAN+MVP+92 (7).avif"
        ],
        desc: "How do you top the AJ7? You reimagine it with a low-top silhouette. We started with the layered upper and iconic midsole that turned the original into an instant classic. Then we added textile accents and a padded, low-cut collar to give you a fresh, modern look.",
        category: "Mens",
        onSale: false,
        featured: true
    },
    {
        name: "Jordan Flight Court",
        price: 5795,
        images: [
            "ShoesImage/JORDAN+FLIGHT+COURT.avif",
            "ShoesImage/JORDAN+FLIGHT+COURT (1).avif",
            "ShoesImage/JORDAN+FLIGHT+COURT (2).avif",
            "ShoesImage/JORDAN+FLIGHT+COURT (3).avif",
            "ShoesImage/JORDAN+FLIGHT+COURT (4).avif",
            "ShoesImage/JORDAN+FLIGHT+COURT (5).avif",
            "ShoesImage/JORDAN+FLIGHT+COURT (6).avif",
            "ShoesImage/JORDAN+FLIGHT+COURT (7).avif"
        ],
        desc: "Inspired by the past, built for tomorrow. We remixed elements from the AJ3, AJ4 and AJ5 to create a fresh take on the classics. Smooth leather and soft suede give you style and durability while textile panels add breathability. Plus, embroidered details infuse these kicks with Jordan heritage.",
        category: "Mens",
        onSale: true,
        featured: false
    },
    {
        name: "Jordan CMFT Era",
        price: 6995,
        images: [
            "ShoesImage/JORDAN+CMFT+ERA.avif",
            "ShoesImage/JORDAN+CMFT+ERA (1).avif",
            "ShoesImage/JORDAN+CMFT+ERA (2).avif",
            "ShoesImage/JORDAN+CMFT+ERA (3).avif",
            "ShoesImage/JORDAN+CMFT+ERA (4).avif",
            "ShoesImage/JORDAN+CMFT+ERA (5).avif",
            "ShoesImage/JORDAN+CMFT+ERA (6).avif",
            "ShoesImage/JORDAN+CMFT+ERA (7).avif"
        ],
        desc: "Good lookin' shoes you can wear all day? It's got to be the Jordan CMFT Era. With style that comes straight from the greats (we're talking about the AJ1 and AJ6, of course), these kicks easily take you from morning to night. Plus, breathable materials up top and soft foam underfoot help these sneakers live up to their name.",
        category: "Mens",
        onSale: true,
        featured: false
    },
    {
        name: "Air Jordan 11 Retro 'Gamma'",
        price: 11895,
        images: [
            "ShoesImage/AIR+JORDAN+11+RETRO.avif",
            "ShoesImage/AIR+JORDAN+11+RETRO (1).avif",
            "ShoesImage/AIR+JORDAN+11+RETRO (2).avif",
            "ShoesImage/AIR+JORDAN+11+RETRO (3).avif",
            "ShoesImage/AIR+JORDAN+11+RETRO (4).avif",
            "ShoesImage/AIR+JORDAN+11+RETRO (5).avif",
            "ShoesImage/AIR+JORDAN+11+RETRO (6).avif",
            "ShoesImage/AIR+JORDAN+11+RETRO (7).avif"
        ],
        desc: "Let's cut to the chase—the AJ11 is all-time. MJ won 72 games and a title while wearing 'em. Now, the icon returns. From its slick patent leather mudguard to the frosted outsole, this Tinker Hatfield design brings the off-court allure. Plus, it comes complete with full-length Air cushioning for supreme comfort.",
        category: "Mens",
        onSale: false,
        featured: true
    },
    {
        name: "Air Jordan 1 Low SE",
        price: 7295,
        images: [
            "ShoesImage/AIR+JORDAN+1+LOW+SE.avif",
            "ShoesImage/AIR+JORDAN+1+LOW+SE (1).avif",
            "ShoesImage/AIR+JORDAN+1+LOW+SE (2).avif",
            "ShoesImage/AIR+JORDAN+1+LOW+SE (3).avif",
            "ShoesImage/AIR+JORDAN+1+LOW+SE (4).avif",
            "ShoesImage/AIR+JORDAN+1+LOW+SE (5).avif",
            "ShoesImage/AIR+JORDAN+1+LOW+SE (6).avif",
            "ShoesImage/AIR+JORDAN+1+LOW+SE (7).avif"
        ],
        desc: "Stay fresh with every step. This low-top take on the Air Jordan 1 is crafted with leather and suede, giving the legendary silhouette a premium feel that stands the test of time.",
        category: "Mens",
        onSale: false,
        featured: false
    },
    {
        name: "Air Jordan 1 Mid",
        price: 7095,
        images: [
            "ShoesImage/AIR+JORDAN+1+MID.avif",
            "ShoesImage/AIR+JORDAN+1+MID (1).avif",
            "ShoesImage/AIR+JORDAN+1+MID (2).avif",
            "ShoesImage/AIR+JORDAN+1+MID (3).avif",
            "ShoesImage/AIR+JORDAN+1+MID (4).avif",
            "ShoesImage/AIR+JORDAN+1+MID (5).avif",
            "ShoesImage/AIR+JORDAN+1+MID (6).avif",
            "ShoesImage/AIR+JORDAN+1+MID (7).avif"
        ],
        desc: "Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.",
        category: "Mens",
        onSale: false,
        featured: false
    },

    {
        name: "Jordan Trunner O/S",
        price: 6295,
        images: [
            "ShoesImage1/WMNS+JORDAN+TRUNNER+O_S.avif",
            "ShoesImage1/WMNS+JORDAN+TRUNNER+O_S (1).avif",
            "ShoesImage1/WMNS+JORDAN+TRUNNER+O_S (2).avif",
            "ShoesImage1/WMNS+JORDAN+TRUNNER+O_S (3).avif",
            "ShoesImage1/WMNS+JORDAN+TRUNNER+O_S (4).avif",
            "ShoesImage1/WMNS+JORDAN+TRUNNER+O_S (5).avif",
            "ShoesImage1/WMNS+JORDAN+TRUNNER+O_S (6).avif",
            "ShoesImage1/WMNS+JORDAN+TRUNNER+O_S (7).avif"
        ],
        desc: "When you wanna look as comfortable as you feel, it has to be the Trunner O/S. This modern take on the original Jordan Trunner features breathable mesh and suede that keeps the upper flexible, while responsive foam underfoot gives you a soft step, every step.",
        category: "Womens",
        onSale: false,
        featured: false
    },
    {
        name: "Air Jordan 1 Low",
        price: 6395,
        images: [
            "ShoesImage1/WMNS+AIR+JORDAN+1+LOW.avif",
            "ShoesImage1/WMNS+AIR+JORDAN+1+LOW (1).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+1+LOW (2).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+1+LOW (3).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+1+LOW (4).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+1+LOW (5).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+1+LOW (6).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+1+LOW (7).avif"
        ],
        desc: "Always in, always fresh. The Air Jordan 1 Low sets you up with a piece of Jordan history and heritage that's comfortable all day. Choose your colours, then step out in the iconic profile that's built with a high-end mix of materials and encapsulated Air in the heel.",
        category: "Womens",
        onSale: false,
        featured: false
    },
    {
        name: "Air Jordan 1 Low Se",
        price: 7295,
        images: [
            "ShoesImage1/WMNS+AIR+JORDAN+1+LOW+SE.avif",
            "ShoesImage1/WMNS+AIR+JORDAN+1+LOW+SE.avif (1).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+1+LOW+SE.avif (2).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+1+LOW+SE.avif (3).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+1+LOW+SE.avif (4).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+1+LOW+SE.avif (5).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+1+LOW+SE.avif (6).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+1+LOW+SE.avif (7).avif"
        ],
        desc: "Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. This version incorporates woven textures and summery colours for a seasonal refresh that pairs perfectly with any fit.",
        category: "Womens",
        onSale: false,
        featured: true
    },
    {
        name: "Jordan Flight Court",
        price: 5795,
        images: [
            "ShoesImage1/WMNS+JORDAN+FLIGHT+COURT.avif",
            "ShoesImage1/WMNS+JORDAN+FLIGHT+COURT (1).avif",
            "ShoesImage1/WMNS+JORDAN+FLIGHT+COURT (2).avif",
            "ShoesImage1/WMNS+JORDAN+FLIGHT+COURT (3).avif",
            "ShoesImage1/WMNS+JORDAN+FLIGHT+COURT (4).avif",
            "ShoesImage1/WMNS+JORDAN+FLIGHT+COURT (5).avif",
            "ShoesImage1/WMNS+JORDAN+FLIGHT+COURT (6).avif",
            "ShoesImage1/WMNS+JORDAN+FLIGHT+COURT (7).avif"
        ],
        desc: "Inspired by the past, built for tomorrow. We remixed elements from the AJ3, AJ4 and AJ5 to create a fresh take on the classics. Smooth leather and soft suede give you style and durability while textile panels add breathability. Plus, embroidered details infuse these kicks with Jordan heritage.",
        category: "Womens",
        onSale: true,
        featured: false
    },
    {
        name: "Air Jordan 4 Retro 'Pale Ivory and Tough Red'",
        price: 12095,
        images: [
            "ShoesImage1/WMNS+AIR+JORDAN+4+RETRO.avif",
            "ShoesImage1/WMNS+AIR+JORDAN+4+RETRO (1).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+4+RETRO (2).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+4+RETRO (3).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+4+RETRO (4).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+4+RETRO (5).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+4+RETRO (6).avif",
            "ShoesImage1/WMNS+AIR+JORDAN+4+RETRO (7).avif"
        ],
        desc: "What's better than a fresh pair of AJ4s? Not much, if you ask us. This sweet colourway is rendered in smooth leather for a premium feel. Tough Red accents on a Pale Ivory base add stripped-down style that shines.",
        category: "Womens",
        onSale: false,
        featured: true
    },
    {
        name: "Jordan Heir Series 2 PF",
        price: 6295,
        images: [
            "ShoesImage1/WMNS+JORDAN+HEIR+SERIES+2+PF.avif",
            "ShoesImage1/WMNS+JORDAN+HEIR+SERIES+2+PF (1).avif",
            "ShoesImage1/WMNS+JORDAN+HEIR+SERIES+2+PF (2).avif",
            "ShoesImage1/WMNS+JORDAN+HEIR+SERIES+2+PF (3).avif",
            "ShoesImage1/WMNS+JORDAN+HEIR+SERIES+2+PF (4).avif",
            "ShoesImage1/WMNS+JORDAN+HEIR+SERIES+2+PF (5).avif",
            "ShoesImage1/WMNS+JORDAN+HEIR+SERIES+2+PF (6).avif",
            "ShoesImage1/WMNS+JORDAN+HEIR+SERIES+2+PF (7).avif"
        ],
        desc: "This game demands everything. Designed with insights from women on the court, the Jordan Heir Series helps you play shifty and stay low to the ground. A thicker drop-in midsole gives you extra comfort plus mobility, while an external cage provides a fit that conforms to your foot for added support. Just what you need in a shoe: everything.",
        category: "Womens",
        onSale: true,
        featured: false
    },

    {
        name: "Air Jordan 1 Mid Alt SE",
        price: 5695,
        images: [
            "ShoesImage2/AIR+JORDAN+1+MID+SE+(GS).avif",
            "ShoesImage2/AIR+JORDAN+1+MID+SE+(GS) (1).avif",
            "ShoesImage2/AIR+JORDAN+1+MID+SE+(GS) (2).avif",
            "ShoesImage2/AIR+JORDAN+1+MID+SE+(GS) (3).avif",
            "ShoesImage2/AIR+JORDAN+1+MID+SE+(GS) (4).avif",
            "ShoesImage2/AIR+JORDAN+1+MID+SE+(GS) (5).avif",
            "ShoesImage2/AIR+JORDAN+1+MID+SE+(GS) (6).avif",
            "ShoesImage2/AIR+JORDAN+1+MID+SE+(GS) (7).avif"
        ],
        desc: "This AJ1 reimagines MJ's first signature model with a fresh remix for the season ahead. Floral-inspired colours celebrate summertimes spent with friends, while premium materials, soft cushioning and a padded ankle collar offer total support—so you can make the most of your sunny afternoons.",
        category: "Kids",
        onSale: false,
        featured: true
    },
    {
        name: "Jordan Jr Tiempo Streetgato SE",
        price: 4495,
        images: [
            "ShoesImage2/JR+TIEMPO+STREETGATO+SE.avif",
            "ShoesImage2/JR+TIEMPO+STREETGATO+SE (1).avif",
            "ShoesImage2/JR+TIEMPO+STREETGATO+SE (2).avif",
            "ShoesImage2/JR+TIEMPO+STREETGATO+SE (3).avif",
            "ShoesImage2/JR+TIEMPO+STREETGATO+SE (4).avif",
            "ShoesImage2/JR+TIEMPO+STREETGATO+SE (5).avif",
            "ShoesImage2/JR+TIEMPO+STREETGATO+SE (6).avif",
            "ShoesImage2/JR+TIEMPO+STREETGATO+SE (7).avif"
        ],
        desc: "Street football is all about touch. That's why we designed the Tiempo Streetgato with suede. Its soft texture gives you total command of the ball, so you can wreak havoc on any defense.",
        category: "Kids",
        onSale: false,
        featured: false
    },
    {
        name: "Luka 5 'Venom'",
        price: 5095,
        images: [
            "ShoesImage2/JORDAN+LUKA+5+(GS).avif",
            "ShoesImage2/JORDAN+LUKA+5+(GS) (1).avif",
            "ShoesImage2/JORDAN+LUKA+5+(GS) (2).avif",
            "ShoesImage2/JORDAN+LUKA+5+(GS) (3).avif",
            "ShoesImage2/JORDAN+LUKA+5+(GS) (4).avif",
            "ShoesImage2/JORDAN+LUKA+5+(GS) (5).avif",
            "ShoesImage2/JORDAN+LUKA+5+(GS) (6).avif",
            "ShoesImage2/JORDAN+LUKA+5+(GS) (7).avif"
        ],
        desc: "Don't just move—attack. Luka's latest shoe comes with ultra-responsive tech built for players like him: smooth, patient … dangerous. In a colourway inspired by the cold-blooded calm and explosive strike of the vipers that call Slovenia home, the Luka 5 is designed to keep you connected to the court.",
        category: "Kids",
        onSale: false,
        featured: false
    },
    {
        name: "Air Jordan 4 Retro 'Flight Club'",
        price: 8095,
        images: [
            "ShoesImage2/AIR+JORDAN+4+RETRO+OG+FC+(GS).avif",
            "ShoesImage2/AIR+JORDAN+4+RETRO+OG+FC+(GS) (1).avif",
            "ShoesImage2/AIR+JORDAN+4+RETRO+OG+FC+(GS) (2).avif",
            "ShoesImage2/AIR+JORDAN+4+RETRO+OG+FC+(GS) (3).avif",
            "ShoesImage2/AIR+JORDAN+4+RETRO+OG+FC+(GS) (4).avif",
            "ShoesImage2/AIR+JORDAN+4+RETRO+OG+FC+(GS) (5).avif",
            "ShoesImage2/AIR+JORDAN+4+RETRO+OG+FC+(GS) (6).avif",
            "ShoesImage2/AIR+JORDAN+4+RETRO+OG+FC+(GS) (7).avif"
        ],
        desc: "If you wanted to fly like MJ, you had to join the club. The Air Jordan Flight Club. This AJ4 honours the heritage and nostalgia of the popular mail-in membership programme from the '80s and '90s. A smooth white leather upper features black and red accents, bringing more Jumpman DNA to the all-time classic. Bold 'Flight Club' logos pay homage to the original era. Complete with all the iconic elements—these are your ultimate fan club flex.",
        category: "Kids",
        onSale: false,
        featured: true
    },{
        name: "Jordan DAY1 EO",
        price: 3595,
        images: [
            "ShoesImage2/JORDAN+DAY1+E.O.+(GS).avif",
            "ShoesImage2/JORDAN+DAY1+E.O.+(GS) (1).avif",
            "ShoesImage2/JORDAN+DAY1+E.O.+(GS) (2).avif",
            "ShoesImage2/JORDAN+DAY1+E.O.+(GS) (3).avif",
            "ShoesImage2/JORDAN+DAY1+E.O.+(GS) (4).avif",
            "ShoesImage2/JORDAN+DAY1+E.O.+(GS) (5).avif",
            "ShoesImage2/JORDAN+DAY1+E.O.+(GS) (6).avif",
            "ShoesImage2/JORDAN+DAY1+E.O.+(GS) (7).avif"
        ],
        desc: "This pair of Js is ready for all your basketball games and all your sports days. A collapsible heel helps you slip them on and hit the court in seconds—even though the shoe has laces, you don't need to touch 'em! The Jumpman branding and a concrete print moulded into the midsole add iconic drip.",
        category: "Kids",
        onSale: true,
        featured: false
    },{
        name: "Tatum 4",
        price: 3895,
        images: [
            "ShoesImage2/JORDAN+TATUM+4+(PS).avif",
            "ShoesImage2/JORDAN+TATUM+4+(PS) (1).avif",
            "ShoesImage2/JORDAN+TATUM+4+(PS) (2).avif",
            "ShoesImage2/JORDAN+TATUM+4+(PS) (3).avif",
            "ShoesImage2/JORDAN+TATUM+4+(PS) (4).avif",
            "ShoesImage2/JORDAN+TATUM+4+(PS) (5).avif",
            "ShoesImage2/JORDAN+TATUM+4+(PS) (6).avif",
            "ShoesImage2/JORDAN+TATUM+4+(PS) (7).avif"
        ],
        desc: "The Tatum 4 is a constant evolution, just like your little one's needs. This version has elastic laces that help make these shoes easy to get on and off. The lightweight upper contours to kids' feet, giving them a fit that feels secure so they can make the most out of game time and playtime.",
        category: "Kids",
        onSale: true,
        featured: false
    },
    

];

// ===== FAVORITES =====
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
favorites = favorites.map(i => parseInt(i));

// ===== CART =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===== CATEGORY PAGE =====
function populateProducts(category){
    const grid = document.getElementById("product-grid");
    if(!grid) return;

    let filtered = category === "Sale" ? products.filter(p => p.onSale) : products.filter(p => p.category === category);

    grid.innerHTML = "";

    filtered.forEach(product => {
        const idx = products.indexOf(product);
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <a href="Product.html?index=${idx}">
                <img src="${product.images[0]}" alt="${product.name}">
                <h3>${product.name}</h3>
                <div class="category">${product.category}</div>
                <div class="price">₱${product.price}</div>
            </a>
        `;

        grid.appendChild(card);
    });
}

// ===== PRODUCT PREVIEW PAGE =====
function populatePreview(){
    const urlParams = new URLSearchParams(window.location.search);
    const index = parseInt(urlParams.get('index'));
    if(isNaN(index) || !products[index]) return;

    const product = products[index];

    // MAIN IMAGE
    const mainImage = document.getElementById("main-image");
    if(mainImage){
        mainImage.src = product.images[0];
        mainImage.alt = product.name;
    }

    // THUMBNAILS
    const thumbContainer = document.querySelector(".thumbnail-list");
    if(thumbContainer){
        thumbContainer.innerHTML = "";
        product.images.forEach((img, i) => {
            const thumb = document.createElement("img");
            thumb.src = img;
            thumb.className = "thumb";
            if(i===0) thumb.classList.add("active");

            thumb.addEventListener("click", () => {
                mainImage.src = img;
                document.querySelectorAll(".thumb").forEach(t=>t.classList.remove("active"));
                thumb.classList.add("active");
            });

            thumbContainer.appendChild(thumb);
        });
    }

    // DETAILS
    document.querySelector('.preview-details h1').textContent = product.name;
    document.querySelector('.preview-details h2').textContent = "₱" + product.price;
    document.querySelector('.preview-details .description').textContent = product.desc;

    // BACK BUTTON
    const backBtn = document.getElementById('back-btn');
    if(backBtn){
        backBtn.onclick = () => window.history.back();
    }

    // FAVORITE BUTTON
    const favoriteBtn = document.getElementById("favorite-btn");
    if(favoriteBtn){
        favoriteBtn.classList.toggle("active", favorites.includes(index));

        favoriteBtn.onclick = () => {
            if(favorites.includes(index)){
                favorites = favorites.filter(i => i!==index);
            } else {
                favorites.push(index);
            }
            localStorage.setItem("favorites", JSON.stringify(favorites));
            favoriteBtn.classList.toggle("active");
        };
    }

    setupSizeButtons();

    // ADD TO CART
    const addToCartBtn = document.getElementById("add-to-cart");
    if(addToCartBtn){
        addToCartBtn.onclick = () => {
            const sizeSelected = document.querySelector('.size-btn.active');
            if(!sizeSelected){ alert("Please select a size!"); return; }
            const size = sizeSelected.textContent;

            const existing = cart.find(item => item.name===product.name && item.size===size);
            if(existing){ existing.qty++; }
            else{ cart.push({ name: product.name, price: product.price, size, qty:1 }); }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} (Size: ${size}) added to bag!`);
        };
    }
}

// ===== BAG PAGE =====
function populateBag(){
    const bagGrid = document.getElementById("bag-grid");
    if(!bagGrid) return;

    cart = JSON.parse(localStorage.getItem("cart")) || [];
    bagGrid.innerHTML = "";

    if(cart.length===0){
        bagGrid.innerHTML = `<p>Your bag is empty</p><a href="index.html"><button class="shop-btn">Go Shop</button></a>`;
        document.getElementById("bag-total").textContent = "0";
        return;
    }

    let total=0;
    cart.forEach((item,index)=>{
        const itemTotal = item.price * item.qty;
        total+=itemTotal;

        const div = document.createElement("div");
        div.className="bag-item";

        div.innerHTML = `
            <strong>${item.name} (Size: ${item.size})</strong><br>
            ₱${item.price}
            <div class="qty-controls">
                <button onclick="changeQty(${index},-1)">−</button>
                ${item.qty}
                <button onclick="changeQty(${index},1)">+</button>
            </div>
            <strong>₱${itemTotal}</strong>
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;
        bagGrid.appendChild(div);
    });

    document.getElementById("bag-total").textContent = total;
}

// ===== CART FUNCTIONS =====
function changeQty(index, change){
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].qty+=change;
    if(cart[index].qty<=0) cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    populateBag();
}

function removeItem(index){
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    populateBag();
}

// ===== SIZE BUTTONS =====
function setupSizeButtons() {
    const sizeButtons = document.querySelectorAll(".size-btn");
    sizeButtons.forEach(btn=>{
        btn.onclick = () => {
            sizeButtons.forEach(b=>b.classList.remove("active"));
            btn.classList.add("active");
        };
    });
}

// ===== CHECKOUT =====
function setupCheckout(){
    const itemsDiv = document.getElementById("checkout-items");
    const totalSpan = document.getElementById("checkout-total");
    const placeOrderBtn = document.getElementById("place-order-btn");
    if(!itemsDiv || !totalSpan || !placeOrderBtn) return;

    cart = JSON.parse(localStorage.getItem("cart")) || [];

    function renderCart(){
        itemsDiv.innerHTML = "";
        let total=0;
        if(cart.length===0){ itemsDiv.innerHTML="<p>Your bag is empty.</p>"; totalSpan.textContent="0"; return; }

        cart.forEach((item,index)=>{
            const itemTotal = item.price*item.qty;
            total+=itemTotal;

            const div = document.createElement("div");
            div.className="checkout-item";
            div.innerHTML=`
                <div><strong>${item.name} (Size: ${item.size})</strong><br>₱${item.price}</div>
                <div class="qty-controls">
                    <button data-index="${index}" data-change="-1">−</button>
                    ${item.qty}
                    <button data-index="${index}" data-change="1">+</button>
                </div>
                <strong>₱${itemTotal}</strong>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
            itemsDiv.appendChild(div);
        });

        totalSpan.textContent=total;

        document.querySelectorAll('.qty-controls button').forEach(btn=>{
            btn.onclick=()=>{
                const idx=parseInt(btn.dataset.index);
                const change=parseInt(btn.dataset.change);
                cart[idx].qty+=change;
                if(cart[idx].qty<=0) cart.splice(idx,1);
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            };
        });

        document.querySelectorAll('.remove-btn').forEach(btn=>{
            btn.onclick=()=>{
                const idx=parseInt(btn.dataset.index);
                cart.splice(idx,1);
                localStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            };
        });
    }

    placeOrderBtn.onclick = ()=>{
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const city = document.getElementById("city").value;
        const phone = document.getElementById("phone").value;
        const payment = document.querySelector('input[name="payment"]:checked')?.value;

        if(!name||!address||!city||!phone||!payment){ alert("Please fill all details."); return; }

        const order = { cart, total: totalSpan.textContent, shipping:{name,address,city,phone}, payment };
        localStorage.setItem("order", JSON.stringify(order));
        localStorage.removeItem("cart");
        window.location.href="Confirmation.html";
    };

    renderCart();
}

// ===== FEATURED PRODUCTS =====
function populateFeaturedProducts(){
    const featuredContainer = document.getElementById("featured-products");
    if(!featuredContainer) return;

    const featuredProducts = products.map((p,i)=>({...p, originalIndex:i, featured:p.featured||false}))
                                     .filter(p=>p.featured);

    featuredContainer.innerHTML="";
    featuredProducts.forEach(product=>{
        const card = document.createElement("div");
        card.className="card";
        card.innerHTML=`
            <a href="Product.html?index=${product.originalIndex}">
                <img src="${product.images[0]}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₱${product.price}</p>
            </a>
        `;
        featuredContainer.appendChild(card);
    });
}

// ===== AUTO RUN =====
document.addEventListener("DOMContentLoaded", ()=>{
    const category = document.body.dataset.category;

    if(category) populateProducts(category);
    if(document.querySelector('.product-preview')) populatePreview();
    if(document.body.dataset.page==="bag") populateBag();
    if(document.body.dataset.page==="checkout") setupCheckout();
    if(document.getElementById("featured-products")) populateFeaturedProducts();

    setupSearchBar();
});

function setupSearchBar() {
    const searchInput = document.getElementById("searchBar");
    const grid = document.getElementById("product-grid");

    if (!searchInput || !grid) {
        console.error("Search bar or product grid not found");
        return;
    }

    // get current page category (Mens / Womens / Kids / Sale / undefined)
    const currentCategory = document.body.dataset.category;

    searchInput.addEventListener("keyup", function () {
        const query = this.value.toLowerCase();

        const filtered = products.filter(product => {

            const matchesName = product.name.toLowerCase().includes(query);

            // if page has category, enforce it
            const matchesCategory =
                !currentCategory ||
                (currentCategory === "Sale"
                    ? product.onSale
                    : product.category === currentCategory);

            return matchesName && matchesCategory;
        });

        grid.innerHTML = "";

        if (filtered.length === 0) {
            grid.innerHTML = "<p>No products found</p>";
            return;
        }

        filtered.forEach((product) => {
    const index = products.indexOf(product);

    grid.innerHTML += `
        <div class="product-card">
            <a href="Product.html?index=${index}">
                <img src="${product.images[0]}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₱${product.price}</p>
            </a>
        </div>
    `;
});
    });
}
