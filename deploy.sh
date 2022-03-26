#!/bin/sh

npm run build &&
  (cd docs/.vitepress && zip -r ../../blog.zip dist) &&
  scp blog.zip victor141516@viti.site:blog.zip &&
  rm blog.zip &&
  ssh victor141516@viti.site 'zsh -i -c "rm -rf services/webs/blog.viti.site/* ; unzip blog.zip -d services/webs/blog.viti.site && \
    rm blog.zip && \
    mv services/webs/blog.viti.site/dist/* services/webs/blog.viti.site && \
    rmdir services/webs/blog.viti.site/dist"'
