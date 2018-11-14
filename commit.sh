#!/bin/bash
git add -A . && \
echo "---------------------------------Введи текст комита, будь человеком" && \
read commitMessage && \

git push origin && \

git commit -m "$commitMessage" && \

