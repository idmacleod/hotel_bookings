<template>
    <div>
        <ul>
            <li v-for="(booking, index) in bookings" :key="index"> 
                Name: {{ booking.name }} 
                <ul>
                    <li>Email: {{ booking.email}} </li>
                    <li>Check-in status: {{ booking.checked_in }}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import BookingService from '../services/BookingService.js'

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
    }
}
</script>

<style>

</style>