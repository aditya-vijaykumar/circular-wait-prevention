<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" class="mt-5">
      <v-card class="logo py-4 d-flex justify-center">
        <LogoReveal />
      </v-card>
      <v-card>
        <v-card-title>
          This web app explores how circular wait can be prevented!
        </v-card-title>
        <v-card-text>
          <p>
            Read more about Circular Waits and Deadlocks in our documentation
           <v-btn text nuxt to="/docs" color="primary"> here </v-btn> Take a look at our
            GitHub repo for the code
            <v-btn
              text color="primary"
              href="https://github.com/aditya-vijaykumar/circular-wait-prevention"
              target="_blank"
            >
              here
            </v-btn>
          </p>

          <p>
            Click on Continue to explore an interactive implementation of a technique to prevent circular
            waits in Operating Systems.
          </p>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary black--text" class="mr-3 mb-3" nuxt to="/resourceOne">
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