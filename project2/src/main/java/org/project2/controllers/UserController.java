package org.project2.controllers;

import org.project2.repository.ApplicationUserRepository;
import org.project2.pojos.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private ApplicationUserRepository applicationUserRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserController(ApplicationUserRepository applicationUserRepository,
                          BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.applicationUserRepository = applicationUserRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @PostMapping("/sign-up")
    public void signUp(@RequestBody Users user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        applicationUserRepository.save(user);
    }

    public Users getCurrentUser(@AuthenticationPrincipal Users users){
        return users;
    }

    @PreAuthorize("resident")
    @GetMapping("/getresident")
    public void getResident(){}

    @PreAuthorize("manager")
    @GetMapping("/getmanager")
    public void getManager(){}

    @PreAuthorize("maintenance")
    @GetMapping("/getmaintenance")
    public void getMaintenance(){}
}
