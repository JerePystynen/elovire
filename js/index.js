// Localization
// Define language reload anchors
var dataReload = document.querySelectorAll("[data-reload]")

// Language translations
var lang = {
    en: {
        hi: "Welcome Everyone!"
    },
    fi: {
        hi: "Tervetuloa Kaikki!"
    }
}

// Define language via window hash
if (window.location.hash) {
    if (window.location.hash === "#en") {
        hi.textContent = lang.en.hi
    }
    if (window.location.hash === "#fi") {
        hi.textContent = lang.fi.hi
    }
}

// Define language reload onclick illiteration
for (i = 0; i < dataReload.length; i++) {
    dataReload[i].onclick = function() {
        setTimeout(() => {
            location.reload(true)
        }, 50);
    }
}