class MyDate {
    day;
    month;
    year;
    constructor (day, month, year) {
        this.day = day;
        this.month = month;
        this.year= year;
    }

    get_Date () {
        return this.day;
    }

    get_Month () {
        return this.month;
    }

    get_Year () {
        return this.year;
    }
}

// let MyDate = function(day, month, year) {

//     this.day = day;

//     this.month = month;

//     this.year = year;
    
//     this.getDay = function() {
//        return this.day;
//             }
//     this.getMonth = function() {
//         return this.month;
//     }
//     this.getYear = function() {
//         return this.year;
//     }
//     this.setDay = function(day) {
//         this.day  = day;
//             }
//     this.setMonth = function(month) {
//         this.month  = month;
//     }
//     this.setYear = function(year) {
//         this.year  = year;
//     }

// };
