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

              <template v-for="rs in resources">
                <v-row :key="rs.index" no-gutters>
                  <v-col class="mt-3" cols="12">
                    <h5>Resource R{{ rs.index + 1 }}</h5>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="rs.name"
                      label="Name"
                      required
                      :rules="nameRules"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="1"> </v-col>
                  <v-col cols="5">
                    <v-text-field
                      v-model="rs.priority"
                      label="Priority"
                      type="number"
                      required
                      :rules="priorityRules"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </template>
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
  middleware({ store, redirect }) {
    if (store.state.resourceCount == 0 || store.state.resourceCount == null) {
      return redirect("/");
    }
  },
  head: {
    title: "Step Two",
  },
  data() {
    return {
      valid: true,
      resourcesCount: 0,
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length > 2) || "Name must be at least 3 characters long",
      ],
      priorityRules: [(v) => v > 0 || "Priority has to be greater than 0."],
      resources: [],
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    validate() {
      if (this.$refs.form.validate()) {
        for (let i = 0; i < this.resources.length; i++) {
          this.resources[i].priority = parseInt(this.resources[i].priority);
        }
        this.$store.dispatch("setAllResources", {
          resources: this.resources,
        });
        this.$router.push("/processOne");
      }
    },
  },
  computed: {
    resourceCount() {
      return this.$store.state.resourceCount;
    },
  },
  mounted() {
    let lngth = this.$store.state.resourceCount;
    for (let i = 0; i < lngth; i++) {
      this.resources.push({
        name: "",
        priority: 0,
        availability: true,
        index: i,
        allotedTo: -999,
      });
    }
  },
});
</script>

<style scoped>
</style>