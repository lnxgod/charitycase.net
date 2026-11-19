import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, "docs");

const posts = [
  {
    slug: "no-step-on-snek-remix",
    title: "NO STEP ON SNEK REMIX",
    date: "Jan 16, 2025",
    minutes: "2 min read",
    image: "snek-remix.png",
    imageAlt: "NO STEP ON SNEK REMIX artwork",
    imageHref: "../../tools/snek-remix.html",
    excerpt: "A dad’s remix of a family AI experiment—retro game design, reimagined in one evening.",
    body: `
      <p class="callout"><a href="../../tools/snek-remix.html">Click here to play NO STEP ON SNEK: The Remix.</a></p>
      <h2>A Dad’s Remix of a Family AI Experiment</h2>
      <p>Inspired by the creativity of my kids, I took the same idea behind NO STEP ON SNEK and added my own twist. With a few updates, tweaks, and personal touches, this remix shows how quickly a working concept can be reimagined and reinvented. My hope is to demonstrate the ease and fun of turning an idea into something new—even in just one evening.</p>
      <h2>Building on Retro Nostalgia</h2>
      <p>The remix keeps the heart of the original: an 8-bit-inspired adventure packed with challenges and retro charm. Whether you’re a fan of classic arcade action or just love quirky games, the essence of NO STEP ON SNEK is still here—only this time, reimagined with fresh ideas and a few gameplay surprises.</p>
      <h2>From Curious Minds to Collaborative Creativity</h2>
      <p>As the dad in this story, I’m not a professional coder, but working with AI made it possible to create something fun and functional in record time. Just like my kids did, I used OpenAI’s ChatGPT to describe my updates, fix errors, and fine-tune the game. The result? A remix that’s uniquely mine, but also a testament to how accessible creativity can be when powered by AI tools.</p>
      <h2>Thank You for Joining Our Journey</h2>
      <p>This remix is part of our family’s ongoing experiment to explore what’s possible with AI, creativity, and collaboration. Whether you’re here for the retro vibes or curious about AI-driven game design, we hope you enjoy NO STEP ON SNEK: The Remix.</p>
      <p>Stay tuned—there are always more exciting and experimental projects in the works. Feedback is welcome!</p>
      <p><em>Powered by AI. Inspired by humans.</em></p>`
  },
  {
    slug: "charity-case-game-no-step-on-snek",
    title: "Charity Case GAME! NO STEP ON SNEK!!!!",
    date: "Jan 12, 2025",
    minutes: "2 min read",
    image: "snek-family.png",
    imageAlt: "Pixel-art NO STEP ON SNEK game artwork",
    imageHref: "../../tools/snek-mobile.html",
    excerpt: "A family’s AI-powered retro-game adventure, created by kids with no coding experience.",
    body: `
      <p class="callout"><a href="../../tools/snek-mobile.html">Play the mobile version</a> or <a href="../../tools/snek-desktop.html">open the desktop version</a>.</p>
      <h2>A Nostalgic Nod to 8-Bit Classics</h2>
      <p>Introducing NO STEP ON SNEK, a brand-new game inspired by classic 8-bit arcade adventures. If you grew up smashing buttons on old-school consoles, you’ll love the retro flavor woven into this experience. But here’s the real kicker: not a single line of code was manually written to create it.</p>
      <h2>Created by Kids with 0 Coding Experience</h2>
      <p>The development team behind NO STEP ON SNEK consists of two young siblings—ages 7 and 15—who took on the challenge of game creation without traditional programming. Their older sibling, who does have coding experience, stepped aside as a play tester, providing gameplay feedback but not writing the code. Meanwhile, their dad’s role was to help describe their requests to OpenAI and run the game code for them.</p>
      <h2>AI at the Helm</h2>
      <p>The family relied entirely on OpenAI’s ChatGPT 01 PRO model to transform their ideas into reality. Over the course of just four hours, they described gameplay elements, requested custom features, and used ChatGPT to fix errors and polish the code, all without manually typing code. Any time they ran into a glitch, they simply pasted the error message into ChatGPT and explained what they wanted. ChatGPT then automatically generated the necessary HTML, CSS, and JavaScript to bring the game to life.</p>
      <h2>Custom (Challenge) Mode</h2>
      <p>By default, the game launches in “Custom” mode, though it might as well be called Challenge Mode. It’s designed to be very difficult, especially if you’re aiming to reach the final stage: Level 5. Your goal? Rack up the highest score possible before the clock—or the sneks—get you.</p>
      <h2>A Family’s Experiment</h2>
      <p>This project began as a simple experiment: what can be done when curious minds, even with no coding experience, engage with powerful AI tools? The result is a delightful throwback platformer, sprinkled with imaginative touches reminiscent of favorite retro titles.</p>
      <h2>Grateful for the Support</h2>
      <p>The family behind NO STEP ON SNEK wants to extend a huge thank you to everyone who’s been following their creative journey. This nonprofit venture is only the beginning of many imaginative projects.</p>
      <h2>Ready to Play?</h2>
      <p>Now it’s your turn to dive into NO STEP ON SNEK. Tangle with sneks and get your nostalgic fix of pixel-perfect action.</p>
      <p>NO STEP ON SNEK was fully developed with the help of OpenAI’s ChatGPT 01 PRO model—and even this blog post was written by AI. The possibilities for creativity are limitless when curious minds meet cutting-edge technology. Enjoy the game!</p>`
  },
  {
    slug: "2025-the-year-for-a-503c",
    title: "2025 the year for a 501c3",
    date: "Dec 31, 2024",
    minutes: "1 min read",
    image: "501c3.jpg",
    imageAlt: "Thank you graphic",
    excerpt: "A shift from the Kia/JB4 community toward AI education and nonprofit work.",
    body: `
      <h2>Thank you!</h2>
      <p>Hello everyone,</p>
      <p>It’s with mixed emotions that I announce I’ll no longer be actively participating in the Kia/JB4 community. This decision wasn’t taken lightly. Over the past few years, I’ve truly loved working on Map6Bot, fine-tuning cars, and helping folks get the most out of their Stingers. However, my charity work has grown to a point where I need to devote significantly more time to it.</p>
      <p>In 2025, I plan to officially launch my 501(c)(3) nonprofit, which will focus on educating people of all ages about AI—particularly teaching kids how to create games using AI without any coding experience. To support this goal, I’ve recently enhanced Map6Bot using AI and even created a fully HTML version that runs on CharityCase.net. The original Map6Bot will remain online until the day its Raspberry Pi finally gives out.</p>
      <p>I’m making all my code open-source so that anyone interested in carrying on the work—or just tinkering—can do so. It’s been a joy helping everyone dial in their cars, but I believe I can do even more good by focusing on my nonprofit and its mission to bring AI education to as many people as possible.</p>
      <p>I invite anyone who’d like to stay connected to friend me on Facebook or follow my charity’s website. Thank you all for the wonderful journey—Map6Bot wouldn’t exist without this community, and I wouldn’t have discovered just how powerful AI can be for creating code and much more.</p>
      <p>Wishing you all the best,<br>Will Hatzer<br>Formerly Map6Tuning</p>`
  },
  {
    slug: "toy-drive-ongoing-raffles-end-16th",
    title: "TOY DRIVE ONGOING! RAFFLES! END 16TH!",
    date: "Dec 12, 2024",
    minutes: "1 min read",
    image: "toy-drive-raffles.png",
    imageAlt: "2024 toy drive raffle artwork",
    excerpt: "The 2024 toy-drive raffles, donation options, and sponsor thanks.",
    body: `
      <p><em>This post is archived from the 2024 toy drive; the raffle dates and offers are no longer current.</em></p>
      <p>It’s not too late to get in on this year’s toy drive! We have some really slick raffles, including an EK1 PRO sponsored by N75 Motorsports as well as a backend flash supplied by Burger Motorsports.</p>
      <h2>Raffles</h2>
      <ul>
        <li>EK1 PRO — $25 per entry, maximum 30 entries; three for $50.</li>
        <li>Comma.AI 3X — $20 per entry, maximum 30 entries; three for $40. The winner will need the specific harness for their car.</li>
        <li>MagicBox wireless CarPlay — $10 per entry, maximum 30 entries; three for $20.</li>
      </ul>
      <h2>How to Enter</h2>
      <p>Payments were accepted by PayPal, Venmo, and Zelle. After sending payment, donors emailed their details so they could be added to the tracking spreadsheet.</p>
      <p><a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9-eC9UsWWv7LQqXkdSUF1FkEBPowv4y14FqVWbYEv0YiJ5NJnHCiYxoNG3s3XmbDqpm7W-5Ue0wo1/pubhtml">View the archived tracking document.</a></p>
      <p>Special thanks to N75, Burger Motorsports, Team Charity Case, and all of our other amazing sponsors. Your support means the world. Let’s make the holiday season brighter for children in need!</p>`
  },
  {
    slug: "first-toy-drive-pickup-over-800-in-toys",
    title: "First toy drive pickup! Over $800 in toys.",
    date: "Dec 9, 2024",
    minutes: "Photo update",
    image: "toy-pickup.jpg",
    imageAlt: "First 2024 toy-drive pickup with more than $800 in toys",
    excerpt: "A photo update from the first major pickup of the 2024 toy drive.",
    body: `<p>The first toy-drive pickup brought in more than $800 worth of toys. Thank you to everyone who helped make it possible.</p>`
  },
  {
    slug: "toy-drive-kick-off",
    title: "Toy Drive Kick Off",
    date: "Sep 13, 2024",
    minutes: "1 min read",
    image: "toy-drive-2024.png",
    imageAlt: "Team Charity Case toy drive artwork",
    excerpt: "The first $25 donation officially kicked off the 2024 toy drive.",
    body: `<p>We have officially received our first $25 donation for this year’s toy drive. Thank you for helping us get started.</p>`
  },
  {
    slug: "_update",
    title: "Update!",
    date: "Aug 31, 2024",
    minutes: "1 min read",
    image: "charity-case-logo.png",
    imageAlt: "Team Charity Case logo",
    excerpt: "DEF CON, the solar shed, the upcoming toy drive, and the next family projects.",
    body: `
      <p>DEF CON didn’t go as planned. I got COVID the first day and so did others on the team. We didn’t do as well as we had hoped, but out of 94 teams we were in the top ten with only a fraction of the team able to participate.</p>
      <p>I am going to be kicking off the toy drive in the coming weeks. If you like Map6Bot or I’ve helped you make your car faster, you’ll have a chance to donate very soon.</p>
      <p>We did finish the solar shed. I’ve got ten 320-watt panels, a PowMr 5K unit, and two Chins 48V 100Ah batteries. We are using it to charge my son’s Tesla and run some freezers at the house. Learn more on my YouTube channel.</p>
      <h2>Upcoming Projects</h2>
      <ul>
        <li>Golf cart: ground-effects LED kit, headlights, and taillights.</li>
        <li>House: updated WLED systems with new power supplies and weatherproof boxes, plus the mega tree.</li>
        <li>Motorcycle: plastidipping my bike purple to match my Corvette.</li>
      </ul>
      <p>I’ll be making videos of these projects so folks can learn how to do this at home.</p>`
  },
  {
    slug: "defcon-2024",
    title: "DEF CON 2024",
    date: "Jul 17, 2024",
    minutes: "1 min read",
    image: "charity-case-logo.png",
    imageAlt: "Team Charity Case logo",
    excerpt: "Team Charity Case prepared to compete at DEF CON 2024.",
    body: `<p>Looks like Team Charity Case is going to compete this year. The team still has a couple of spots open—if anyone wants to join us, hit me up.</p>`
  },
  {
    slug: "expanding-our-work",
    title: "Expanding our work",
    date: "Feb 6, 2024",
    minutes: "1 min read",
    image: "cyber-companion.png",
    imageAlt: "Cyber Security Companion for Families",
    excerpt: "An easy-to-understand security assistant for homes and families.",
    body: `
      <p>We launched an information-security AI to help regular people secure their homes. It is designed to explain things in easy-to-understand ways and can even help you set up parental controls.</p>
      <p class="callout"><a href="../../tools/#cyber-companion">Try the Cyber Security Companion for Families.</a></p>`
  },
  {
    slug: "gearing-up-for-the-2024-toy-drive-at-charitycase-net",
    title: "Gearing Up for the 2024 Toy Drive at CharityCase.net",
    date: "Jan 17, 2024",
    minutes: "2 min read",
    image: "toy-drive-2024.png",
    imageAlt: "2024 Team Charity Case toy drive artwork",
    excerpt: "The story behind the toy drive, from a first bicycle in 1986 to a community-wide effort.",
    body: `
      <p>Hello and a warm welcome to all at CharityCase.net! I’m Will Hatzer, and it’s my pleasure to invite you to join us as we start preparing for our 2024 toy drive. Following the success of our 2023 drive, we’re excited to make the next one even more impactful.</p>
      <p><a href="https://www.youtube.com/watch?v=n2rSxF4LtNs">Watch the toy-drive video on YouTube.</a></p>
      <h2>My Story: The Gift of Giving</h2>
      <p>My journey into the world of giving began back in Christmas 1986. As a child in a family doing its best to make ends meet, I learned the true spirit of Christmas. Thanks to the generosity of our local firehouse and the kindness of strangers, I received my first bicycle—a blue beacon of joy in a difficult time. This experience taught me the profound impact of generosity, inspiring me to pay it forward.</p>
      <h2>The Evolution of Our Toy Drive</h2>
      <p>What started at a local firehouse in Columbus, Ohio, as a personal mission to replicate that joy I felt as a child, has grown into a community-wide effort. Moving from Ohio to California, the drive expanded from a small group of friends and family to include local car clubs and businesses. Each year, we strive to reach more children.</p>
      <h2>How You Can Help</h2>
      <ul>
        <li>Financial donations help us buy toys and make sure each dollar goes a long way.</li>
        <li>Donors can share their stories and photos to inspire others and create a ripple effect of generosity.</li>
        <li>Stay connected for updates and direct-donation opportunities.</li>
      </ul>
      <h2>Thank You and Stay Tuned</h2>
      <p>A heartfelt thank you to everyone who has supported us. Your involvement is what turns this drive into a yearly celebration of hope and giving.</p>
      <p>With heartfelt thanks,<br>Will Hatzer</p>
      <div class="gallery"><img src="../../assets/images/toy-drive-2024.png" alt="2024 toy-drive preparation"><img src="../../assets/images/toy-drive-2023.png" alt="Photos from the 2023 toy drive"></div>`
  }
];

