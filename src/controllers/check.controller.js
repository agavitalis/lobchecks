
const Lob = require('lob')('test_e714c6edeb9abbf049924858d337c93b567');
import Check from "../models/check"
/*
 * GET / route to show the createCheck form.
 */
function createCheck(req, res) {
    //catch any response on the url
    let response = req.query.response
    res.render('index', { response })
}


/*
 * POST / route to process the checks.
 */
function createCheckPost(req, res) {

    const myStory = req.body.story
    // Create the address
    Lob.addresses.create({
        name: 'Robin Joseph',
        email: 'test@gmail.com',
        phone: '123456789',
        address_line1: '123 Test Street',
        address_line2: 'Unit 199',
        address_city: 'Chicago',
        address_state: 'IL',
        address_zip: '60012',
        address_country: 'US'
    })
        .then((address) => {
            return Lob.checks.create({
                description: 'My First Check',
                to: address.id,
                from: {
                    name: 'Test Person',
                    address_line1: '123 Test Street',
                    address_line2: 'Unit 200',
                    address_city: 'Chicago',
                    address_state: 'IL',
                    address_zip: '60012',
                    address_country: 'US'
                },
                file: '<html style="padding-top: 3in; margin: .5in;">{{story}}</html>',
                merge_variables: {
                    story: myStory
                },
                color: true
            });
        })
        .then((check) => {
            const { id, ...otherProperties } = check;
            Check.create({ checkId: id, ...otherProperties })
            res.redirect('/?response=Your check was successfully sent')
        })
        .catch((err) => {
            console.log(err);
        });

}


/*
 * GET / route to get created checks.
 */
function getChecks(req, res) {

    Lob.checks.list({ limit: 50 }, function (err, response) {
        const checks = response.data
        res.render('checks', { checks })
    });

}

/*
 * GET / route to get a check.
 */
function getACheck(req, res) {
    const checkId = req.params.checkId
    Lob.checks.retrieve(checkId, function (err, response) {
        const check = response
        res.render('check', { check })
    });

}

//export all the functions
module.exports = { createCheck, createCheckPost, getChecks, getACheck };