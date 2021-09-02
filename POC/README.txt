60 pixels in each direction
10 fps
--> repeating time space every 6 seconds


how many dimension switches?
	- if just swapped time with 1st or 2nd space dimension:
		still all 6 possibilities, but fewer items
	- labelling possibilites:
		"yxt", "ytx", "xyt", ...

conceptual problems:

A) terrain stays equal in one configuration, but not the others

	solutions:
		- make ground constant in all dimensions
			not a very clean/balanced solution
		- setup 3D clusters and some "Minesweeper" based numbers to prepare for incoming terrain
			too complex (terrain changes "biologically" depending on time AND movement)
			... or maybe not? Make players idle most of the time
			--> but what is the starting condition then?
		- ground is symmetrical across all 3 dimensions
			must probably be some diagonal
		- no ground at beginning
			difficult for Jump'n'Run style
