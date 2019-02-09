package org.project2.controllers;

import org.project2.service.ResidentSerivice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("resident")
public class ResidentController {

    private ResidentSerivice residentSerivice;

    public ResidentController(){}

    @Autowired
    public setResidentService(ResidentSerivice residentSerivice){
        this.residentSerivice = residentSerivice;
    }
}
