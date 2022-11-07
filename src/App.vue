<script setup lang="ts">
import { advancements } from './data/advancements'
</script>

<template>
  <div class="mx-auto min-w-[320px] max-w-3xl p-5">
    <Upload />
    <h3 class="m-3 text-center text-2xl text-accent">Advancements</h3>
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div v-for="item in advancements" class="card card-compact bg-base-200">
        <div class="card-body flex-row items-center">
          <AdvancementIcon :data="item" />
          <div>
            <p>
              <b>{{ item.title }}</b>
            </p>
            <p class="mt-2">some text</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
