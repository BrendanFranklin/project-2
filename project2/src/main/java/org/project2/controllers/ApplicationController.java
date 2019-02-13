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

    @PostMapping(path = "/openApp", produces = MediaType.APPLICATION_JSON_VALUE)
    public int openApp(@RequestParam(name = "first_name") String first_name,
                       @RequestParam(name = "last_name") String last_name,
                       @RequestParam(name = "email") String email,
                       @RequestParam(name = "phone") String phone){
        return this.applicationService.openApp(first_name, last_name, email, phone);
    }

    @PostMapping(path = "/deleteApp")
    public void deleteApp(@RequestParam(name = "id") int id){
        this.applicationService.deleteApp(id);
    }
}
