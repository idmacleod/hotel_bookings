<template>
  <div>
      <form v-on:submit.prevent="addBooking">
        <label for="name">Guest Name:</label>
        <input type="text" name="name" id="name" v-model="name" required>
        <label for="email">Email Address:</label>
        <input type="email" name="email" id="email" v-model="email" required>
        <input type="checkbox" name="checked_in" id="checked_in" v-model="checked_in">
        <label for="checked_in">Checked In</label>
        <input type="submit" value="Add Booking">
      </form>
  </div>
</template>

<script>
import BookingService from '../services/BookingService.js';
import { eventBus } from '../main.js';

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
                checked_in: this.checked_in
            }
            BookingService.addBooking(newBooking)
                .then(booking => eventBus.$emit('booking-added', booking));
        }
    }
}
</script>

<style>

</style>