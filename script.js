// ===== BOMBAY BINGE — MENU DATA =====
const menuData = [
  {
    category: "Soups",
    emoji: "🍲",
    items: [
      { id: 1,  type: "veg",    name: "Tom Kha Veg",                    price: 225,  aps: false, desc: "Coconut milk broth infused with lemongrass and galangal." },
      { id: 2,  type: "nonveg", name: "Tom Yum Chicken",                price: 235,  aps: false, desc: "Hot and sour Thai broth with lemongrass and mushroom." },
      { id: 3,  type: "nonveg", name: "Tom Yum Prawn",                  price: 265,  aps: false, desc: "Hot and sour Thai broth with lemongrass and mushroom." },
      { id: 4,  type: "nonveg", name: "Alani Chicken Soup",             price: 235,  aps: false, desc: "Mildly spiced Maharashtrian-style clear chicken broth with rustic flavors." },
      { id: 5,  type: "nonveg", name: "Mutton Soup",                    price: 265,  aps: false, desc: "Mildly spiced Maharashtrian-style clear mutton broth with rustic flavors." },
      { id: 6,  type: "nonveg", name: "Anti Inflammatory Fish Stew",    price: 285,  aps: false, desc: "A healing stew of fresh fish, turmeric, ginger, and herbs, crafted to soothe and nourish from within." }
    ]
  },
  {
    category: "Indian Starters — Veg",
    emoji: "🌿",
    items: [
      { id: 7,  type: "veg",    name: "Paneer Bhutta Seekh",            price: 355,  aps: false, desc: "Minced paneer blended with roasted corn and spices, skewered and charred." },
      { id: 8,  type: "veg",    name: "Cheese Malai Broccoli",          price: 355,  aps: false, desc: "Broccoli florets stuffed with cheese and roasted in tandoor." },
      { id: 9,  type: "veg",    name: "Charcoal Smoked Veg Seekh",      price: 315,  aps: false, desc: "Minced mixed vegetable skewers with deep smoky aroma." },
      { id: 10, type: "veg",    name: "Paneer Hilltop",                 price: 365,  aps: false, desc: "Flavor-packed stuffing infused with rustic hill spices, grilled for a smoky, hearty bite." },
      { id: 11, type: "veg",    name: "Achari Tandoori Veg",            price: 355,  aps: false, desc: "Tandoor-roasted vegetables coated in tangy, pickle-spiced marinade." }
    ]
  },
  {
    category: "Indian Starters — Non Veg",
    emoji: "🍗",
    items: [
      { id: 12, type: "nonveg", name: "Aslam Kebab",                    price: 375,  aps: false, desc: "Juicy, spice-marinated kebabs grilled to perfection with rich Mughlai flavors." },
      { id: 13, type: "nonveg", name: "Burasi Tikka",                   price: 375,  aps: false, desc: "Smoky, charred tikka infused with bold spices and a hint of earthy aroma." },
      { id: 14, type: "nonveg", name: "Chicken Angara",                 price: 385,  aps: false, desc: "Fiery, charcoal-smoked chicken tossed in a robust, spicy masala." },
      { id: 15, type: "nonveg", name: "Butter Garlic Chicken Seekh",    price: 375,  aps: false, desc: "Juicy minced chicken seekh kebabs infused with rich butter and roasted garlic, grilled till smoky and succulent." },
      { id: 16, type: "nonveg", name: "Cheesy Kolhapuri Chicken Lollipop", price: 385, aps: false, desc: "Chicken lollipops marinated in fiery Kolhapuri masala, grilled and topped with molten cheese — bold, spicy, and indulgent." },
      { id: 17, type: "nonveg", name: "Achari Chicken Malai Tikka",     price: 375,  aps: false, desc: "Creamy tikka infused with pickle masala and mustard oil." },
      { id: 18, type: "nonveg", name: "Chutney Cheese Chicken Roll",    price: 375,  aps: false, desc: "Spicy chicken rolled with mint chutney and melted cheese in a soft wrap." },
      { id: 19, type: "nonveg", name: "Changezi Chicken Pockets",       price: 375,  aps: false, desc: "Creamy, rich Changezi chicken stuffed in crispy pockets with bold Mughlai flavors." },
      { id: 20, type: "nonveg", name: "Parsi Chicken Cutlet",           price: 375,  aps: false, desc: "Classic Parsi-style spiced chicken cutlet, crumb-fried to golden perfection." },
      { id: 21, type: "nonveg", name: "Jerk Spice Tandoori (Half)",     price: 345,  aps: false, desc: "Tandoori chicken marinated in fiery Caribbean jerk spices with a smoky finish." },
      { id: 22, type: "nonveg", name: "Jerk Spice Tandoori (Full)",     price: 545,  aps: false, desc: "Tandoori chicken marinated in fiery Caribbean jerk spices with a smoky finish." },
      { id: 23, type: "nonveg", name: "Peshawari Tandoori (Half)",      price: 345,  aps: false, desc: "Succulent tandoori chicken with robust Peshawari spices and a rich, earthy taste." },
      { id: 24, type: "nonveg", name: "Peshawari Tandoori (Full)",      price: 545,  aps: false, desc: "Succulent tandoori chicken with robust Peshawari spices and a rich, earthy taste." }
    ]
  },
  {
    category: "Seafood Starters",
    emoji: "🦐",
    items: [
      { id: 25, type: "nonveg", name: "Apollo Fish",                    price: 655,  aps: false, desc: "Andhra-style Apollo fish — crispy, spicy, and tossed in a sizzling garlic-chilli tempering." },
      { id: 26, type: "nonveg", name: "Avakaya Rawas Tikka",            price: 655,  aps: false, desc: "Chunky Rawas cubes infused with bold Avakaya pickle spices and char-grilled with a smoky finish." },
      { id: 27, type: "nonveg", name: "Avakaya Prawns Tikka",           price: 655,  aps: false, desc: "Chunky prawns infused with bold Avakaya pickle spices and char-grilled with a smoky finish." },
      { id: 28, type: "nonveg", name: "Bombil Tawa Rawa Fry",           price: 0,    aps: true,  desc: "Coastal comfort — bombil lightly spiced, rawa-crusted, and tawa-fried to perfection. Also available with Prawns, Rawas, Surmai, Pomfret." },
      { id: 29, type: "nonveg", name: "Mehi Malai Mustard Rawas Tikka", price: 655,  aps: false, desc: "Rawas tikka marinated in a creamy mehi malai mustard blend, grilled to perfection." }
    ]
  },
  {
    category: "Mutton Starters",
    emoji: "🥩",
    items: [
      { id: 30, type: "nonveg", name: "Kakori Seekh",                   price: 475,  aps: false, desc: "Legendary melt-in-mouth kebabs, flavoured with Lucknowi spices and cooked on skewers." },
      { id: 31, type: "nonveg", name: "Piri Piri Mutton Fry",           price: 475,  aps: false, desc: "Spicy, fiery mutton tossed in bold peri-peri masala with a smoky, robust finish." }
    ]
  },
  {
    category: "Asian Starters — Veg",
    emoji: "🥢",
    items: [
      { id: 32, type: "veg",    name: "Fiery 65 Paneer Tikka",          price: 345,  aps: false, desc: "Tandoori-style version of the classic paneer 65 — dry red chili base with curry leaf tadka." },
      { id: 33, type: "veg",    name: "Tamarind & Thai Chili Paneer",   price: 345,  aps: false, desc: "Sweet-sour tamarind glaze with bird's eye chili and kaffir lime over wok-seared paneer." },
      { id: 34, type: "veg",    name: "Paneer Chilli Crisp",            price: 345,  aps: false, desc: "Crispy paneer cubes tossed in garlic-soy glaze with house-made chili crisp, scallions, and toasted sesame — spicy, smoky, and addictive." },
      { id: 35, type: "veg",    name: "Korean Crispy Veg",              price: 325,  aps: false, desc: "Assorted vegetables double-fried and tossed in spicy Korean chilli paste, garlic & sesame." }
    ]
  },
  {
    category: "Asian Starters — Non Veg",
    emoji: "🍜",
    items: [
      { id: 36, type: "nonveg", name: "Malaysian Sambal Chicken",       price: 365,  aps: false, desc: "Crunchy chicken tossed in bold, spicy sambal (no sweetness)." },
      { id: 37, type: "nonveg", name: "Hot Wok Shack Chicken",          price: 365,  aps: false, desc: "A coastal-Asian mashup — shack-style roast chicken wok-tossed in soy, chilli, and garlic." },
      { id: 38, type: "nonveg", name: "Indonesian Chicken Satay",       price: 365,  aps: false, desc: "Chargrilled skewers of marinated chicken served with a rich, nutty peanut sauce and bold Southeast Asian flavors." },
      { id: 39, type: "nonveg", name: "Truffle Honey Mustard Wings",    price: 365,  aps: false, desc: "Baked wings glazed with Dijon, honey, and a hint of truffle oil — indulgent and aromatic." },
      { id: 40, type: "nonveg", name: "Bangkok Street Chicken",         price: 365,  aps: false, desc: "Wok-tossed chicken bursting with Thai street-style flavors, balanced with spice, tang, and a hint of sweetness." }
    ]
  },
  {
    category: "Asian Seafood",
    emoji: "🦞",
    items: [
      { id: 41, type: "nonveg", name: "Shanghai Rawas",                 price: 665,  aps: false, desc: "Wok-tossed rawas in a bold Shanghai-style sauce with garlic, soy, and a hint of spice." },
      { id: 42, type: "nonveg", name: "Shanghai Prawns",                price: 665,  aps: false, desc: "Wok-tossed prawns in a bold Shanghai-style sauce with garlic, soy, and a hint of spice." },
      { id: 43, type: "nonveg", name: "Butter Garlic Rawas",            price: 665,  aps: false, desc: "Succulent rawas tossed in rich butter, garlic, and herbs for a smooth, flavorful bite." },
      { id: 44, type: "nonveg", name: "Butter Garlic Prawns",           price: 665,  aps: false, desc: "Succulent prawns tossed in rich butter, garlic, and herbs for a smooth, flavorful bite." }
    ]
  },
  {
    category: "Asian Rice & Noodles",
    emoji: "🍚",
    items: [
      { id: 45, type: "veg",    name: "Burnt Garlic Tom Yum Rice",      price: 385,  aps: false, desc: "Fiery Thai-style rice tossed with burnt garlic, lemongrass, and bold Tom Yum spices." },
      { id: 46, type: "veg",    name: "Thai Green Curry Rice Bowl",     price: 425,  aps: false, desc: "Fragrant jasmine rice served with green curry vegetables and Thai basil." },
      { id: 47, type: "veg",    name: "Sambal Egg Fried Rice",          price: 355,  aps: false, desc: "Indonesian-style egg rice with fiery sambal, shallots, and spring onions." },
      { id: 48, type: "nonveg", name: "Korean Gochujang Chicken Rice Bowl", price: 375, aps: false, desc: "Spicy gochujang-glazed chicken over sticky rice with sesame, scallions, and fried egg." },
      { id: 49, type: "nonveg", name: "Chicken Katsu Rice Bowl",        price: 375,  aps: false, desc: "Crispy fried chicken cutlet over sticky rice with katsu curry drizzle and pickled veg." },
      { id: 50, type: "nonveg", name: "Dragon Chicken Noodles",         price: 365,  aps: false, desc: "Spicy noodles with crispy chicken in a sweet-hot dragon sauce." },
      { id: 51, type: "veg",    name: "Singapore Style Curry Noodles",  price: 345,  aps: false, desc: "Curried dry noodles tossed with bell peppers, cabbage, and curry powder." },
      { id: 52, type: "nonveg", name: "Dan Dan Chicken Noodles",        price: 375,  aps: false, desc: "Spicy Sichuan-style noodles with minced meat, scallions, and a rich chilli-peanut sauce." },
      { id: 53, type: "nonveg", name: "Prawn XO Noodles",               price: 565,  aps: false, desc: "Dry noodles wok-fried in bold XO sauce with seared prawns and garlic." }
    ]
  },
  {
    category: "Indian Mains — Veg",
    emoji: "🫕",
    items: [
      { id: 54, type: "veg",    name: "Ghee Palak Paneer",              price: 375,  aps: false, desc: "Creamy spinach and soft paneer simmered in aromatic ghee for a rich, comforting flavor." },
      { id: 55, type: "veg",    name: "Mixed Veg in Poppy Seed & Green Chili Gravy", price: 365, aps: false, desc: "Bengali-style mixed vegetable curry in a creamy khus khus (poppy seed) base with fresh green chili heat." },
      { id: 56, type: "veg",    name: "Mughlai Badami Paneer",          price: 385,  aps: false, desc: "Royal-style curry with creamy almond base, saffron, and light cardamom — subtle and rich." },
      { id: 57, type: "veg",    name: "Corn & Spinach Kofta",           price: 385,  aps: false, desc: "Crispy corn and spinach balls simmered in mildly spiced yellow curry — creamy and balanced." },
      { id: 58, type: "veg",    name: "Paneer Tikka Lababdar",          price: 385,  aps: false, desc: "Charred paneer tikka folded into rich onion-tomato gravy." },
      { id: 59, type: "veg",    name: "Paneer Koliwada Masala",         price: 385,  aps: false, desc: "Crispy paneer cubes simmered in spicy koli-style red gravy." }
    ]
  },
  {
    category: "Indian Mains — Chicken",
    emoji: "🍛",
    items: [
      { id: 60, type: "nonveg", name: "Anjeer Murgh Korma",             price: 385,  aps: false, desc: "Royal-style chicken curry simmered in a luxurious saffron and fig cream gravy — mildly sweet, rich, and aromatic." },
      { id: 61, type: "nonveg", name: "Coconut Vinegar Vindaloo Chicken", price: 385, aps: false, desc: "Goan-style fiery chicken curry with cold-pressed coconut vinegar, garlic, and chili — tangy, bold, and tropical." },
      { id: 62, type: "nonveg", name: "Bombay Tawa Chicken Masala",     price: 385,  aps: false, desc: "Street-style spicy chicken finished on iron tawa with butter & pav masala notes." },
      { id: 63, type: "nonveg", name: "Chicken Kadai Khurchan",         price: 385,  aps: false, desc: "Shredded tandoori chicken tossed with bell peppers, onions, and smoky kadai masala — semi-dry, spicy, and full of texture." },
      { id: 64, type: "nonveg", name: "Railway Chicken Curry",          price: 385,  aps: false, desc: "Classic Anglo-Indian chicken curry with a tangy, spiced gravy inspired by old railway journeys." }
    ]
  },
  {
    category: "Indian Mains — Mutton",
    emoji: "🥘",
    items: [
      { id: 65, type: "nonveg", name: "Kharda Mutton",                  price: 475,  aps: false, desc: "Green chilli-garlic crushed masala cooked with tender mutton pieces." },
      { id: 66, type: "nonveg", name: "Matton Varhadi",                 price: 475,  aps: false, desc: "Vidarbha-style spicy gravy with strong garam masala hit." },
      { id: 67, type: "nonveg", name: "Mutton Dalcha",                  price: 475,  aps: false, desc: "Lentil-based curry with tangy-spicy balance, perfect with rice." },
      { id: 68, type: "nonveg", name: "Mutton Nihari – Mohalla Style",  price: 475,  aps: false, desc: "Overnight slow-cooked shank in silky, spice-rich gravy finished with ginger juliennes." }
    ]
  },
  {
    category: "Indian Mains — Seafood",
    emoji: "🐟",
    items: [
      { id: 69, type: "nonveg", name: "Malvani Fish Curry",             price: 0,    aps: true,  desc: "Fresh coconut, roasted spices & kokum — bold, slightly spicy coastal gravy." },
      { id: 70, type: "nonveg", name: "Paplet Hirwa Masala",            price: 0,    aps: true,  desc: "Pomfret in green coriander-coconut gravy." }
    ]
  },
  {
    category: "Dal",
    emoji: "🫙",
    items: [
      { id: 71, type: "veg",    name: "Yellow Dal Tadka",               price: 275,  aps: false, desc: "Classic yellow lentils tempered with ghee, garlic, and red chillies — comforting and flavorful." },
      { id: 72, type: "veg",    name: "Dal Bukhara",                    price: 315,  aps: false, desc: "Black urad dal simmered overnight in tomato, butter, and cream, enriched with Bukhara seeds." }
    ]
  },
  {
    category: "Rice & Pulao",
    emoji: "🍚",
    items: [
      { id: 73, type: "veg",    name: "Mushroom Khichdi with Thyme Ghee Tadka", price: 315, aps: false, desc: "Wild mushrooms slow-cooked with moong dal rice, finished with thyme ghee and truffle oil." },
      { id: 74, type: "veg",    name: "Hyderabadi Matka Biryani — Veg",  price: 385, aps: false, desc: "Traditional Hyderabadi biryani slow-cooked in a clay pot for bold and rustic depth." },
      { id: 75, type: "nonveg", name: "Hyderabadi Matka Biryani — Chicken", price: 425, aps: false, desc: "Traditional Hyderabadi chicken biryani slow-cooked in a clay pot for bold and rustic depth." },
      { id: 76, type: "nonveg", name: "Hyderabadi Matka Biryani — Mutton", price: 525, aps: false, desc: "Traditional Hyderabadi mutton biryani slow-cooked in a clay pot for bold and rustic depth." },
      { id: 77, type: "veg",    name: "Khandeshi Masala Bhat",          price: 315,  aps: false, desc: "Spicy Maharashtrian-style rice cooked with black masala, garlic, and earthy village flavors." },
      { id: 78, type: "veg",    name: "Steam Rice / Ghee Indrayani Rice", price: 175, aps: false, desc: "Plain steamed rice or fragrant Indrayani rice finished with a drizzle of ghee." }
    ]
  },
  {
    category: "Indian Breads",
    emoji: "🫓",
    items: [
      { id: 79, type: "veg",    name: "Tandoori Roti",                  price: 35,   aps: false, desc: "Classic whole wheat roti baked fresh in the tandoor." },
      { id: 80, type: "veg",    name: "Naan",                           price: 65,   aps: false, desc: "Soft, fluffy naan baked in the tandoor." },
      { id: 81, type: "veg",    name: "Lachha Paratha",                 price: 75,   aps: false, desc: "Flaky, layered whole wheat paratha from the tandoor." },
      { id: 82, type: "veg",    name: "Missi Roti",                     price: 75,   aps: false, desc: "Spiced gram flour flatbread baked in the tandoor." },
      { id: 83, type: "veg",    name: "Lachha Naan",                    price: 85,   aps: false, desc: "Layered, flaky naan baked to golden perfection." },
      { id: 84, type: "veg",    name: "Garlic Naan",                    price: 85,   aps: false, desc: "Soft naan topped with fresh garlic and butter." },
      { id: 85, type: "veg",    name: "Hari Mirch & Methi Ka Naan",     price: 95,   aps: false, desc: "Naan infused with green chilli and fenugreek leaves." },
      { id: 86, type: "veg",    name: "Onion Kulcha",                   price: 95,   aps: false, desc: "Stuffed kulcha with spiced onion filling, baked in tandoor." },
      { id: 87, type: "veg",    name: "Cheese Garlic Naan",             price: 165,  aps: false, desc: "Indulgent naan loaded with melted cheese and roasted garlic." }
    ]
  },
  {
    category: "Sweets",
    emoji: "🍮",
    items: [
      { id: 88, type: "veg",    name: "Ice Cream — Single Scoop",       price: 125,  aps: false, desc: "Creamy single scoop of your choice of flavour." },
      { id: 89, type: "veg",    name: "Ice Cream — Double Scoop",       price: 255,  aps: false, desc: "Generous double scoop of your choice of flavours." },
      { id: 90, type: "veg",    name: "Gulab Jamun",                    price: 150,  aps: false, desc: "Soft, melt-in-mouth milk solid dumplings soaked in rose-cardamom sugar syrup." },
      { id: 91, type: "veg",    name: "Rabadi",                         price: 150,  aps: false, desc: "Rich, slow-cooked thickened milk dessert with saffron and nuts." }
    ]
  }
];

