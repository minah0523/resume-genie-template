<template>
  <button @click="downloadPDF" class="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
    PDF 저장하기
  </button>
</template>

<script setup>
import html2pdf from 'html2pdf.js'

const downloadPDF = () => {
  const element = document.getElementById('preview-area')
  if (!element) return

  html2pdf()
    .set({
      margin: 0.5,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    })
    .from(element)
    .save()
}
</script>
