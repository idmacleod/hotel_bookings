use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Cloud Strife",
        email: "cloud@ffvii.com",
        checked_in: true
    },
    {
        name: "Tifa Lockheart",
        email: "tifa@ffvii.com",
        checked_in: false
    }
]);