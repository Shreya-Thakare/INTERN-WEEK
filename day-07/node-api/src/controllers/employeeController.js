const service=require('../services/employeeService');
exports.list=(req,res)=>res.json(service.list());
exports.get=(req,res)=>{const e=service.get(req.params.id);return e?res.json(e):res.status(404).json({message:'Employee not found'});};
exports.create=(req,res)=>res.status(201).json(service.add(req.body));
exports.update=(req,res)=>{const e=service.edit(req.params.id,req.body);return e?res.json(e):res.status(404).json({message:'Employee not found'});};
exports.remove=(req,res)=>service.del(req.params.id)?res.sendStatus(204):res.status(404).json({message:'Employee not found'});