const socials = [
  ["GitHub", "https://github.com/lnxgod"],
  ["Instagram", "https://www.instagram.com/willhatzer/"],
  ["Facebook", "https://www.facebook.com/will.hatzer"],
  ["X / Twitter", "https://www.twitter.com/lnxgod"],
  ["LinkedIn", "https://www.linkedin.com/in/william-hatzer-88624928/"],
  ["YouTube", "https://www.youtube.com/@GameChangersAIorg"]
];

const paypal = "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=bill.hatzer%40gmail.com&currency_code=USD&source=url";
const nonprofit = "https://gamechangersai.org/about.html";
const toyDrive = "https://community.gamechangersai.org/toydrive";
const christmasShow = "https://community.gamechangersai.org/ChristmasShow";

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function header(base, solid = false) {
  return `<header class="site-header${solid ? " site-header--solid" : ""}">
    <div class="nav-wrap">
      <a class="brand" href="${base || "./"}">
        <img src="${base}assets/images/gamechangers-ai-logo.png" alt="" width="42" height="42">
        <span>GameChangers AI<small>Hatzer Family Toy Drive</small></span>
      </a>
      <button class="nav-toggle" type="button" data-nav-toggle aria-expanded="false" aria-controls="site-nav">Menu</button>
      <nav class="site-nav" id="site-nav" data-nav aria-label="Main navigation">
        <a href="${toyDrive}#timeline">Toy drive history</a>
        <a href="${christmasShow}">Christmas light show</a>
        <a href="${base}blog/">Archive</a>
        <a href="${nonprofit}">About us</a>${base ? `
        <a class="nav-give" href="${base}#support">How to give</a>` : ""}
      </nav>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="footer-inner">
    <div><p class="footer-brand">GameChangers AI</p><div class="footer-links"><a href="${nonprofit}">About us</a>${socials.map(([name, url]) => `<a href="${url}">${name}</a>`).join("")}</div></div>
    <p class="copyright">© <span data-year></span> GameChangers AI</p>
  </div></footer>`;
}

