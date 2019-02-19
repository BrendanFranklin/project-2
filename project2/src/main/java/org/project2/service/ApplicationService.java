package org.project2.service;

import org.project2.pojos.Application;
import org.project2.repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ApplicationService {

    private ApplicationRepository applicationRepository;


    @Autowired
    public ApplicationService(ApplicationRepository applicationRepository){
        this.applicationRepository = applicationRepository;
    }

    @Transactional
    public List<Application> viewAll(){
        return this.applicationRepository.findAll();
    }

    @Transactional
    public int openApp(String first_name, String last_name, String email, String phone){
        return this.applicationRepository.openApp(first_name, last_name, email, phone);
    }

    @Transactional
    public void deleteApp(int id){
        this.applicationRepository.deleteApp(id);
    }
}
