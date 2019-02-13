package org.project2.service;

import org.project2.pojos.Users;
import org.project2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService {
    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Transactional(readOnly = true)
    public List<Users> findAll(){ return this.userRepository.findAll();}

    @Transactional
    public int viewRole(String username){ return this.userRepository.viewRole(username);}
}
