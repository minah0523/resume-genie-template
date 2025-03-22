<template>
  <div class="space-y-6">
    <!-- 이름 -->
    <details open class="group border rounded p-4 bg-white shadow-sm">
      <summary class="font-semibold cursor-pointer mb-2 group-open:mb-4">
        이름
      </summary>
      <input v-model="form.name" class="input" placeholder="홍길동" />
    </details>
    <!-- 성격 -->
    <details class="group border rounded p-4 bg-white shadow-sm">
      <summary class="font-semibold cursor-pointer mb-2 group-open:mb-4">
        성격
      </summary>
      <GPTField
        :value="form.trait"
        label="성격"
        @update="(val) => (form.trait = val)"
        prompt="자기소개서에서 성격을 긍정적이고 적극적인 방향으로 표현한 예시 문장을 한 문장만 써줘."
      />
    </details>

    <!-- 지원 동기 -->
    <details class="group border rounded p-4 bg-white shadow-sm">
      <summary class="font-semibold cursor-pointer mb-2 group-open:mb-4">
        지원 동기
      </summary>
      <GPTField
        :value="form.motivation"
        label="지원 동기"
        @update="(val) => (form.motivation = val)"
        prompt="지원자가 회사에 열정을 가지고 지원하게 된 동기를 자기소개서 형식으로 한 문장 써줘."
      />
    </details>

    <!-- 장점 -->
    <details class="group border rounded p-4 bg-white shadow-sm">
      <summary class="font-semibold cursor-pointer mb-2 group-open:mb-4">
        장점
      </summary>
      <GPTField
        :value="form.strength"
        label="장점"
        @update="(val) => (form.strength = val)"
        prompt="자기소개서에서 실무적인 강점을 어필하는 문장을 한 문장만 써줘."
      />
    </details>

    <!-- 단점 -->
    <details class="group border rounded p-4 bg-white shadow-sm">
      <summary class="font-semibold cursor-pointer mb-2 group-open:mb-4">
        단점
      </summary>
      <GPTField
        :value="form.weakness"
        label="단점"
        @update="(val) => (form.weakness = val)"
        prompt="자신의 단점을 솔직하게 인정하면서도 개선 의지를 드러내는 자기소개 문장을 한 문장만 써줘."
      />
    </details>

    <!-- 입사 후 포부 -->
    <details class="group border rounded p-4 bg-white shadow-sm">
      <summary class="font-semibold cursor-pointer mb-2 group-open:mb-4">
        입사 후 포부
      </summary>
      <GPTField
        :value="form.goal"
        label="입사 후 포부"
        @update="(val) => (form.goal = val)"
        prompt="입사 후 회사에 어떻게 기여할 수 있을지에 대해 자기소개서 문장으로 한 문장만 써줘."
      />
    </details>

    <!-- 경험 -->
    <details class="group border rounded p-4 bg-white shadow-sm">
      <summary class="font-semibold cursor-pointer mb-2 group-open:mb-4">
        경험 / 프로젝트
      </summary>
      <GPTField
        :value="form.experience"
        label="경험"
        @update="(val) => (form.experience = val)"
        prompt="업무나 프로젝트 경험을 통해 성장한 내용을 자기소개서 형식으로 한 문장만 써줘."
      />
    </details>
  </div>
</template>

<script setup>
import GPTField from "./GPTField.vue";
import { prompts } from "../utils/prompts";
defineProps(["form"]);
</script>

<GPTField
  :value="form.goal"
  label="입사 후 포부"
  :prompt="prompts.goal"
  @update="(val) => (form.goal = val)"
/>
