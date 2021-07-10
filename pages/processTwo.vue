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
            <h3 class="text-center display-1">Processes</h3>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <!-- Form -->
              <template v-for="ps in allProcesses">
                <v-row
                  :key="ps.index"
                  no-gutters
                  v-if="processIndex == ps.index"
                >
                  <v-col cols="12" v-if="processAllocation">
                    <h3>Process P{{ ps.index + 1 }} Allocated Resources</h3>
                    <v-select
                      v-model="ps.alStrg"
                      :items="allocationOptions"
                      label="Select"
                      multiple
                      chips
                      hint="Process Resources that have already been allocated"
                      persistent-hint
                    ></v-select>
                  </v-col>
                  <v-col cols="12" v-else>
                    <h3>Process P{{ ps.index + 1 }} Required Resources</h3>
                    <v-select
                      v-model="ps.reqStrg"
                      :items="resourceOptions"
                      label="Select"
                      multiple
                      chips
                      hint="Note: The order in which you choose makes a difference."
                      persistent-hint
                    ></v-select>
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
              @click="nextStage"
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
import { mapState } from "vuex";

export default Vue.extend({
  middleware({ store, redirect }) {
    if (
      store.state.resourceCount == 0 ||
      store.state.resourceCount == null ||
      store.state.resources.length < 1 ||
      store.state.processCount == 0 ||
      store.state.resourceCount == null
    ) {
      return redirect("/");
    }
  },
  head: {
    title: "Step Four",
  },
  data() {
    return {
      valid: true,
      processesCount: 0,
      processesCountRules: [
        (v) =>
          v > 1 ||
          "For the algorithm to work, you need to enter at least 2 processes.",
      ],
      e7: [],
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
      resourceOptions: [],
      allocationOptions: [],
      processIndex: 0,
      processAllocation: true,
      allProcesses: [],
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    nextStage() {
      if (this.processAllocation) {
        this.allocationOptions = this.allocationOptions.filter(
          (rs) => !this.allProcesses[this.processIndex].alStrg.includes(rs)
        );
        this.resourceOptions = this.resourceOptions.filter(
          (rs) => !this.allProcesses[this.processIndex].alStrg.includes(rs)
        );
        this.processAllocation = false;
      } else if (this.processIndex < this.allProcesses.length - 1) {
        this.processAllocation = true;
        this.processIndex++;
        this.resetResourceOptions();
      } else {
        //last
        this.computeAndCommit();
        this.processIndex++;
      }
    },
    computeAndCommit() {
      console.log("All done");
      for (let i = 0; i < this.allProcesses.length; i++) {
        this.allProcesses[i].alStrg.forEach((strg) => {
          let index = parseInt(this.resources.map((a) => a.name).indexOf(strg));
          this.$store.dispatch("setResourceAsUnavailable", { index, i });
          this.resources[index].availability = false;
          if (!this.allProcesses[i].allocated.includes(index)) {
            this.allProcesses[i].allocated.push(index);
          }
        });
        this.allProcesses[i].reqStrg.forEach((strg) => {
          let index = parseInt(this.resources.map((a) => a.name).indexOf(strg));
          if (!this.allProcesses[i].required.includes(index)) {
            this.allProcesses[i].required.push(index);
          }
        });
      }
      console.log(this.allProcesses);
      console.log(this.resources);
      this.$store.dispatch("setAllProcesses", { processes: this.allProcesses });
      this.$router.replace("/results");
    },
    resetResourceOptions() {
      let lngth = this.resources.length;
      for (let i = 0; i < lngth; i++) {
        this.resourceOptions.push(this.resources[i].name);
      }
    },
  },
  computed: {
    // ...mapState(["resources"]),
  },
  mounted() {
    this.resources = this.$store.state.resources;
    let lngth = this.resources.length;
    for (let i = 0; i < lngth; i++) {
      this.resourceOptions.push(this.resources[i].name);
      this.allocationOptions.push(this.resources[i].name);
    }

    let pcount = this.$store.state.processCount;
    for (let i = 0; i < pcount; i++) {
      this.allProcesses.push({
        index: i,
        allocated: [],
        alStrg: [],
        required: [],
        reqStrg: [],
        completed: false,
      });
    }
  },
});
</script>

<style scoped>
</style>