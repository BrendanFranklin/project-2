package org.project2.service;

import org.project2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ResidentService {
    private UserRepository residentRepository;

    @Autowired
    public ResidentService(UserRepository residentRepository){
        this.residentRepository = residentRepository;
    }
}
