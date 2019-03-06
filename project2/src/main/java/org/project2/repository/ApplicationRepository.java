package org.project2.repository;

import org.project2.pojos.Application;

import java.util.List;

public interface ApplicationRepository {

    //find all applications
    List<Application> findAll();

    //open a application
    int openApp(String first_name, String last_name, String email, String phone);

    //submit a application
    void deleteApp(int id);
}
