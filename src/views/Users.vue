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

@Component({
  components: {},
})
export default class Users extends Vue {
  users: string[] = [];

  created(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => (this.users = users));
  }
}
</script>
