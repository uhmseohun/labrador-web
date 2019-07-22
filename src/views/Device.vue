<script>
import DeviceItem from '@/components/DeviceItem.vue'

export default {
  name: 'Device',
  data () {
    return {
      devices: []
    }
  },
  components: { DeviceItem },
  created () {
    this.$api.defaults.headers.common['authorization'] = localStorage.accessToken
    this.$api.get('/device')
      .then(r => { this.devices = r.data })
      .catch(e => this.$swal('에러!', e.response.data.message, 'error'))
  }
}
</script>

<template>
<div class="device">
  <h1>디바이스</h1>
  <device-item
    :key="`device-${i}`"
    v-for="(device, i) in devices"
    class="device__item"
    :device="device"
  />
</div>
</template>

<style lang="scss" scoped>
.device {
  &__item {
    &:not(:first-child) {
      margin-top: 10px;
    }
  }
}
</style>
