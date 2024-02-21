// alias to retrieve DOM objects
const $ = (selector) => document.querySelector(selector);

window.onload = () => {
    // header
    $("#name").innerText = data.name;
    $("#handle").innerText += data.handle;
    $("#tagline").innerText = data.tagline;

    // links
    const links = $("#links");
    for (const [site, url] of Object.entries(data.links)) {
        links.insertAdjacentHTML(
            "beforeend",
            `<a href="${url}" class="link">${site}</a>`
        );
    }

    // footer
    $("#footer-text").insertAdjacentHTML(
        "beforeend",
        `<a href="${data.links.GitHub}">${data.handle}</a>`
    );
};
