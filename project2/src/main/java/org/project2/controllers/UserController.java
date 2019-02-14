package org.project2.controllers;

import org.project2.repository.ApplicationUserRepository;
import org.project2.pojos.Users;
import org.project2.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    private ApplicationUserRepository applicationUserRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    private UserService userService;

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


    @PreAuthorize("hasAuthority('resident')")
    @GetMapping("/getresident")
    public int getResident(){
        return 0;
    }

    @PreAuthorize("hasAuthority('manager')")
    @GetMapping("/getmanager")
    public int getManager(){
        return 0;
    }

    @PreAuthorize("hasAuthority('maintenance')")
    @GetMapping("/getmaintenance")
    public int getMaintenance(){
        return 0;
    }
}
