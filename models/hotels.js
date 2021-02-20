const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    booking: [{
        checkIn: {
            type: Date,
            required: true
        },
        checkOut: {
            type: Date,
            required: true
        },
        room: Number,
        children: Number,
        adults: Number,
        price: Number,
        userId: Schema.Types.ObjectId
    }],
    location: {
        latitude: {
            type: Schema.Types.Decimal128
        },
        longtitude: {
            type: Schema.Types.Decimal128
        },
    },
    pricedeals: [{
        name: String,
        link: String,
        pricepernight: Number
    }],
    rooms: Number,
    images: [String],
    deals: [Schema.Types.ObjectId],
    amenities: [Schema.Types.ObjectId],
    class: Schema.Types.ObjectId,
    address: {
        streetname: String,
        beach: Number,
        park: Number,
        citycenter: Number,
    },
    langaugespoken: [Schema.Types.ObjectId],
    style: [String],
    reviews: [{
        text: String,
        rating: Number,
        userID: Schema.Types.ObjectId
    }],
    descripation: {
        text: String,
        lang: String,
    },
    likes: Number,
});

const Hotels = mongoose.model('hotels', HotelSchema, 'hotels1');

module.exports = Hotels;