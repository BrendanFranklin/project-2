package org.project2.controllers;

import org.project2.service.ApartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("apt")
public class ApartmentController {
    private ApartmentService apartmentService;

    ApartmentController(){}

    @Autowired
    public void setApartmentService(ApartmentService apartmentService){ this.apartmentService = apartmentService;}
}
