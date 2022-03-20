git 使用

从本地推送代码到GitHub

1. GitHub先创建新的repository
2. git init -b main                         main是分支名字
3. git add .                                添加要上传到文件
4. git commit -m "First commit"             commit改动
5. git remote add origin  <REMOTE_URL>      origin是远程repository名字，也就是指当前本地仓库名字，URL是GitHub的主repository的URL
6. git remote -v                            可以查看当前repository下的分支
7. git push -u origin main                  origin和main是上面已经指定过的名字

以上步骤完成后之后可以只用git push完成代码推送至GitHub。有时候网络问题可能push失败，等一会儿再试试就可以