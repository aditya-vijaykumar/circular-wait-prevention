<template>
  <div>
    <v-row justify="center" align="center" class="mb-14">
      <v-col cols="12" sm="8" md="6" lg="6" offset="3" class="mt-5">
        <v-card>
          <v-card-title class="headline"> About the Project </v-card-title>
          <v-card-text>
            <p>
              This project has been realized as a part of Operating System
              Learning Assignment Component - 2 by Team Name "Golden
              Dandelions". You can learn more on the topic and process by
              reading the documentation link available in the menu.
            </p>
          
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12" offset="">
        <h2 class="text-center">Faculty In-Charge</h2>
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-spacer></v-spacer>
          <v-avatar size="250" class="mx-15 mt-9">
            <img
              alt="user"
              src="https://www.shareicon.net/data/512x512/2016/09/01/822761_user_512x512.png"
            />
          </v-avatar>
          <v-spacer></v-spacer>
          <v-card-title><v-spacer></v-spacer>Ms. Deepthi Shetty<v-spacer></v-spacer></v-card-title>
          <v-card-text>
            <!-- <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium consequuntur possimus odit, at error dolores.
            </div> -->
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="ma-n12">
        <h2 class="text-center">Team Members</h2>
      </v-col>
      <v-col cols="3" offset="2">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-spacer></v-spacer>
          <v-avatar size="17rem" class="">
            <img
              alt="user"
              src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
            />
          </v-avatar>
          <v-spacer></v-spacer>
          <v-card-title><v-spacer></v-spacer>Aditya Vijaykumar<v-spacer></v-spacer></v-card-title>
          <v-card-text>
            <!-- <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium consequuntur possimus odit, at error dolores.
            </div> -->
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-title></v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="3">
                <v-btn icon color="primary" link href="" target="_blank">
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="12" sm="3">
                <v-btn icon color="primary" link href="" target="_blank">
                  <v-icon>mdi-github</v-icon>
                </v-btn> </v-col
              ><v-col cols="12" sm="3">
                <v-btn icon color="primary" link href="" target="_blank">
                  <v-icon>mdi-twitter</v-icon>
                </v-btn> </v-col
              ><v-col cols="12" sm="3">
                <v-btn icon color="primary" link href="" target="_blank">
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions> </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-spacer></v-spacer>
          <v-avatar size="17rem" class="">
            <img
              alt="user"
              src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-male-avatar-simple-cartoon-design-png-image_1934458.jpg"
            />
          </v-avatar>
          <v-spacer></v-spacer>
          <v-card-title> <v-spacer></v-spacer> Uzair Ahmed<v-spacer></v-spacer></v-card-title>
          <v-card-text>
            <!-- <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium consequuntur possimus odit, at error dolores.
            </div> -->
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-title></v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="3">
                <v-btn icon color="primary" link href="" target="_blank">
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </v-col>
              <v-col cols="12" sm="3">
                <v-btn icon color="primary" link href="" target="_blank">
                  <v-icon>mdi-github</v-icon>
                </v-btn> </v-col
              ><v-col cols="12" sm="3">
                <v-btn icon color="primary" link href="" target="_blank">
                  <v-icon>mdi-twitter</v-icon>
                </v-btn> </v-col
              ><v-col cols="12" sm="3">
                <v-btn icon color="primary" link href="" target="_blank">
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions> </v-card-actions>
        </v-card>
        <v-col cols="2"></v-col>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  layout: "withNavDrawer",
  head() {
    const title = "About the Project";
    return {
      title,
    };
  },
  data: () => ({
    loading: false,
    selection: 1,
  }),
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
<style scoped>
h2 {
  font-size: "96px";
  font-family: Montserrat, Verdana, Geneva, Tahoma, sans-serif;
}
</style>