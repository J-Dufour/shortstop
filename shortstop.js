function block() {
    if(location.pathname.startsWith('/shorts')){    
        document.body.innerHTML = `
        <div class="shortstop-content">
            <h1 class="shortstop-header">No watching Shorts!</h1>
            <a href="https://www.youtube.com/"><button class="shortstop-btn">Back to YoutTube</button></a>
        </div>`;
    }
}

document.addEventListener('yt-navigate-finish', block);

block();