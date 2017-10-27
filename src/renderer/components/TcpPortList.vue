<template>
  <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="light-blue" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title inset>Tcp ports</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-tile v-for="item in processes" v-bind:key="item.port">            
            <v-list-tile-action>             
               <v-icon :color="item.inUse | power">power</v-icon>
            </v-list-tile-action>            
            <v-list-tile-content>
              <v-list-tile-title>{{ item.name }}</v-list-tile-title>
              <v-list-tile-sub-title class="grey--text">{{ item.port }}</v-list-tile-sub-title>
            </v-list-tile-content>            
          </v-list-tile>                  
        </v-list>
      </v-card>
    </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'; // eslint-disable-line no-unused-vars

export default {
  created() {
    this.$store.dispatch('Process/listen');
  },
  computed: {
    processes() {
      const p = this.$store.getters['Process/sort']();
      console.log(p);
      return p;
    },
  },
  data() {
    return {}
  },
  filters : {
    power(value){
      return value ? "green" : "red";
    }
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
