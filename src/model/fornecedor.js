module.exports  = (app) => {


    let forcendores = {

          home: ( req, res) =>{
            const forn = app.controller.contforneced;
            forn.createTable();
            res.send('dsfgdsfgdfgdfg');

          },
          listfornecedor: async (req, res) =>{

               const forn = app.controller.contforneced;
               const serializ = app.util.serializador;
               await forn.listarFornecedords()
                    .then( (data) => {
                      res.status(200);
                      res.send(serializ.serializar(data,res.getHeader('Content-Type')));
                    })
                    .catch(err => res.status(404).json(err));

          },
          criaforneced: async (req, res) =>{
                const forn = app.controller.contforneced;
                await forn.criarforneced(req.body)
                    .then(data => res.status(201).json(data))
                    .catch(err => res.status(400).json(err));
          }, 
          seacherforneced: async (req, res) => {
            const forn = app.controller.contforneced;
            const id = req.params.id;
            await forn.seacherforneced(id)
                    .then(data => res.status(200).json(data))
                    .catch(err => res.status(404).json(err));
          }, 
          updateforneced: async (req, res) =>{
            const forn = app.controller.contforneced;
            await forn.updateforneced(req.body)
                .then(data => res.status(204).json(data))
                .catch(err => res.status(404).json(err));

          },
          deleteforneced: async (req, res) =>{
            const forn = app.controller.contforneced;
            await forn.deleteforneced(req.params.id)
                .then(data => res.status(204).json(data))
                .catch(err => res.status(404).json(err));

          }
    }

     return forcendores;
};

