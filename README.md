# api-documentation-jekyll

Build
```
docker run -it --rm --name="jekyll-build" -v $(pwd):/srv/jekyll jekyll/jekyll:pages jekyll build
```

Serve
```
docker run -it --rm --name="jekyll-serve" -v $(pwd):/srv/jekyll -p $(docker-machine ip `docker-machine active`):4000:4000 jekyll/jekyll:pages jekyll serve --force_polling --incremental
docker run -d --name="jekyll-serve" -v $(pwd):/srv/jekyll -p $(docker-machine ip `docker-machine active`):4000:4000 jekyll/jekyll:pages jekyll serve --force_polling --incremental
```
