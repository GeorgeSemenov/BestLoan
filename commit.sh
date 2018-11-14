#!/bin/bash
dt = date "+%H:%M:%S %d/%m/%y" && \
git add -A . && \
echo "Введи текст комита, будь человеком" && \
read commitMessage && \

git commit -m "$commitMessage $dt" && \

echo 'Enter the name of the branch:' && \
read branch && \

git push origin $branch && \

read && \
