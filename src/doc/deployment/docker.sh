# 下面命令在project_directory/src/doc/deployment下执行
# 制作原始nginx镜像
docker run --name my-nginx -p 80:80 -d nginx:latest
# 拷贝项目生产代码到nginx容器/my_app目录
docker cp ../../../dist/paotui my-nginx:/my_app
# 拷贝当前目录的配置文件到容器当中
docker cp default.http.conf my-nginx:/etc/nginx/conf.d/default.conf
# 重启容器
docker restart my-nginx

# 将含前端网页的容器重新制作为镜像
# b52947add223
docker commit b52947add223 magicpowerworld/paotui_front_end:20210718
# 制作完镜像之后推送
docker push magicpowerworld/paotui_front_end:20210718

# 生产环境下部署镜像
docker run --name paotui_front_end -p 443:443 -d magicpowerworld/paotui_front_end:20210710

# 进入docker将配置文件复制到本地
docker exec -it my-nginx bash
docker cp my-nginx:/etc/nginx/conf.d/default.conf .
