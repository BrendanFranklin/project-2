package org.project2.controllers;

import org.project2.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("application")
public class ApplicationController {
    private ApplicationService applicationService;

    public ApplicationController(){}

    @Autowired
    public void setApplicationService(ApplicationService applicationService){
        this.applicationService = applicationService;
    }
}
