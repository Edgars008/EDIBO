
#!/bin/bash
if [ $# == 1 ]
then
git config --global user.email edgarsnaglis300@gmail.com
git add .
git commit -m $1
git push origin master
fi
