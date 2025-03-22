<!-- App.vue -->
<template>
  <div class="h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100">
    <!-- 좌측: 입력 폼 -->
    <div class="h-full overflow-y-auto p-6">
      <div class="max-w-2xl mx-auto space-y-4">
        <h1 class="text-2xl font-bold text-gray-800">✍️ 자기소개서 생성기</h1>
        <InputForm :form="form" />
      </div>
    </div>

    <!-- 우측: 미리보기 + PDF 저장 -->
    <div class="relative h-full overflow-y-auto bg-white p-6">
      <div class="max-w-2xl mx-auto">
        <Preview :form="form" />
      </div>
      <div class="sticky bottom-4 flex justify-center mt-4">
        <DownloadButton />
      </div>
    </div>
  </div>
</template>


<script setup>
import { reactive } from 'vue'
import InputForm from './components/InputForm.vue'
import Preview from './components/Preview.vue'
import DownloadButton from './components/DownloadButton.vue'

const form = reactive({
  name: '',
  trait: '',
  motivation: '',
  strength: '',
  weakness: '',
  goal: '',
  experience: '',
})
</script>
