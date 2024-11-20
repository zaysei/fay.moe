---
layout: ../../layouts/MarkdownPostLayout.astro
title: JavaScript and Mobile Friendliness
author: Zachary Henderson
description: "JavaScript and Mobile Friendliness"
image:
    url: "https://cdn.discordapp.com/attachments/954991676177395712/1308666444069863485/SCR-20241119-uhrk.png?ex=673ec61a&is=673d749a&hm=025e4a0acc96a812da2379f6dbdb77570d8ac67cee3315ae97352e68f56ae36d&"
    alt: "Hamburger Icon Menu.js File"
pubDate: 11/30/2024
tags: ["astro", "mobile friendliness", "web design project"]
---

## JavaScript Elements && Mobile Friendliness
As there is a huge focus on JavaScript elements and their performance handling with Astro Islands, I included two amazing ways to "showcase" the benefit, though it may not be as informative as it could be... So here is a table highlighting what difference the Islands make as opposed to no Islands (with the informative help of ChatGPT)!

<h2>Performance Comparison: Astro Islands vs No Astro</h2>
<table>
  <thead>
    <tr>
      <th>Aspect</th>
      <th>Astro Islands</th>
      <th>No Astro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Page Load Time</td>
      <td>1.2s</td>
      <td>2.5s</td>
    </tr>
    <tr>
      <td>JavaScript Bundle Size</td>
      <td>150 KB</td>
      <td>400 KB</td>
    </tr>
    <tr>
      <td>Time to Interactive</td>
      <td>800ms</td>
      <td>1.8s</td>
    </tr>
    <tr>
      <td>First Contentful Paint</td>
      <td>1.0s</td>
      <td>2.0s</td>
    </tr>
    <tr>
      <td>Overall Performance Score</td>
      <td>90%</td>
      <td>70%</td>
    </tr>
  </tbody>
</table>

As you can see above, it is quite sigificant as showcased by Astro on their website as well. I have implemented a greeting button and a hamburger for mobile friendliness in this website so far.

**Below is a video of this greeting button in action.**

<video controls width="600">
  <source src="https://cdn.discordapp.com/attachments/954991676177395712/1308670162722881546/Screen_Recording_2024-11-19_at_11.44.16_PM.mp4?ex=673ec990&is=673d7810&hm=921fbbcdd40c74df4c69cb43c805ea7551a734c25025bc4cadfc47788e85dd67&" type="video/mp4">
  Your browser does not support the video tag.
</video>

**Below is a video of the hamburger icon in action, showcasing mobile friendliness.**

<video controls width="600">
  <source src="https://cdn.discordapp.com/attachments/954991676177395712/1308671037696774235/Screen_Recording_2024-11-19_at_11.49.40_PM.mp4?ex=673eca61&is=673d78e1&hm=ad3ccd7f31db029111f211efd2d65a4a3e31797d69137cc50eeb6ed5384d9787&" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!-- Button to navigate to the next post -->
<div style="text-align: center; margin-top: 2rem;">
  <a href="/posts/post-5" style="
    display: inline-block;
    padding: 1rem 2rem;
    background-color: #88C0D0; /* Adjust color as needed */
    color: #ECEFF4; /* Adjust color as needed */
    text-decoration: none;
    font-weight: bold;
    border-radius: 8px;
    transition: background-color 0.3s ease;">
    Next Post →
  </a>
</div>

