<template>
  <header class="bg-primary text-white w-full">
    <div class="flex items-center max-w-7xl p-4 md:p-8">
      <img src="favicon.svg" class="h-12" />
      <nav class="ml-auto">
        <ul class="flex gap-4 grow-0 items-end w-fi">
          <li v-for="item of navigationItems" :key="item.link" class="font-medium text-2xl">
            <a :href="item.link">{{ $t(`header.navigation.${item.translationKey}`) }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface IProps {
  currentPage: string;
}

const props = defineProps<IProps>();

const navigationItems = [
  { link: "#services", translationKey: "services" },
  { link: "#contact", translationKey: "contact" },
];
</script>
