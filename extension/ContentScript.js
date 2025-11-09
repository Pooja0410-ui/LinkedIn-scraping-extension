chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "scrapeProfile") {
    // LinkedIn selectors (may need updates if DOM changes)
    const name =
      document.querySelector("h1.text-heading-xlarge")?.innerText || "";
    const location =
      document.querySelector(".pv-text-details__left-panel .text-body-small")
        ?.innerText || "";
    const about =
      document.querySelector(".pv-about__summary-text")?.innerText || "";
    const bio =
      document.querySelector(".pv-text-details__left-panel .text-body-medium")
        ?.innerText || ""; // Headline
    const followerCount = parseInt(
      document
        .querySelector(".pv-followers__title")
        ?.innerText?.match(/\d+/)?.[0] || 0
    );
    const connectionCount = parseInt(
      document
        .querySelector(".pv-top-card--list-bullet li")
        ?.innerText?.match(/\d+/)?.[0] || 0
    );

    sendResponse({
      name,
      url: request.url,
      about,
      bio,
      location,
      followerCount,
      connectionCount,
    });
  }
});
