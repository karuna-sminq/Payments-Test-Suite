#!/usr/bin/bash

d="$(date +'%d-%m-%Y')"
t="$(date +%H:%M)"
now=$d-$t

#Begin console log
exec > >(tee -i logs/payment_logs_$now.txt)
#copy stderr to console output
exec 2>&1

echo '''
Copyright (C) 2016 Sminq India Solutions Pvt Ltd.
Created on 2017-01-05
Updated on 2017-01-05

============================================================
     _______..___  ___.  __  .__   __.   ______
    /       ||   \/   | |  | |  \ |  |  /  __  \
   |   (----`|  \  /  | |  | |   \|  | |  |  |  |
    \   \    |  |\/|  | |  | |  . `  | |  |  |  |
.----)   |   |  |  |  | |  | |  |\   | |  `--'  '--.
|_______/    |__|  |__| |__| |__| \__|  \_____\_____\

============================================================

@author: Karuna Lingham
'''

echo "================================="
echo "Sminq User Web v21 (Beta) ..."
echo "Running Payment Test Suite v1.0.1 ..."
echo "================================="

start=`date +%s`

#Run scripts
for folder in ./*
do

  #  #Begin recording tests for every folder
  #  adb shell screenrecord /sdcard/$folder.mp4 &
   echo "------------------"
   echo "$folder"
   echo "------------------"

  #Begin iterating through every file in specified folder
  for fname in $folder/*.py
  do

    #Execute file
    python $fname
    # total_count=$((total_count + 1))

  done
done

end=`date +%s`
total_time=$((end-start))

echo "================================="
echo "Time taken for sminq test suite: $total_time sec."
echo "================================="
