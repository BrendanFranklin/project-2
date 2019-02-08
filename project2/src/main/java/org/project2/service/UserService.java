package org.project2.service;

import org.project2.pojos.Users;
import org.project2.Repository.UsersJPARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService {

    private UsersJPARepository usersRepository;


    @Autowired
    public UserService(UsersJPARepository userRepository){
        this.usersRepository = userRepository;
    }

    @Transactional
    public List<Users> getAll(){
        return this.usersRepository.findAll();
    }







}
