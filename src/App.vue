<template>
  <nav>
    <router-link to="/">Home</router-link> | <!-- a태그 추가-->
    <router-link to="/about">About</router-link> |
    <router-link to="/intro">intro</router-link> |
    <router-link to="/DataBindingList">DataBindingList</router-link> |
    <router-link to="/RenderingView">RenderingView</router-link> |
    <router-link to="/EventClick">EventClick</router-link>
  </nav>
  <router-view/> <!-- 필요한 부분만 화면 전환. -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
