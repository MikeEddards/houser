module.exports = {
    allHomes: (req, res) =>{
    const db = req.app.get('db')
    db.get_all()
    .then(houses => res.status(200).send(houses))
    .catch(err => {res.status(500).send({errorMessage: 'Its broke'})
    console.log(err)})
    },
    delete: (req, res, next) => {
       console.log('bam')
        const db = req.app.get('db')
        const { id } = req.params
        db.delete( id )
        .then( (houses) => res.status(200).send(houses))
        .catch( err => {
        res.status(500).send({errorMessage: 'Its broke'})
        console.log(err)
        })
    }
}