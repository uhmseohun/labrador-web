<script>
import TimelineItem from '@/components/TimelineItem.vue'

export default {
  name: 'Timeline',
  components: { TimelineItem }
}
</script>

<template>
<div class="timeline">
  <h1>타임라인</h1>
  <timeline-item
    class="timeline__item"
    :event="{
      title: '한국디지털미디어고등학교',
      detail: '안산시 단원구 사세충열로',
      time: new Date()
    }"
  />
  <timeline-item
    class="timeline__item"
    :event="{
      title: '서훈이의 에어팟',
      detail: '고장났음',
      time: new Date(),
      money: -13000
    }"
  />
</div>
</template>

<style lang="scss" scoped>
.timeline {
  &__item {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}
</style>
