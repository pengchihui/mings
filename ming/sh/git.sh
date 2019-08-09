#!bin/bash
read -p "输入提交更新的描述信息:" -t 70 m
if [ "$m" != "" ] ;
   then
     git add ming/
     echo "追踪完成"
     git commit -m "$m" ming/
     echo "暂存区到本地仓库"
     git push horigin master
     echo "提交到远程仓库"
    else
      echo "描述字符为空"
fi
