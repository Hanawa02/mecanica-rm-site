<template>
  <ul>
    <li v-for="image of images" :key="image.src">
      <img :src="image.src" :alt="image.altText" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";

export interface Image {
  src: string;
  altText: string;
  link?: string;
}

// interface IProps {
//   images: Image[];
// }

// const props = defineProps<IProps>();
const images: Image[] = [
  { src: "https://media.graphassets.com/fIQ8KSUWRfq82lgc7te1", altText: "Test" },
];
</script>
