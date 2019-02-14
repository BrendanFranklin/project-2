package org.project2.controllers;

import org.project2.pojos.Application;
import org.project2.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
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

    @PostMapping(path = "/openApp", consumes = MediaType.APPLICATION_JSON_VALUE)
    public int openApp(@RequestBody Application app){
        return this.applicationService.openApp(
                app.getFirst_name(),
                app.getLast_name(),
                app.getEmail(),
                app.getPhone());
    }

    @PostMapping(path = "/deleteApp", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void deleteApp(@RequestBody Application app){
        this.applicationService.deleteApp(app.getId());
    }
}
