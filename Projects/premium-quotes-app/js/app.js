const apiUrl = "https://api.freeapi.app/api/v1/public/quotes";

const mainQuote = document.getElementById('mainQuote');
const mainAuthor = document.getElementById('mainAuthor');
const loaderHero = document.getElementById('loaderHero');
const contentHero = document.getElementById('contentHero');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const quotesList = document.getElementById('quotesList');
const loaderGrid = document.getElementById('loaderGrid');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');

let allQuotes = [];

themeToggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        themeIcon.classList.replace('text-slate-600', 'text-yellow-400');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        themeIcon.classList.replace('text-yellow-400', 'text-slate-600');
    }
});

function setupLoaders() {
    loaderGrid.innerHTML = '';
    for (let i = 0; i < 6; i++) {
        loaderGrid.innerHTML += `
        <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 animate-pulse">
            <div class="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full mb-3"></div>
            <div class="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6 mb-6"></div>
            <div class="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/3"></div>
        </div>`;
    }
}

async function getQuotes() {
    try {
        loaderHero.classList.remove('hidden');
        contentHero.classList.add('hidden');
        loaderGrid.classList.remove('hidden');
        quotesList.classList.add('hidden');

        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data.success && data.data && data.data.data) {
            allQuotes = data.data.data;
            showRandomQuote();
            displayAllQuotes();
        }
    } catch (err) {
        console.log(err);
        quotesList.innerHTML = `<p class="text-red-500 font-medium">Failed to load quotes. Check internet connection.</p>`;
        loaderGrid.classList.add('hidden');
        quotesList.classList.remove('hidden');
    }
}

function showRandomQuote() {
    if (allQuotes.length === 0) return;

    contentHero.classList.remove('fade-in');
    void contentHero.offsetWidth;
    contentHero.classList.add('fade-in');

    const randIdx = Math.floor(Math.random() * allQuotes.length);
    const q = allQuotes[randIdx];

    mainQuote.innerText = `"${q.content}"`;
    mainAuthor.innerText = `- ${q.author}`;

    loaderHero.classList.add('hidden');
    contentHero.classList.remove('hidden');
}

function displayAllQuotes() {
    quotesList.innerHTML = '';

    allQuotes.forEach(q => {
        let initial = q.author.charAt(0).toUpperCase();
        let card = document.createElement('div');
        card.className = "bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 dark:border-slate-700 flex flex-col justify-between";

        card.innerHTML = `
            <div>
                <i class="fa-solid fa-quote-left text-slate-200 dark:text-slate-700 text-3xl mb-4"></i>
                <p class="text-slate-700 dark:text-slate-300 text-lg mb-6 font-medium">"${q.content}"</p>
            </div>
            <div class="flex items-center gap-3 border-t border-slate-100 dark:border-slate-700 pt-4">
                <div class="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-600 dark:text-brand-400 font-bold text-xs">
                    ${initial}
                </div>
                <span class="text-sm font-bold text-slate-900 dark:text-white">${q.author}</span>
            </div>
        `;
        quotesList.appendChild(card);
    });

    loaderGrid.classList.add('hidden');
    quotesList.classList.remove('hidden');
}

newQuoteBtn.addEventListener('click', showRandomQuote);

setupLoaders();
getQuotes();