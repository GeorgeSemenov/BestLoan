#!/bin/bash
git add -A . && \
echo "---------------------------------Введи текст комита, будь человеком" && \
read commitMessage && \
git commit -m "$commitMessage" && \
git push origin && \

