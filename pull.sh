#!/bin/bash

## ena scriptaki gia na kanei kaneis 
## eukola pull
## ektelite os:
## ./pull arg1
## opou arg1 to minima p tha periexete mesa sto commit
## enjoy

git add *
git commit -m '$1'
git pull origin master

