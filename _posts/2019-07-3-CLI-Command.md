---
layout: post
title: Command-Line Interface CLI Cheatsheet
---

# Command-Line Interface (CLI)

## Introduction
This is a simple guideline and takeaway for reference.

## List files Command
Ctrl+C -> quit the program 
ls -> listing the files ->  
ls -a (list all the files including hidden files)
ls -a -t (-t -> timestamp)
ls --all
cat -> take the files and concacencate -> cat 'fileName'
clear -> clear the output
echo -> 

## Shortcuts
cat <br>
history -> show the command history
press tab can auto complete


## Directories
pwd -> printing working directory
cd
ls -> listing all files
cd .. -> return to the parent directory

## Relative Paths
cat mall/../../menu.txt 

## Absolute Paths
cd / -> '/' means the root directory
cd /home<br>

## Directory Shortcuts
./hello.sh -> '.' means the current directory
cd ~ -> return to the last directory

## Wildcard Expansion
*.txt
echo re*.txt

## View Files by Less
less a.txt
q -> quit
more a.txt

## Working with files
* ls
* copy 
cp bird.txt pigeon.txt
cp bird.txt .. ->'..' means the destination directory 

* move 
mv bird.txt sparrow.txt

* remove 
rm -r mallDirectory -> '-r' means the directory

* make 
mkdir -p -> '-p' means the parent directory

## Files and Directory Naming Convention
case sensitive
best is all lowercase

## Manual 
man
q -> quit

## Other
find -> recursively search<br>
grep 'Windows' -> search through files for lines that contain a certain string<br>
vi -> default editing program<br>
vim<br>
:w -> Enter<br>

nano -> available on Linux
nano file.txt
