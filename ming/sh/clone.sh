#!bin/bash
read -p "新建文件名:" -t 100 pan
git init $pan && cd $pan
read -p "HTTP仓库名:" -t 100 hh
read -p "文件或文件夹路径:" -t 100 name
echo "开启稀疏克隆模式:"
git config core.sparsecheckout true
echo "稀疏克隆模式开启成功"
echo "$name" >> .git/info/sparse-checkout
git pull $hh master
echo "克隆单个文件或文件夹完成"
