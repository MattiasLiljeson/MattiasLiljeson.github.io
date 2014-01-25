---
layout: post
title: "The little cheese boy"
date: 2014-01-25 11:09:15 +0100
comments: true
categories: 
- The-little-cheese-boy
- game
- agile
- scrum
- portfolio
---

In the autumn of 2012, I together with some friends made a small pac-man clone with a twist in a project course. The goal with this project was to get a grip on Agile methodologies, especially Scrum, and to successfully deliver a cross-platform game. In the end, I think we got a cute little game together which the "customer" (a prof. acting customer) seemed to like a lot.

<!-- more -->

<iframe width="560" height="315" src="http://www.indiedb.com/media/iframe/725823" frameborder="0" scrolling="no" allowfullscreen></iframe>

The "customer's" requirements where a cross-platform game running both Windows and Linux. The Windows version were to use DirectX11 and the Linux version was required to use OpenGL 4. We used a data-oriented approach when communicating with the two render back-ends which made the whole cross-platfrom thing nearly breeze. A part from some driver issues on our Linux machine. We used Visual studio 2010 when developing the game. I created a custom make-file that parsed the solutions project folders and compiled and linked the game with the required libraries and dependencies. I also wrote a couple small sh-scripts that pulled the whole thing from GitHub, built it and emailed any erroneous output to a specified email adress. This was then triggered to run from a cron-script each lunch and each night. This proved to be a quite simple and lightweight way to do automated builds and continuous integration. The code is released under the MIT license and can be downloaded on [GitHub](https://github.com/MattiasLiljeson/denLilleOstPojken). You can see more videos and images on the [IndieDB](http://www.indiedb.com/games/the-little-cheese-boy) page. You can also download a compiled version from there