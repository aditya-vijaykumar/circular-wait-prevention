<template>
  <div class="">
    <v-row class="mt-15 mb-15">
      <v-col
        lg="4"
        md="4"
        sm="8"
        cols="12"
        offset-md="4"
        offset-lg="4"
        offset-sm="2"
      >
        <v-btn class="mb-4" icon outlined color="blue" @click="back">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-card>
          <v-card-title>
            <v-spacer></v-spacer>
            <h3 class="text-center display-1">Resources</h3>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <!-- Form -->
              <v-text-field
                v-model="resourcesCount"
                label="Number of Resources"
                hint="Enter the number of resources"
                type="number"
                persistent-hint
                required
                :rules="resourcesCountRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green white--text"
              class="mr-4 mb-3"
              @click="validate"
              type="submit"
            >
              Next
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  head: {
    title: "Step One",
  },
  data() {
    return {
      valid: true,
      resourcesCount: 0,
      resourcesCountRules: [
        (v) =>
          v > 1 ||
          "For the algorithm to work, you need to enter at least 2 resources.",
        (v) => v < 11 || "Max 10 resources allowed.",
      ],
    };
  },
  methods: {
    back() {
      this.$router.replace("/");
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.resourcesCount = parseInt(this.resourcesCount);
        this.$store.dispatch("setResourceCount", {
          resourcesCount: this.resourcesCount,
        });
        this.$router.push("/resourceTwo");
      }
    },
  },
  computed: {},
});
</script>

<style scoped>
</style>