
#! /bin/bash

YMD=$(date +%Y%m%d)
laiks=`date`
if [ -d "/path/to/dir" ]
then
mkdir $YMD
echo You made $YMD directory!
echo Directory made in $laiks
else
echo Direcory $YMD already exists!
fi

echo Going  in the directory $YMD
cd $YMD
echo Your in the directory $YMD
pwd
