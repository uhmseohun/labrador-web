<script>
import NotificationItem from '@/components/NotificationItem.vue'

export default {
  name: 'Notification',
  components: { NotificationItem },
  data () {
    return {
      noties: []
    }
  },
  created () {
    this.$api.get('/notification')
      .then(r => { this.noties = r.data })
      .catch(e => this.$swal('에러!', e.response.data.message, 'error'))
  },
  methods: {
    deleteNoti (id) {
      this.$api.delete(`/notification/${id}`)
        .then(r => this.$swal('성공!', r.data.message, 'success'))
        .catch(e => this.$swal('에러!', e.response.data.message, 'error'))
    }
  }
}
</script>

<template>
<div class="noti">
  <h1 class="noti__title">알림</h1>
  <notification-item
    :key="`noti-${i}`"
    v-for="(noti, i) in noties"
    class="noti__item"
    :notification="noti"
  />
</div>
</template>

<style lang="scss" scoped>
</style>
