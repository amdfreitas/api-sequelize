module.exports  = (app) => {


    let forcendores = {

          home: ( req, res) =>{
            const forn = app.controller.contforneced;
            forn.createTable();
            res.send('dsfgdsfgdfgdfg');

          },
          listfornecedor: async (req, res) =>{

               const forn = app.controller.contforneced;
               await forn.listarFornecedords()
                    .then(data => res.status(200).json(data))
                    .catch(err => res.status(500).json(err));

          },
          criaforneced: async (req, res) =>{
                const forn = app.controller.contforneced;
                await forn.criarforneced(req.body)
                    .then(data => res.status(200).json(data))
                    .catch(err => res.status(500).json(err));
          }
    }

     return forcendores;
};