function shell({ title, description, base = "", content, solid = true, siteName = "Team Charity Case" }) {
  return `<!doctype html><html lang="en"><head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${escapeHtml(title)} | ${escapeHtml(siteName)}</title>
    <meta name="theme-color" content="#0b1714">
    <meta name="description" content="${escapeHtml(description)}">
    <link rel="icon" href="${base}assets/images/gamechangers-ai-logo.png">
    <link rel="stylesheet" href="${base}assets/styles.css">
  </head><body><a class="skip-link" href="#main">Skip to content</a>${header(base, solid)}<main id="main">${content}</main>${footer()}<script src="${base}assets/site.js" defer></script></body></html>`;
}

function storyRow(post, base = "") {
  return `<a class="story-row reveal" data-search-card href="${base}post/${post.slug}/">
    <img src="${base}assets/images/${post.image}" alt="" loading="lazy">
    <div><span class="date">${post.date}</span><h3>${post.title}</h3><p>${post.excerpt}</p></div><span class="arrow" aria-hidden="true">→</span>
  </a>`;
}

const home = shell({
  title: "GameChangersAI (Hatzer Family) Toy Drive",
  siteName: "CharityCase.net",
  description: "Join the Hatzer family’s Christmas toy drive, formerly Team Charity Case. Bring a new, unwrapped toy or help us shop for one.",
  solid: false,
  content: `<section class="drive-hero"><div class="drive-wrap drive-split">
    <div>
      <h1><span>GameChangersAI (Hatzer Family)</span> Toy Drive</h1>
      <p>Every Christmas, our family collects toys for kids in Merced County. If you know us as Team Charity Case, you’re in the right place.</p>
      <div class="actions">
        <a class="button button--mint" href="#support">Give a toy</a>
        <a class="button button--outline" href="${escapeHtml(paypal)}">Donate with PayPal</a>
      </div>
    </div>
    <figure class="drive-photo drive-photo--hero">
      <img src="assets/images/toy-drive-2023.webp" alt="Boxed toys stacked in the back of a car" width="950" height="1262" fetchpriority="high">
      <figcaption>A trunkful of toys from the 2023 drive.</figcaption>
    </figure>
  </div></section>
  <section class="drive-wrap drive-giving" id="support" aria-labelledby="give-title">
    <h2 id="give-title">How to give</h2>
    <div class="giving-options">
      <div><h3>Bring a toy</h3><p>Choose a new toy and leave it unwrapped. We post collection dates and locations on our community page.</p><a class="button button--dark" href="${toyDrive}#give">Check drop-off updates</a></div>
      <div><h3>Help us shop</h3><p>If you’d rather give money, we’ll use it to buy toys for local kids.</p><a class="button button--plain" href="${escapeHtml(paypal)}">Donate with PayPal</a></div>
    </div>
  </section>
  <section class="drive-wrap drive-split drive-story" aria-labelledby="story-title">
    <figure class="drive-photo">
      <img src="assets/images/toy-drive-2025.webp" alt="A blue bicycle and bags of donated toys at the 2025 drop-off" width="950" height="426" loading="lazy">
      <figcaption>A blue bike at our December 2025 drop-off.</figcaption>
    </figure>
    <div>
      <h2 id="story-title">It started with a blue bicycle</h2>
      <p>Will Hatzer was five on Christmas morning in 1986 when he came downstairs and saw his first bicycle. It was blue. Years later, his parents told him that strangers had given it to their family through the local firehouse.</p>
      <p>Will cleaned up that same bike and donated it so another child could have it for Christmas. He started his toy drive at a firehouse in Columbus, Ohio, and kept it going after he moved to California. Over the years, friends, family, car clubs, and local businesses joined in.</p>
      <div class="drive-links"><a href="post/gearing-up-for-the-2024-toy-drive-at-charitycase-net/">Read Will’s original story</a><a href="${toyDrive}#timeline">See photos and collection amounts by year</a></div>
    </div>
  </section>
  <section class="drive-wrap drive-legacy" aria-label="GameChangers AI and the Team Charity Case archive">
    <div><h2>Our family today</h2><p>We also started GameChangers AI, our 501(c)(3) nonprofit, to help kids and adults learn to use AI.</p><div class="drive-links"><a href="${christmasShow}">Visit the GameChangers AI Christmas Light Show</a></div></div>
    <div><h3>Team Charity Case archive</h3><p>Our old posts are still here, including toy pickups, raffle updates, and the video games our kids made.</p><div class="drive-links"><a href="blog/">Browse the stories</a><a href="tools/">Try our tools and games</a></div></div>
  </section>`
});

