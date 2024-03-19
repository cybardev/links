// alias to retrieve DOM objects
const $ = (selector) => document.querySelector(selector);

function populate(data) {
    // header
    $("h1").innerText = data.name;
    $("h2").innerText = data.handle;
    $("h3").innerText = data.tagline;

    // links
    const links = $("main");
    for (const [site, url] of Object.entries(data.links)) {
        links.insertAdjacentHTML("beforeend", `<a href="${url}">${site}</a>`);
    }

    // footer
    $("#footer-content").insertAdjacentHTML(
        "beforeend",
        `<a href="${data.links.GitHub}">${data.handle}</a>`
    );
}
