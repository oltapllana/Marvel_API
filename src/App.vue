<template>
  <div id="app">
      <header>
        <router-link to="/" class="a">Characters</router-link>
        <router-link to="/comics" class="comics a">Comics</router-link>
      </header>

    <router-view/>
  </div>
</template>

<style>
#app {
  padding: 30px;
  padding-top:40px;
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
  color: rgb(193, 27, 55);
}
header{
  background-color: rgb(219, 10, 10);
  padding: 10px;
  border-radius: 10px;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-left: 50px;
}
.a{
  color: black;
  font-weight: bolder;
  color: white;

}



.comics{
  margin-left: 20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>
