export interface Booking {
    checkIn: Date,
    checkOut: Date,
    rooms: number,
    children: number,
    adults: number,
    price: number,
    userId?: string,
    email: string,
    phone:number
}