package org.project2.controllers;

import org.project2.service.ResidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("resident")
public class ResidentController {

    private ResidentService residentService;

    public ResidentController(){}

    @Autowired
    public void setResidentService(ResidentService residentService){
        this.residentService = residentService;
    }
}
