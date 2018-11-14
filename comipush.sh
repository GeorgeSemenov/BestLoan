#!/bin/bash
git add -A . && \
echo "---------------------------------Введи текст комита, будь человеком" && \
read commitMessage && \

git commit -m "$commitMessage" && \

echo '---------------------------------Enter the name of the branch:' && \
read branch && \

git push origin $branch && \

read && \
