# api-documentation-jekyll

#### Build
```shell
docker run -it --rm -v $PWD:/srv/jekyll jekyll/builder:pages jekyll build
```

#### Serve
```shell
docker run -it --rm -v $PWD:/srv/jekyll -p 4000:4000 jekyll/builder:pages jekyll serve --force_polling --incremental
```
