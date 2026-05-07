const apiUrl = "https://api.freeapi.app/api/v1/public/youtube/videos";

const videoGrid = document.getElementById('videoGrid');
const loaderArea = document.getElementById('loaderArea');

function setupSkeletons() {
    loaderArea.innerHTML = '';
    for (let i = 0; i < 12; i++) {
        loaderArea.innerHTML += `
        <div class="flex flex-col gap-3 animate-pulse">
            <div class="w-full aspect-video bg-[#272727] rounded-xl"></div>
            <div class="flex gap-3 pr-6">
                <div class="w-9 h-9 bg-[#272727] rounded-full shrink-0"></div>
                <div class="flex flex-col gap-2 w-full">
                    <div class="h-4 bg-[#272727] rounded w-[90%]"></div>
                    <div class="h-4 bg-[#272727] rounded w-[60%]"></div>
                </div>
            </div>
        </div>`;
    }
}

function formatViews(viewsCount) {
    const views = parseInt(viewsCount) || Math.floor(Math.random() * 5000000) + 1000;
    if (views >= 1000000) return (views / 1000000).toFixed(1) + 'M';
    if (views >= 1000) return (views / 1000).toFixed(1) + 'K';
    return views;
}

function getRandomTime() {
    const times = ["2 hours ago", "5 hours ago", "1 day ago", "3 days ago", "1 week ago", "2 months ago", "1 year ago"];
    return times[Math.floor(Math.random() * times.length)];
}

async function fetchYoutubeData() {
    try {
        loaderArea.classList.remove('hidden');
        videoGrid.classList.add('hidden');

        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data.success && data.data && data.data.data) {
            renderVideos(data.data.data);
        }
    } catch (err) {
        console.error(err);
        videoGrid.innerHTML = `<div class="col-span-full text-center text-yt-red mt-10 text-lg">Error loading feed. Please try again.</div>`;
    } finally {
        loaderArea.classList.add('hidden');
        videoGrid.classList.remove('hidden');
    }
}

function renderVideos(videos) {
    videoGrid.innerHTML = '';

    videos.forEach((vid, idx) => {
        // Deep extraction logic for FreeAPI YouTube structure
        let title = vid?.items?.snippet?.title || vid?.snippet?.title || vid?.title || 'Awesome Video Title';
        let thumb = vid?.items?.snippet?.thumbnails?.high?.url || vid?.snippet?.thumbnails?.high?.url || vid?.thumbnail?.url || `https://picsum.photos/seed/${idx}/640/360`;
        let channel = vid?.items?.snippet?.channelTitle || vid?.snippet?.channelTitle || vid?.channel?.name || 'YouTube Creator';
        let views = formatViews(vid?.items?.statistics?.viewCount || vid?.statistics?.viewCount || vid?.views);
        let time = vid?.items?.snippet?.publishedAt || vid?.publishedAt ? new Date(vid?.items?.snippet?.publishedAt || vid?.publishedAt).toLocaleDateString() : getRandomTime();

        let avatarPng = `https://api.dicebear.com/7.x/avataaars/png?seed=${channel.replace(/ /g, '')}&backgroundColor=b6e3f4`;

        let card = document.createElement('div');
        card.className = "vid-card cursor-pointer group";

        card.innerHTML = `
            <div class="relative w-full aspect-video rounded-xl overflow-hidden mb-3">
                <img src="${thumb}" alt="Thumbnail" class="w-full h-full object-cover">
                <div class="absolute bottom-1.5 right-1.5 bg-black/80 text-white text-xs font-medium px-1.5 py-0.5 rounded">
                    ${Math.floor(Math.random() * 15) + 2}:${Math.floor(Math.random() * 50) + 10}
                </div>
            </div>
            <div class="flex gap-3 pr-6">
                <img src="${avatarPng}" alt="Avatar" class="w-9 h-9 rounded-full object-cover shrink-0 mt-0.5 border border-yt-border">
                <div class="flex flex-col">
                    <h3 class="text-yt-text text-[16px] font-medium line-clamp-2 leading-snug group-hover:text-blue-400 transition-colors" title="${title}">${title}</h3>
                    <div class="text-yt-subtext text-[14px] mt-1 flex items-center gap-1">
                        ${channel}
                        <i class="fa-solid fa-circle-check text-[10px] opacity-70"></i>
                    </div>
                    <div class="text-yt-subtext text-[14px]">
                        ${views} views • ${time}
                    </div>
                </div>
            </div>
        `;
        videoGrid.appendChild(card);
    });
}

setupSkeletons();
fetchYoutubeData();