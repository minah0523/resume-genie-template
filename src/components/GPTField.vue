<template>
  <div class="space-y-2">
    <label class="text-sm font-semibold">프롬프트 편집</label>
    <textarea v-model="localPrompt" class="input text-sm h-24" />

    <div class="flex gap-2 items-center">
      <button @click="generate" class="text-sm px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" :disabled="loading">
        ✍️ 문장 추천
      </button>
      <span v-if="loading" class="text-sm text-gray-500">생성 중...</span>
    </div>

    <textarea v-model="localValue" class="input h-24" @input="emitUpdate" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { generateSuggestion } from '../utils/useGPT'

const props = defineProps(['value', 'label', 'prompt'])
const emit = defineEmits(['update'])

const localValue = ref(props.value)
const localPrompt = ref(props.prompt)
const loading = ref(false)

watch(() => props.value, (val) => (localValue.value = val))

const emitUpdate = () => {
  emit('update', localValue.value)
}

const generate = async () => {
  if (!localPrompt.value.trim()) return
  loading.value = true
  const result = await generateSuggestion(localPrompt.value)
  localValue.value = result
  emitUpdate()
  loading.value = false
}
</script>

<style scoped>
.input {
  @apply border border-gray-300 p-2 rounded w-full;
}
</style>
