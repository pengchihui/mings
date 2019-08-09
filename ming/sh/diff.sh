#!bin/bash
echo "更新本地的远程分支" git fetch origin
echo "本地与远程的差集" git log master origin/master
echo "统计文件的改动" git diff --stat master origin/master