const blog = shell({
  title: "Story archive",
  description: "Toy drive news, family projects, and updates we shared as Team Charity Case.",
  base: "../",
  content: `<header class="page-intro"><h1>Team Charity Case stories</h1><p>These are the updates we shared in 2024 and 2025 about the toy drive, our family’s games, and what we were building.</p></header><section class="section section--tight"><div class="search-wrap"><label for="archive-search">Search the archive</label><input id="archive-search" data-search type="search" placeholder="Try “toy drive” or “Snek”"></div><div class="story-list">${posts.map((post) => storyRow(post, "../")).join("")}</div><p class="empty-state" data-empty>No stories match your search. Try a different word.</p></section>`
});

const toolsPage = shell({
  title: "Tools & games",
  description: "Play the NO STEP ON SNEK games, use Map6 Analyzer, or ask the Cyber Security Companion.",
  base: "../",
  content: `<header class="page-intro"><h1>Tools &amp; games</h1><p>Play the games our family made or try a tool we built as Team Charity Case.</p></header><section class="section section--tight"><div class="tool-list reveal">
    <a class="tool-link" href="snek-remix.html"><span>Desktop / touch</span><h3>NO STEP ON SNEK: Remix</h3></a>
    <a class="tool-link" href="snek-mobile.html"><span>Mobile</span><h3>Original Family Snek</h3></a>
    <a class="tool-link" href="snek-desktop.html"><span>Desktop</span><h3>Original Snek: Full Version</h3></a>
    <a class="tool-link" href="map6-analyzer.html"><span>Browser tool</span><h3>Map6 Log Analyzer</h3></a>
  </div></section><section class="section" id="cyber-companion"><div class="section-heading reveal"><h2>Cyber Security Companion</h2><p>Ask for plain-language help securing devices, spotting phishing, choosing safer technology for kids, or setting up parental controls.</p></div><iframe class="tool-frame" title="Cyber Security Companion for Families" src="https://app.gpt-trainer.com/widget/2fea4e7898584e488811169ed4c90fe0"></iframe></section>`
});

