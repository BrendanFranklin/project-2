package org.project2.service;

import org.project2.pojos.User;
import org.project2.pojos.UserJPARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService {

    private UserJPARepository userRepository;


    @Autowired
    public UserService(UserJPARepository userRepository){
        this.userRepository = userRepository;
    }

    @Transactional
    public List<User> getAll(){
        return this.userRepository.findAll();
    }


    @Transactional(readOnly = true)
    public User viewRent(){
        return this.userRepository.viewRent();
    }




}
