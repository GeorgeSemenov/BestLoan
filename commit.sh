#!/bin/bash
echo "---------------------------------Введи текст комита, будь человеком" && \
read commitMessage && \
git add -A . && \

git commit -m "$commitMessage" && \
