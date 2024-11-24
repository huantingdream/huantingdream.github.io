var posts=["2024/11/23/hello-world/","2024/11/24/测试文章/","2024/11/24/群晖套件版Jellyfin添加代理/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };