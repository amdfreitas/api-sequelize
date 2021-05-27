module.exports = (app) => {

     let produto = {

        home: (req, res) => {

            const prod = app.controller.contprodut;
            prod.createTable();
            res.send('dsfgdsfgdfgdfg');
        }, 
        listaprodut: async (req, res) =>{
            const prod = app.controller.contprodut;
            await prod.listaprodut()
                .then(data => res.status(200).json(data))
                .catch(err => res.status(400).json(err));
        },
        listafornid: async (req, res) => {
            const prod = app.controller.contprodut;
            const idforn = req.params.id;
            await prod.listafornid(idforn)
                .then(data => res.status(200).json(data))
                .catch(err => res.status(400).json(err));
        },
        criaprodut: async (req, res) =>{

            const prod = app.controller.contprodut;
            await prod.criaprodut(req.body)
                    .then(data => res.status(201).json(data))
                    .catch(err => res.status(400).json(err));

        },
        deleteprodut: async (req, res) =>{

            const prod = app.controller.contprodut;
            const idforn = req.params.id;
            await prod.deleteprodut(idforn)
                .then(data => res.status(200).json(data))
                .catch(err => res.status(400).json(err));

        }
     }

     return produto;
}