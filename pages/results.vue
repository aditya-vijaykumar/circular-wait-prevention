<template>
  <div class="">
    <v-row class="mt-15 mb-15">
      <v-col
        lg="5"
        md="5"
        sm="10"
        cols="12"
        offset-md="1"
        offset-lg="1"
        offset-sm="1"
      >
        <v-card>
          <v-card-title>
            <v-spacer></v-spacer>
            <h3 class="text-center display-1">Input Received</h3>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Process</th>
                    <th class="text-left">Allocated</th>
                    <th class="text-left">Required</th>
                    <th class="text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="ps in processes" :key="ps.index">
                    <td>
                      <strong>P{{ ps.index + 1 }}</strong>
                    </td>
                    <td>{{ ps.alStrg.toString() }}</td>
                    <td>
                      {{ ps.reqStrg.toString() }}
                    </td>
                    <td>
                      <span
                        v-if="!ps.completed"
                        class="primary black--text pa-3"
                      >
                        Executing</span
                      >
                      <span v-else class="green white--text pa-3">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <br /><br />
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Resource</th>
                    <th class="text-left">Priority</th>
                    <th class="text-left">Held By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="rs in resources" :key="rs.index">
                    <td>{{ rs.name }}</td>
                    <td>{{ rs.priority }}</td>
                    <td v-if="rs.allotedTo >= 0" class="white--text">
                      <span class="red pa-3">P{{ rs.allotedTo + 1 }}</span>
                    </td>
                    <td v-else class="white--text">
                      <span class="green pa-3">Available</span>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <!-- Another table to show results? -->
          </v-card-text>
          <v-card-actions>
             <v-btn
              color="yellow darken-3"
              outlined
              class="ml-4 mb-3"
              nuxt to="/"
            >
              Home
            </v-btn>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-btn
              color="green white--text"
              class=" mb-3"
              @click="run"
              type="submit"
            >
              Cycle
            </v-btn>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col
        lg="4"
        md="4"
        sm="10"
        cols="12"
        offset-md="1"
        offset-lg="1"
        offset-sm="1"
      >
        <v-card>
          <v-card-title>
            <v-spacer></v-spacer>
            <h3 class="text-center display-1">Messages</h3>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <div id="messages">
              <p></p>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary black--text"
              class="mr-4 mb-3"
              @click="clear"
              type="submit"
            >
              Clear
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
  data() {
    return {};
  },
  methods: {
    clear() {
      document.getElementById("messages").innerHTML = "";
    },
    run() {
      let msgdiv = document.getElementById("messages");
      for (let i = 0; i < this.processes.length; i++) {
        let highestPriority = Math.max.apply(
          null,
          this.processes[i].allocatedPriorities
        );
        console.log(`Highest priority for P${i} is ${highestPriority}`);
        if (this.processes[i].required.length > 0) {
          let resourceIndex = this.processes[i].required[0];

          if (highestPriority > this.resources[resourceIndex].priority) {
            //error
            let text = `<p class="error--text mt-2"><strong>For P${
              i + 1
            } - </strong> INVALID REQUEST, ALLOCATED RESOURCES BEING FREED. Resource with priority ${highestPriority} held and requested resource has a priority of ${
              this.resources[resourceIndex].priority
            } which is lower. </p>`;
            this.resetProcess(i);
            msgdiv.innerHTML += text;
            //alert to release all allocated resources
          } else {
            if (this.resources[resourceIndex].availability) {
              let text = `<p class="green--text darken-4 mt-2"><strong>For P${
                i + 1
              } - </strong> VALID REQUEST, RESOURCE AVAILABLE AND REQUEST GRANTED.  </p>`;
              msgdiv.innerHTML += text;
              this.dequeue(i, resourceIndex);
              //dequeue operation
            } else {
              let text = `<p class="primary--text mt-2"><strong>For P${
                i + 1
              } - </strong> VALID REQUEST, RESOURCE UNAVAILABLE AND HENCE, WAITING. </p>`;
              msgdiv.innerHTML += text;
            }
          }
        } else {
          let text = `<p class="green--text darken-4 mt-2"><strong>For P${
            i + 1
          } - </strong> NO MORE RESOURCES REQUIRED, CONSIDERING COMPLETED.  </p>`;
          this.completeProcess(i);
          msgdiv.innerHTML += text;
        }
      }
      let text = `<hr>`;
      msgdiv.innerHTML += text;
    },
    dequeue(index, rsIndex) {
      this.$store.dispatch("deQueueOperation", { rsIndex, index });
    },
    completeProcess(index) {
      this.$store.dispatch("completeProcess", { index });
    },
    resetProcess(index) {
      this.$store.dispatch("resetProcess", { index });
    },
  },
  computed: {
    ...mapState(["resources", "processes"]),
  },
  mounted() {
    this.$store.dispatch("setAllocatedResourcePriorities");
  },
});
</script>

<style scoped>
</style>