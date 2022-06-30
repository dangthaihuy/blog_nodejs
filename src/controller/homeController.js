const getHomepage = (req, res) => {
    //logic
    res.render('index.ejs')
}

module.exports = { getHomepage }