const Services = require("../database/models/Services");


async function createServices(req, res){

  var {
    title,
    tag,
    points,
    category,
    description,
    status,
    type_service,
    id_owner,
  } = req.body;

  var data = new Date();
  
  if (
    title == undefined &&
    tag == undefined &&
    points == undefined &&
    category == undefined &&
    description == undefined &&
    status == undefined &&
    type_service == undefined &&
    id_owner == undefined
  ) {
    res.sendStatus(400);
  } else {

    new_service = {
      title: title,
      tag: tag,
      points: points,
      category: category,
      description: description,
      status: status,
      type_service: type_service,
      id_owner: id_owner,
      createdAt: data,
      updatedAt: data,
    }

    Services.create(new_service)
      .then(() => {
        console.log(new_service)
        res.status(200).send({message:"Card criado com sucesso", card:new_service});
      })
      .catch(() => {
        res.sendStatus(500);
      });
  }
}

async function listServices(req, res){
  Services.findAll({ raw: true }).then((services) => {
    res.json(services);
  });
  res.statusCode = 200;
}

async function listServicesGroupBy(req, res){
  Services.findAll({ raw: true, 
    group: ['category']
    }).then((services) => {
    res.status(200).send(services);
  });
}

async function indexService(req, res){

  var serviceId = req.params.id;

  if (serviceId == undefined) {
    res.sendStatus(400);
  
  }else {
    
    Services.findAll({
      where: {
        id_service: serviceId
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

async function tagsService(req, res){

  var tagId = req.params.id;

  if (tagId == undefined) {
    res.sendStatus(400);
  
  }else {
    
    Services.findAll({
      where: {
        tag: tagId
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

async function updateService(req, res) {

  var serviceId = req.params.id;
  var dataUpdate = new Date();

  if (serviceId == undefined) {
    res.sendStatus(400);
  
  }else{
    await Services.update(
      {
        description: req.body.description,
        status: req.body.status,
        updatedAt: dataUpdate,
      },
      {
        where: {
          id_service: req.params.id,
        },
      }
    );
    Services.findByPk(req.params.id).then((result) => res.json(result),res.sendStatus(200));
  }
}

async function deleteService(req, res) {
  var serviceId = req.params.id;

  if (serviceId == undefined) {
    res.sendStatus(400);
  
  }else{
    await Services.destroy({
      where: {
        id_service: req.params.id,
      },
    });

    Services.findAll().then((result) => res.json(result), res.sendStatus(200));
  }
}

module.exports =  {createServices, listServices, listServicesGroupBy, indexService, tagsService, updateService, deleteService };
