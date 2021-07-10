<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed clipped app temporary>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          nuxt
          link
          :to="item.route"
          active-class=""
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          class="mt-3"
          link
          href="https://www.notion.so/Circular-Wait-Prevention-c5fa39d1dd954a8fb87a61c7158afc63"
          target="_blank"
        >
          <v-list-item-action>
            <v-icon color="grey darken-1"> mdi-file-document </v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">
            Documentation
          </v-list-item-title>
        </v-list-item>
        <v-list-item
          class="mt-3"
          link
          href="https://github.com/aditya-vijaykumar/circular-wait-prevention"
          target="_blank"
        >
          <v-list-item-action>
            <v-icon color="grey darken-1"> mdi-github </v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">
            GitHub
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-card>
      <v-toolbar class="pt-3" color="yellow darken-2" flat>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <h1 class="customheader">OS Project</h1>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <template v-slot:extension>
          <v-tabs align-with-title> </v-tabs>
        </template>
      </v-toolbar>
    </v-card>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="true" app>
      <v-spacer></v-spacer>
      <span class="center"
        >&copy; {{ new Date().getFullYear() }} Golden Dandelions</span
      >
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { icon: "mdi-home-variant-outline", text: "Home", route: "/" },
        { icon: "mdi-information-outline", text: "About", route: "/about" },
      ],
    };
  },
};
</script>

<style>
.customheader {
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 48px;
  margin: auto;
}
</style>