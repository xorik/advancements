<script setup lang="ts">
import Popper from 'vue3-popper'

import { useTheme } from '../composable/theme'

const { theme, switchTheme } = useTheme()
</script>

<template>
  <div class="navbar overflow-hidden bg-neutral py-0 text-neutral-content">
    <div class="flex-1">
      <span class="hidden pl-2 text-lg sm:inline">Minecraft advancements tracker</span>
      <span class="inline pl-2 text-lg sm:hidden">Advancements</span>
    </div>

    <div class="flex-none">
      <Popper content="Dark/light/auto theme" :hover="true" :arrow="true" class="p-2">
        <a class="cursor-pointer hover:text-accent" @click="switchTheme()">
          <i-ic-outline-brightness-auto v-if="theme === 'auto'" class="text-xl" />
          <i-ph-moon v-else-if="theme === 'dark'" class="text-xl" />
          <i-ph-sun v-else class="text-xl" />
        </a>
      </Popper>

      <Popper content="Buy me a coffee" :hover="true" :arrow="true" class="p-2">
        <a href="https://github.com/sponsors/xorik" target="_blank" class="hover:text-accent">
          <i-ph-coffee class="text-xl" />
        </a>
      </Popper>
      <Popper content="I have an improvement idea" :hover="true" :arrow="true" class="p-2">
        <a href="https://github.com/xorik/advancements/issues" target="_blank" class="hover:text-accent">
          <i-ph-lightbulb-filament class="text-xl" />
        </a>
      </Popper>
      <Popper content="Github" :hover="true" :arrow="true" class="p-2">
        <a href="https://github.com/xorik/advancements" target="_blank" class="hover:text-accent">
          <i-ph-github-logo class="text-xl" />
        </a>
      </Popper>
    </div>
  </div>
</template>
