<template>
<div id="app">
      <v-app>
        <!-- <v-layout fill-height fluid v-flex column> -->
            <navigation></navigation>
            <tool-bar></tool-bar>
            <main>
              <v-content>
      <v-container fluid>
            <!-- <v-container fluid fill-height> -->
            <tcp-port-list></tcp-port-list>
               </v-container>
    </v-content>
            </main>
            <v-footer app></v-footer>
            <!-- <v-flex>
                <v-card class="mt-5" dark color="primary">
                    <v-card-text >one</v-card-text>
                </v-card>
                <v-card class="mb-5" dark color="secondary">
                    <v-card-text color="white--text" class="light--text" >one</v-card-text>
                </v-card>
                <v-layout justify-space-around>
                    <v-icon large color="green darken-4">business</v-icon>
                    <v-icon large color="blue darken-2">chat</v-icon>
                    <v-icon large color="purple darken-2">dialpad</v-icon>
                    <v-icon large color="teal darken-2">email</v-icon>
                    <v-icon large color="blue-grey darken-2">call_split</v-icon>
                    <v-icon large color="orange darken-2">present_to_all</v-icon>
                </v-layout>
                <v-footer class="pa-3">
                    <v-spacer></v-spacer>
                    <div>© {{ new Date().getFullYear() }}</div>
                </v-footer>
            </v-flex> -->
            <!-- </v-container>  
        </v-layout> -->
      </v-app>
</div>
    </template>
<script>
import Navigation from "./components/Navigation.vue";
import ToolBar from "./components/ToolBar.vue";
import TcpPortList from "./components/TcpPortList.vue";
// With shell.openExternal(url) is how
// external urls must be handled, not href
const shell = require("electron").shell;

export default {
  components: {
    Navigation,
    ToolBar,
    TcpPortList
  },
  methods: {
    link: url => {
      shell.openExternal(url);
    }
  }
};
</script>

<style>
html {
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: auto;
}
#app {
  color: #2c3e50;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}
#app a {
  color: #42b983;
  text-decoration: none;
}
#app p {
  text-align: justify;
}
.logo {
  width: auto;
  height: 100px;
}
</style>
