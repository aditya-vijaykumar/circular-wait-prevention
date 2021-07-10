<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" class="mt-5">
      <v-card class="logo py-4 d-flex justify-center">
        <LogoReveal />
      </v-card>
      <v-card>
        <v-card-title class="headline">
          Hello! This web app explores how circular wait can be prevented!
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
          <a
            href="https://github.com/aditya-vijaykumar/circular-wait-prevention"
            target="_blank"
            rel="noopener noreferrer"
            class="blue--text"
          >
            Our GitHub Repo
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary black--text" nuxt to="/resourceOne">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  layout: "withNavDrawer",
  head() {
    const title = "Home Page";
    return {
      title,
    };
  },
};
</script>