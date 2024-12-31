var posts=["2024/11/23/hello-world/","2024/11/24/群晖套件版Jellyfin添加代理/","2024/11/24/解决使用代理时无法访问UWP相关应用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };