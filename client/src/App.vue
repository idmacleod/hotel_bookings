<template>
  <div>
    <h1>Hotel Costa Del Sol Bookings</h1>
    <booking-form> </booking-form>
    <booking-list> </booking-list>
  </div>
</template>

<script>
import BookingList from './components/BookingList.vue';
import BookingForm from './components/BookingForm.vue';

export default {
  name: 'app',
  components: {
    'booking-list': BookingList,
    'booking-form': BookingForm
  }
}
</script>

<style>

</style>