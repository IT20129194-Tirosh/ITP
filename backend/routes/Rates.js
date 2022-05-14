const router = require('express').Router();
let Rates = require('../models/Rates.model');

router.route('/').get((req, res) => {
    Rates.find()
        .then(Rates => res.json(Rates))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const Name = req.body.Name;
    const Rate = req.body.Rate;
    const Review = req.body.Review;
    


    const newRates = new Rates({
        Name,
        Rate,
        Review,
        
    });



    newRates.save()
        .then(() => res.json('Rate added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Rates.findById(req.params.id)
        .then(Rates => res.json(Rates))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Rates.findByIdAndDelete(req.params.id)
        .then(() => res.json('Rate deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Rates.findById(req.params.id)
        .then(Rates => {
            Rates.Name = req.body.Name;
            Rates.Rate = req.body.Rate;
            Rates.Review = req.body.Review;
            
           


            Rates.save()
                .then(() => res.json('Rate updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;