<template>
  <div id="preview-area" class="bg-white p-6 border rounded shadow-md space-y-3">
    <h2 v-if="form.name" class="text-xl font-bold">{{ form.name }}</h2>
    <p v-if="form.trait"><strong>성격:</strong> {{ form.trait }}</p>
    <p v-if="form.motivation"><strong>지원 동기:</strong> {{ form.motivation }}</p>
    <p v-if="form.strength"><strong>장점:</strong> {{ form.strength }}</p>
    <p v-if="form.weakness"><strong>단점:</strong> {{ form.weakness }}</p>
    <p v-if="form.goal"><strong>입사 후 포부:</strong> {{ form.goal }}</p>
    <p v-if="form.experience"><strong>경험/프로젝트:</strong> {{ form.experience }}</p>
  </div>
</template>

<script setup>
defineProps(['form'])
</script>
