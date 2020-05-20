<template>
  <div>
      <form v-on:submit.prevent="addBooking">
        <label for="name">Guest Name:</label>
        <input type="text" name="name" id="name" v-model="name">
        <label for="email">Email Address:</label>
        <input type="email" name="email" id="email" v-model="email">
        <input type="checkbox" name="checked_in" id="checked_in" v-model="checked_in">
        <label for="checked_in">Checked In</label>
        <input type="submit" value="Add Booking">
      </form>
  </div>
</template>

<script>
import BookingService from '../services/BookingService.js';

export default {
    name: 'booking-form',
    data: function () {
        return {
            name: "",
            email: "",
            checked_in: false
        }
    },
    methods: {
        addBooking: function () {
            const newBooking = {
                name: this.name,
                email: this.email,
                check_in: this.checked_in
            }

        }
    }
}
</script>

<style>

</style>