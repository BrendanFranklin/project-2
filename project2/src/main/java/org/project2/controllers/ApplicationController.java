package org.project2.controllers;

import org.project2.pojos.Application;
import org.project2.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("application")
public class ApplicationController {
    private ApplicationService applicationService;

    public ApplicationController(){}

    @Autowired
    public void setApplicationService(ApplicationService applicationService){
        this.applicationService = applicationService;
    }

    @GetMapping(path = "/viewAll", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Application> viewAll(){
        return this.applicationService.viewAll();
    }
}
