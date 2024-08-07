<script setup lang="ts">
import { computed } from "vue";
import { slugify } from "@mdit-vue/shared";
import type { NavLink as NavLinkType } from "../types";
import NavLink from "../NavLink/index.vue";

const props = defineProps<{
  tag?: string;
  title: string;
  noIcon?: boolean;
  items: NavLinkType[];
}>();

const component = computed(() => props.tag ?? "h2");

const formatTitle = computed(() => {
  return slugify(props.title);
});
</script>

<template>
  <component :is="component" v-if="title" :id="formatTitle" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
  </component>
  <div class="nav-links">
    <NavLink
      v-for="item in items"
      :key="item.link"
      :noIcon="noIcon"
      v-bind="{ ...item, ...$attrs }"
    />
  </div>
</template>

<style lang="scss" scoped>
.nav-links {
  --nav-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--nav-gap);
  grid-column-gap: var(--nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--nav-gap);
}

@each $media,
  $size
    in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px)
{
  @media (min-width: $media) {
    .nav-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

@media (min-width: 960px) {
  .nav-links {
    --nav-gap: 20px;
  }
}
</style>
