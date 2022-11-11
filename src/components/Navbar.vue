<script setup lang="ts">
import Popper from 'vue3-popper'
</script>

<template>
  <div class="navbar overflow-hidden bg-neutral py-0 text-neutral-content">
    <div class="flex-1">
      <span class="hidden pl-2 text-lg sm:inline">Minecraft advancements tracker</span>
      <span class="inline pl-2 text-lg sm:hidden">Advancements</span>
    </div>

    <div class="flex-none">
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
