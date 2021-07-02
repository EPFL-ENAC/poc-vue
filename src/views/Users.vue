<template>
  <div>
    <ul>
      <li v-for="user of users" v-bind:key="user">
        {{ user }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import { User } from "@/models/user";
import { LocalStorageUtils, Key } from "@/utils/localStorageUtils";

@Component
export default class Users extends Vue {
  users: string[] = [];

  created(): void {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data)
      .then((users) => {
        this.users = users.map((user) => user.name);
      });
    LocalStorageUtils.setValue(Key.NAME, "John Doe");
  }
}
</script>
