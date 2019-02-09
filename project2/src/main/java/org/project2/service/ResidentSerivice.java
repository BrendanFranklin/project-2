package org.project2.service;

import org.project2.repository.ResidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ResidentSerivice {

    private ResidentRepository residentRepository;

    @Autowired
    public ResidentSerivice(ResidentRepository residentRepository){
        this.residentRepository = residentRepository;
    }
}
