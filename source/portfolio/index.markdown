---
layout: page
title: "portfolio"
comments: false
sharing: false
footer: false
---
My main experience is from game projects were I've mostly worked on architecture and rendering. I do however have other interests as well. Some of these ramblings are presented below.

## Amalgamation
<iframe width="560" height="315" src="http://www.indiedb.com/media/iframe/811308" frameborder="0" scrolling="no" allowfullscreen></iframe>

I've been part of some quite large game projects as a member of a group. The biggest and longest was a game project for six months were we started from scratch and built a modern 3D space shooter with fun gameplay (at least that's what I think ;-)) and quite some eye candy. Someday, not to far into the future, I will write a few blog posts about the game. In the meantime you can fork the source code on [GitHub](https://github.com/MattiasLiljeson/Amalgamation) and download a compiled executable from [IndieDB](http://www.indiedb.com/games/amalgamation). 

## The little cheese boy
In the autumn of 2012, I together with some friends made a small pac-man clone with a twist in a project course. The goal with this project was to get a grip on Agile methodologies, especially Scrum, and to successfully deliver a cross-platform game. In the end, I think we got a cute little game together which the "customer" seemed to like a lot. 

<iframe width="560" height="315" src="http://www.indiedb.com/media/iframe/725823" frameborder="0" scrolling="no" allowfullscreen></iframe>

Some technical notes: The customers requirements where a cross-platform game running both Windows and Linux. The Windows version were to use DirectX11 and the Linux version was required to use OpenGL 4. We used a data-driven approach when communicating with the two render back-ends which made the whole cross-platfrom thing nearly breeze. A part from some driver issues on our Linux machine. We used Visual studio 2010 when developing the game. I created a custom make-file that parsed the solutions project folders and compiled and linked the game with the required libraries and dependencies. I also wrote a couple small sh-scripts that pulled the whole thing from GitHub, built it and emailed any erroneous output to a specified email adress. This was then triggered to run from a cron-script each lunch and each night. A quite simple and lightweight way to do automated builds and continuous integration. The code is released under the MIT license and can be downloaded on [GitHub](https://github.com/MattiasLiljeson/denLilleOstPojken). You can see more videos and images on the [IndieDB](http://www.indiedb.com/games/the-little-cheese-boy) page. You can also download a compiled version from there