<template>
  <v-app>
    <v-card>
      <v-toolbar class="pt-3" color="yellow darken-2" flat>
        <v-spacer></v-spacer>

        <h1 class="customheader">Circular Wait Prevention</h1>

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
    return {}
  },
}
</script>
<style>
.customheader {
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 48px;
  margin: auto;
}
</style>