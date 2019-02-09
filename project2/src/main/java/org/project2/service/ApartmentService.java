package org.project2.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ApartmentService {
    private ApartmentService apartmentService;

    @Autowired
    public ApartmentService(ApartmentService apartmentService){ this.apartmentService = apartmentService;}
}
