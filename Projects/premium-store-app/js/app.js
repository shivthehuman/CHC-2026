const apiUrl = "https://api.freeapi.app/api/v1/public/randomproducts";

const productGrid = document.getElementById('productGrid');
const loader = document.getElementById('loader');
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');

// Theme Logic
themeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeIcon.classList.replace('text-slate-600', 'text-yellow-400');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeIcon.classList.replace('text-yellow-400', 'text-slate-600');
    }
});

// Skeletons
function createSkeletons() {
    loader.innerHTML = '';
    for (let i = 0; i < 8; i++) {
        loader.innerHTML += `
        <div class="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 animate-pulse">
            <div class="w-full h-48 bg-slate-200 dark:bg-slate-700"></div>
            <div class="p-5">
                <div class="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-3"></div>
                <div class="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3 mb-4"></div>
                <div class="flex justify-between items-center mt-6">
                    <div class="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/3"></div>
                    <div class="h-8 bg-slate-200 dark:bg-slate-700 rounded w-1/3"></div>
                </div>
            </div>
        </div>`;
    }
}

async function fetchProducts() {
    try {
        loader.classList.remove('hidden');
        productGrid.classList.add('hidden');

        const res = await fetch(apiUrl);
        const data = await res.json();

        // Check if data exists
        if (data.success && data.data && data.data.data) {
            renderProducts(data.data.data);
        }
    } catch (err) {
        console.error("Error fetching products:", err);
        productGrid.innerHTML = `<p class="text-red-500 font-medium col-span-full text-center">Failed to load products. Check connection.</p>`;
    } finally {
        loader.classList.add('hidden');
        productGrid.classList.remove('hidden');
    }
}

function renderProducts(products) {
    productGrid.innerHTML = '';

    products.forEach(p => {
        // Safe check for image
        let imgUrl = p.images && p.images.length > 0 ? p.images[0] : 'https://placehold.co/400x400?text=No+Image';
        let price = p.price ? `$${p.price}` : 'N/A';
        let title = p.title ? p.title.substring(0, 40) + (p.title.length > 40 ? '...' : '') : 'Product Title';

        let card = document.createElement('div');
        card.className = "bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group flex flex-col fade-in";

        card.innerHTML = `
            <div class="w-full h-48 overflow-hidden bg-slate-100 dark:bg-slate-700 relative">
                <img src="${imgUrl}" alt="${title}" class="w-full h-full object-cover product-img" onerror="this.src='https://placehold.co/400x400?text=Image+Error'">
                <div class="absolute top-2 right-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-sm">
                    <i class="fa-solid fa-star text-yellow-400"></i> 4.5
                </div>
            </div>
            <div class="p-5 flex flex-col flex-grow">
                <p class="text-xs text-brand-500 font-bold uppercase tracking-wider mb-1">${p.category || 'General'}</p>
                <h3 class="text-slate-800 dark:text-slate-100 font-semibold mb-2 line-clamp-2" title="${p.title}">${title}</h3>
                
                <div class="mt-auto pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-700">
                    <span class="text-xl font-bold text-slate-900 dark:text-white">${price}</span>
                    <button class="bg-brand-600 hover:bg-brand-500 text-white p-2 rounded-lg transition-colors active:scale-95 shadow-md">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

createSkeletons();
fetchProducts();