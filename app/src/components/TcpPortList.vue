<template>
  <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="light-blue" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title inset>Tcp ports</v-toolbar-title>
        </v-toolbar>
        <v-list>
          <v-list-tile avatar v-for="item in ports" v-bind:key="item.number">            
            <v-list-tile-content>
              <v-list-tile-title>{{ item.number }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>                    
        </v-list>
      </v-card>
    </v-flex>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {
    this.$store.dispatch('ports/listen');
  },
  computed: {
    ports() {
      return this.$store.getters['ports/ports'];
    }
  },
  data() {
    return {}
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
