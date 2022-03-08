const express = require('express');
const router = express.Router();

var data = {  
"lunch" : { "name": "Lunch",
            "time": "1PM - 4PM",
            "link": "/lunch",
        "imageurl": "/images/Lunch.png",
        "items": ["Seafood Chowder      8", "French Onion Soup      8", "Sauteed Atlantic Prawns      13"
        , "Salted Chili Squid      10", "Eggs Benedict      11"]},

"dinner" :  { "name": "Dinner",
        "link": "/dinner",
        "imageurl": "/images/Dinner.png",
        "items": ["Fish & Chips      17", "Beef Bourguignon      18", "Slow Roasted Pork Belly      20",
        "Rack Of Lamb      32", "Fillet Of Seabass      22", "12 Oz Ribeye Steak      32", "Roast Chicken Supreme      22" ]},

"desert" : { "name": "Desert",
        "time": "6PM - Close",
        "link": "/desert",
        "imageurl": "/images/Desert.png",
        "items": ["Creme Brulee      8", "Baked Lemon Cheesecake      6", "Chocolate Mousse      7",
        "Banoffie Pie      6", "Warm Apple Crumble      7"]} 
}


router.get('/lunch', (req,res) =>
res.render('meal', {meal: data.lunch} ))

router.get('/dinner', (req,res) =>
res.render('meal', {meal: data.dinner} ))

router.get('/desert', (req,res) =>
res.render('meal', {meal: data.desert} ))
    
router.get('/', (req,res) =>
res.render('menu', { menu: data } ))

module.exports = router;