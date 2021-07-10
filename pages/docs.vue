<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" class="mt-5">
      <v-card>
        <v-card-title class="headline">
         <v-spacer></v-spacer> Documentation<v-spacer></v-spacer> 
        </v-card-title>
        <v-card-text>
          <p>Deadlocks are a system state where etc tec</p>
          <p>
            Circular Waits occurs when etc etc. Read more about it
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="blue--text"
            >
              here </a
            >.
          </p>
          <br />
          <p>
            Click on Continue to expolre a popular technique to prevent circular
            waits and thus, even deadlocks.
          </p>
          <hr class="my-3" />
          <br />

        </v-card-text>
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  layout: "withNavDrawer",
  head() {
    const title = "Documentation";
    return {
      title,
    };
  },
};
</script>