await write(join(out, "index.html"), home);
await write(join(out, "blog/index.html"), blog);
await write(join(out, "tools/index.html"), toolsPage);

for (const post of posts) {
  const image = post.imageHref
    ? `<a href="${post.imageHref}"><img class="article-hero" src="../../assets/images/${post.image}" alt="${escapeHtml(post.imageAlt)}"></a>`
    : `<img class="article-hero" src="../../assets/images/${post.image}" alt="${escapeHtml(post.imageAlt)}">`;
  const page = shell({
    title: post.title,
    description: post.excerpt,
    base: "../../",
    content: `<article><header class="article-header"><p class="eyebrow">Archived story</p><h1>${post.title}</h1><div class="article-meta"><span>Will Hatzer</span><time>${post.date}</time><span>${post.minutes}</span></div></header>${image}<div class="article-body">${post.body}<p><a href="../../blog/">← Back to all stories</a></p></div></article>`
  });
  await write(join(out, `post/${post.slug}/index.html`), page);
}

const redirects = {
  "general-4": ["../tools/snek-desktop.html", "Play NO STEP ON SNEK on desktop"],
  "general-4-1": ["../tools/snek-mobile.html", "Play NO STEP ON SNEK on mobile"],
  "coming-soon-01": ["../tools/snek-remix.html", "Play NO STEP ON SNEK Remix"],
  "blank": ["../tools/map6-analyzer.html", "Open the Map6 Log Analyzer"]
};
for (const [path, [target, label]] of Object.entries(redirects)) {
  await write(join(out, `${path}/index.html`), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta http-equiv="refresh" content="0;url=${target}"><link rel="canonical" href="${target}"><title>${label}</title></head><body><p><a href="${target}">${label}</a></p></body></html>`);
}

const sitemapUrls = ["", "blog/", "tools/", ...posts.map((post) => `post/${post.slug}/`)];
await write(join(out, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapUrls.map((path) => `\n  <url><loc>https://www.charitycase.net/${path}</loc></url>`).join("")}\n</urlset>\n`);
await write(join(out, "robots.txt"), "User-agent: *\nAllow: /\nSitemap: https://www.charitycase.net/sitemap.xml\n");
await write(join(out, "CNAME"), "www.charitycase.net\n");
await write(join(out, ".nojekyll"), "");
await write(join(out, "404.html"), shell({ title: "Page not found", siteName: "CharityCase.net", base: "/", description: "Find the Hatzer family toy drive or the Team Charity Case archive.", content: `<header class="page-intro"><h1>We couldn’t find that page</h1><p>Visit the <a href="/">Hatzer family toy drive</a> or look for an older post in the <a href="/blog/">Team Charity Case archive</a>.</p></header>` }));

async function write(path, contents) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, contents, "utf8");
}
