---
layout: ../../layouts/MarkdownPostLayout.astro
title: CSS Elements
author: Zachary Henderson
description: "CSS Elements"
image:
    url: "https://cdn.discordapp.com/attachments/954991676177395712/1308672086197141504/SCR-20241119-upqa.png?ex=673ecb5b&is=673d79db&hm=cca31814fe6312cb814e13400070ae575266c6af3184c25049ef2615ca74ff77&"
    alt: "global.css nord theme"
pubDate: 11/30/2024
tags: ["astro", "css", "web design project"]
---

## My Global CSS File
To accurately style all pages, I opted into a global.css file. Although Astro can handle CSS in their separate .astro files that correspond with their page, it is much easier to style the main elements in the global.css file. It is way too big for me to showcase all of it here, but here are some key takeaways from this file:

1. **Mobile Friendliness**: A big purpose of this project is to have amazing support for mobile friendliness, and I tried my best to do that with my CSS and the hamburger JS.

Picture of the primary CSS code for small screens

<img src="https://cdn.discordapp.com/attachments/954991676177395712/1308673820848033802/image.png?ex=673eccf8&is=673d7b78&hm=f892abed1ad62cc2a2573ce1b5c306b860c549aaecdd5d0caabe2a18f168a989&" alt="Small Screens" class="responsive-image" />

And for larger screens

<img src="https://cdn.discordapp.com/attachments/954991676177395712/1308673820382593024/image.png?ex=673eccf8&is=673d7b78&hm=31fabd5268138d3b83e523845816cdc2bf4a4edc53d47a6cac4cc19f9295fd00&" alt="Larger Screens" class="responsive-image" />

2. **The Theme**: The theme is what makes it breaks a website in many cases, and I chose an open source theme that would put the eyes and mind as ease when viewing. [Nord](https://www.nordtheme.com/) theme is a popular choice that includes light and dark elements and has amazing support across the board. The image was showcased as the primary image for this post, and rightfully so, it is a beautiful theme and it was a great choice for this website overall.

3. **Responsive Images**: Last but *certainly* not least is my CSS code to make images fit better in these very blog posts. When first applying them to the blog, they would have a very inconsistent sizing issue and this fixed that and added great style to the images.

Picture of the code for the responsive images element

<img src="https://cdn.discordapp.com/attachments/954991676177395712/1308674974323839027/image.png?ex=673ece0b&is=673d7c8b&hm=c5d1bc894cb19c13e89122f63d9e7dc39282194a6426c222639e3e0692a60d43&" alt="Responsive Image Code" class="responsive-image" />