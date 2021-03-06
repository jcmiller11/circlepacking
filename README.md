# circlepacking.js

_Circle in circle packing javascript library_

Javascript library for quickly and efficiently working with optimal packing of congruent circles into a larger container circle.

Check out the [Demo Page](http://jcmiller11.github.io/circlepacking/).

## Install

For basic operation, just download the circlepacking.js file and <script src="circlepacking.js"></script>.

For working with the positions of inner circles you will need the data-extra directory and must be operating in an environment that allows AJAX calls.

## Documentation

`getPackingDensity(n, circleRadius, containerRadius)`
Returns the packing density of _n_ internal circles with a radius of _circleRadius_ inside of a circle of radius _containerRadius_

`getContainerRadius(n, circleRadius)`
Returns the minimum outer radius required to pack _n_ internal circles with a radius of _circleRadius_

`getCircleRadius(n, containerRadius)`
Returns the maximum radius of _n_ internal circles for them to pack into a circle of radius _containerRadius_

`getN(circleRadius, containerRadius)`
Returns the maximum number of internal circles of radius _circleRadius_ that can pack into a circle of radius _containerRadius_

__The following functions require the inclusion of the data-extra directory__

`getPositions(n, callbackFunction)`

`getScaledPositions(n, containerRadius, callbackFunction)`

## Etc.

This software is released under the [MIT License](http://jcmiller11.github.io/circlepacking/LICENSE.txt).

Many thanks to Dr. Eckard Specht for compiling the pre-computed data this library uses and his [Packomania Site](http://hydra.nat.uni-magdeburg.de/packing/).

Specht, E. 2014. _The best known packings of equal circles in a circle._ [online] Available at: http://hydra.nat.uni-magdeburg.de/packing/cci/cci.html [Accessed: 20 Feb 2014].