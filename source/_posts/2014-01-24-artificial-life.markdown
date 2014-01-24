---
layout: post
title: "An Artificial Life Simulation"
date: 2014-01-24 23:56:07 +0100
comments: true
categories: 
---
Last spring I wrote a short paper about an artificial life simulation. The paper was part of an assignment in publishing results to a scientific standard. Even though the assignment wasn't about creating a good Artificial Life experiment, just a simple simulation, I couldn't resist doing another try on this subject as I had done an artificial life simulation earlier in Java. This time, I had a lot more animals and a bigger map than I had when I did this in Java. I therefore decided to implement it in C++ instead of Java. This naturally brought some speed to the execution. I didn't optimize the code at all though, just a simple omp parallel pragma directive to multi thread the simulation at the experiment level. I Instead focused on writing clean code with small functions and small classes to minimize the need for document the code with comments. When looking at the code in retrospect, the code looks quite ok but some classes are way to big to be clean code. As I felt that the results of the experiment were quite interesting, I thought I would share them and the code. 

I did some small optimizations some months later as the the program ran quite sluggish. At the end, I managed to nearly quadruple the speed by optimizing the hot path. One big increase in performance came when I replaced a modulus operator with an if/else clause. As the else-clause was only triggered 1/32 of the times, the if/else caused a speed up compared to the modulus operator. In the end, the if/else brought a speed increase bigger than the performance penalties coming with invoking the branch predictor. Sure, by using some bit twiddling I may get a little bit more speed but in this case, it isn't really worth that work and the complexity it brings. In the end, I managed to move the bulk of the processor time away from one single function to many, so optimizing it further might only bring a few percent better execution time.

<iframe width="420" height="315" src="//www.youtube.com/embed/KsBChqI0sBk" frameborder="0" allowfullscreen></iframe>

A visualization of the movement of the animals can be seen [here](http://youtu.be/KsBChqI0sBk) (also embedded above). Some interesting trends are the initial chaotic behaviour and later the diagonal wave-like pattern towards the end of the simulation.

The code is published on [GitHub](https://github.com/MattiasLiljeson/Artificial-Life-Sim) under the MIT License (except for EasyBmp).