// ===== FOOD PLACEHOLDER IMAGES (Unsplash — free to use) =====
// Maps category keywords to a relevant food image
const categoryImages = {
  "soups":           "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
  "indian starters — veg": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&q=80",
  "indian starters — non veg": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
  "seafood starters": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
  "mutton starters": "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&q=80",
  "asian starters — veg": "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&q=80",
  "asian starters — non veg": "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=400&q=80",
  "asian seafood": "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80",
  "asian rice & noodles": "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&q=80",
  "indian mains — veg": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
  "indian mains — chicken": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&q=80",
  "indian mains — mutton": "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=400&q=80",
  "indian mains — seafood": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80",
  "dal":             "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
  "rice & pulao":    "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
  "indian breads":   "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
  "sweets":          "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&q=80"
};

function getItemImage(category) {
  const key = category.toLowerCase();
  return categoryImages[key] || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80";
}

// ===== STATE =====
let activeFilter = "all";
let searchQuery  = "";
let collapsedSections = {};

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  document.getElementById("searchInput").addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    renderMenu();
  });
});

// ===== FILTER =====
function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  const map = { all: "btnAll", veg: "btnVeg", nonveg: "btnNonveg" };
  document.getElementById(map[filter]).classList.add("active");
  renderMenu();
}

// ===== RENDER =====
function renderMenu() {
  const main = document.getElementById("menuMain");
  const noResults = document.getElementById("noResults");
  main.innerHTML = "";

  let totalVisible = 0;

  menuData.forEach((section, sIdx) => {
    // Filter items
    const filtered = section.items.filter(item => {
      const matchType =
        activeFilter === "all" ||
        (activeFilter === "veg"    && item.type === "veg") ||
        (activeFilter === "nonveg" && item.type === "nonveg");

      const matchSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery) ||
        item.desc.toLowerCase().includes(searchQuery);

      return matchType && matchSearch;
    });

    if (filtered.length === 0) return;
    totalVisible += filtered.length;

    const isCollapsed = collapsedSections[sIdx] || false;
    const sectionEl = document.createElement("div");
    sectionEl.className = "category-section";

    sectionEl.innerHTML = `
      ${sIdx > 0 ? '<div class="section-divider"></div>' : ''}
      <div class="category-header" onclick="toggleSection(${sIdx})">
        <span class="category-title">${section.emoji} ${section.category}</span>
        <span class="category-meta">
          <span class="category-count">${filtered.length} item${filtered.length !== 1 ? "s" : ""}</span>
          <span class="chevron ${isCollapsed ? "collapsed" : ""}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </span>
        </span>
      </div>
      <div class="items-list ${isCollapsed ? "collapsed" : ""}" id="section-${sIdx}">
        ${filtered.map(item => renderItem(item, section.category)).join("")}
      </div>
    `;

    main.appendChild(sectionEl);
  });

  // Show/hide no results
  if (totalVisible === 0) {
    noResults.classList.remove("hidden");
    main.classList.add("hidden");
  } else {
    noResults.classList.add("hidden");
    main.classList.remove("hidden");
  }
}

