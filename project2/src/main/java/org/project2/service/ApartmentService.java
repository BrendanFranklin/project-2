package org.project2.service;

import org.project2.pojos.Apartment;
import org.project2.repository.ApartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ApartmentService {
    private ApartmentRepository apartmentRepository;

    @Autowired
    public ApartmentService(ApartmentRepository apartmentRepository){ this.apartmentRepository = apartmentRepository;}

    @Transactional(readOnly = true)
    public List<Apartment> allApt(){
        return this.apartmentRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<Apartment> emptyApt(boolean occupied){
        return this.apartmentRepository.findEmpty(occupied);
    }

    @Transactional
    public List<Apartment> getAptByUserId(int user_id){
        return this.apartmentRepository.getAptByUserId(user_id);
    }
}
