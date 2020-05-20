<template>
  <div>
    <h1>Hotel Costa Del Sol Bookings</h1>
    <booking-list> </booking-list>
  </div>
</template>

<script>
import BookingList from './components/BookingList.vue';

export default {
  name: 'app',
  components: {
    'booking-list': BookingList
  }
}
</script>

<style>

</style>