function renderItem(item, category) {
  const imgSrc = getItemImage(category);
  const priceStr = item.aps
    ? '<span class="aps-badge">As per size</span>'
    : `&#8377;${item.price}`;

  return `
    <div class="menu-item">
      <div class="item-left">
        <div class="item-type-row">
          <span class="item-dot ${item.type}"></span>
        </div>
        <div class="item-name">${item.name}</div>
        <div class="item-price">${priceStr}</div>
        <div class="item-desc">${item.desc}</div>
      </div>
      <div class="item-right">
        <div class="item-img-wrap">
          <img
            class="item-img"
            src="${imgSrc}"
            alt="${item.name}"
            loading="lazy"
            onerror="this.style.display='none';this.parentElement.innerHTML='<div class=\\'item-img-placeholder\\'>${category.split('—')[0].trim().split(' ')[0] === 'Sweets' ? '🍮' : getCategoryEmoji('${category}')}</div>'"
          />
        </div>
        <button class="view-btn" onclick="openModal(${item.id}, '${category}')">VIEW +</button>
      </div>
    </div>
  `;
}

function getCategoryEmoji(category) {
  const found = menuData.find(s => s.category === category);
  return found ? found.emoji : "🍽️";
}

// ===== TOGGLE SECTION =====
function toggleSection(sIdx) {
  collapsedSections[sIdx] = !collapsedSections[sIdx];
  renderMenu();
}

// ===== MODAL =====
function openModal(itemId, category) {
  // Find item
  let item = null;
  menuData.forEach(s => {
    const found = s.items.find(i => i.id === itemId);
    if (found) item = found;
  });
  if (!item) return;

  const imgSrc = getItemImage(category);

  // Populate modal
  document.getElementById("modalImg").src = imgSrc;
  document.getElementById("modalImg").alt = item.name;
  document.getElementById("modalName").textContent = item.name;
  document.getElementById("modalDesc").textContent = item.desc;
  document.getElementById("modalCategory").textContent = category;

  const dotEl = document.getElementById("modalDot");
  dotEl.className = "modal-dot " + item.type;

  const priceEl = document.getElementById("modalPrice");
  priceEl.innerHTML = item.aps
    ? "Price: <span class='aps-badge'>As per size</span>"
    : `&#8377;${item.price}`;

  // Show overlay
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal(e) {
  if (e.target === document.getElementById("modalOverlay")) {
    _closeModal();
  }
}

function closeModalBtn() {
  _closeModal();
}

function _closeModal() {
  document.getElementById("modalOverlay").classList.add("hidden");
  document.body.style.overflow = "";
}

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") _closeModal();
});
