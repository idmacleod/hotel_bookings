<template>
    <div>
        <ul>
            <li v-for="(booking, index) in bookings" :key="index"> 
                Name: {{ booking.name }}
                <ul>
                    <li>Email: {{ booking.email }} </li>
                    <li v-if="booking.checked_in">
                        <span>Checked In</span>
                        <button v-on:click="toggleCheckedIn(booking)">Check Out</button>
                    </li>
                    <li v-else>
                        <span>Not Checked In</span>
                        <button v-on:click="toggleCheckedIn(booking)">Check In</button>
                    </li>
                    <li><button v-on:click="handleDelete(booking._id)">Delete Booking</button></li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import BookingService from '../services/BookingService.js';
import { eventBus } from '../main.js';

export default {
    name: 'booking-list',
    data: function(){
        return {
            bookings: []
        }
    },
    mounted: function(){
       BookingService.getBookings()
       .then(bookings => this.bookings = bookings);

       eventBus.$on('booking-added', booking => this.bookings.push(booking))
    },
    methods: {
        handleDelete: function (id) {
            BookingService.deleteBooking(id)
            .then(res => {
                const index = this.bookings.findIndex(booking => booking._id === id);
                this.bookings.splice(index, 1);
            });
        },
        toggleCheckedIn: function (booking) {
            const id = booking._id;
            const updatedBooking = {
                name: booking.name,
                email: booking.email,
                checked_in: !booking.checked_in
            };
            BookingService.updateBooking(id, updatedBooking)
            .then(res => {
                const index = this.bookings.indexOf(booking);
                this.bookings.splice(index, 1, res);
            });
        }
    }
}
</script>

<style>

</style>