const links = [
  "https://www.linkedin.com/in/example1",
  "https://www.linkedin.com/in/example2",
  "https://www.linkedin.com/in/example3",
];

document.getElementById("scrapeBtn").addEventListener("click", async () => {
  const status = document.getElementById("status");
  status.textContent = "Starting...";

  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    status.textContent = `Opening ${link}...`;

    // Open tab
    const tab = await chrome.tabs.create({ url: link, active: false });

    // Wait 5-7 seconds for dynamic content to load
    await new Promise((resolve) => setTimeout(resolve, 7000));

    // Send message to content script and wait for response
    const response = await new Promise((resolve) => {
      chrome.tabs.sendMessage(
        tab.id,
        { action: "scrapeProfile", url: link },
        (res) => {
          resolve(res);
        }
      );
    });

    if (response) {
      // Only keep name, location, followerCount
      const dataToSend = {
        name: response.name,
        location: response.location,
        followerCount: response.followerCount,
        url: link,
      };

      // POST to backend
      await fetch("http://localhost:3000/api/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      status.textContent = `Scraped and sent data for ${link}`;
    }

    // Close tab after scraping
    chrome.tabs.remove(tab.id);
  }

  status.textContent = "All profiles scraped!";
});
