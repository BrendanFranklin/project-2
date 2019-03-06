package org.project2.controllers;

import org.project2.pojos.Apartment;
import org.project2.pojos.Users;
import org.project2.service.ApartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("apt")
public class ApartmentController {
    private ApartmentService apartmentService;

    public ApartmentController(){}

    @Autowired
    public void setApartmentService(ApartmentService apartmentService){ this.apartmentService = apartmentService;}

    @GetMapping(path = "/allApt", produces = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize("hasAuthority('view_apt')")
    public List<Apartment> allApt(){
        return this.apartmentService.allApt();
    }

    @GetMapping(path = "/emptyApt", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Apartment> emptyApt(){
        return this.apartmentService.emptyApt(false);
    }

    @PostMapping(path = "/aptByUserId", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Apartment> getAptByUserId(@RequestBody Users users){
        return this.apartmentService.getAptByUserId(users.getUser_id());
    }
}
