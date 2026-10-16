function setExternalLinks() {
    document.querySelectorAll("a[href]").forEach((link) => {
        const url = new URL(link.href, window.location.href);
        if (url.origin === window.location.origin) return;
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
    });
}

setExternalLinks();
