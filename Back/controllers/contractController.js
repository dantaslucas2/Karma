const Contracts = require("../database/models/Contracts");


async function createContracts(req, res){

  var {
    date_begin,
    date_end, 
    points, 
    id_service, 
    id_request,
  } = req.body;

  var data = new Date();
  
  if (
    date_begin == undefined &&
    date_end == undefined &&
    points == undefined &&
    id_service == undefined &&
    id_request == undefined &&
    status == undefined &&
    type_contract == undefined &&
    id_owner == undefined
  ) {
    res.sendStatus(400);
  } else {
    Contracts.create({
        date_begin: date_begin,
        date_end: date_end,
        points: points,
        id_service: id_service,
        id_request: id_request,
        createdAt: data,
        updatedAt: data,
    })
      .then(() => {
        console.log("Contrato salvo");
        res.sendStatus(200);
      })
      .catch(() => {
        res.sendStatus(500);
      });
  }
}

async function listContracts(req, res){
  Contracts.findAll({ raw: true }).then((contracts) => {
    res.json(contracts);
  });
  res.statusCode = 200;
}

async function indexContract(req, res){

  var contractId = req.params.id;

  if (contractId == undefined) {
    res.sendStatus(400);
  
  }else {
    
    Contracts.findAll({
      where: {
        id_contract: contractId
      },
    }).then((resposta) => {
      if (resposta != undefined) {
        res.json(resposta);
        res.sendStatus(200);
      }else {
        res.sendStatus(404);
      }
    });
  }
}

async function updateContract(req, res) {

  var contractId = req.params.id;
  var dataUpdate = new Date();

  if (contractId == undefined) {
    res.sendStatus(400);
  
  }else{
    await Contracts.update(
      {
        description: req.body.description,
        status: req.body.status,
        updatedAt: dataUpdate,
      },
      {
        where: {
          id_contract: req.params.id,
        },
      }
    );
    Contracts.findByPk(req.params.id).then((result) => res.json(result),res.sendStatus(200));
  }
}

async function deleteContract(req, res) {
  var contractId = req.params.id;

  if (contractId == undefined) {
    res.sendStatus(400);
  
  }else{
    await Contracts.destroy({
      where: {
        id_contract: req.params.id,
      },
    });

    Contracts.findAll().then((result) => res.json(result), res.sendStatus(200));
  }
}

module.exports =  {createContracts, listContracts, indexContract, updateContract, deleteContract };
