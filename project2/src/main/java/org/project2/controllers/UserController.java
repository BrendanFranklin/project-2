package org.project2.controllers;

import org.project2.repository.ApplicationUserRepository;
import org.project2.pojos.Users;
import org.project2.repository.UserRepository;
import org.project2.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private ApplicationUserRepository applicationUserRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    private UserRepository userRepository;
    private UserService userService;

    @Autowired
    public UserController(ApplicationUserRepository applicationUserRepository,
                          BCryptPasswordEncoder bCryptPasswordEncoder,
                          UserRepository userRepository,
                          UserService userService) {
        this.applicationUserRepository = applicationUserRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @PostMapping(path = "/sign-up", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void signUp(@RequestBody Users user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        this.userService.addNewUser(user);
        if(user.getApt_num() != null){
            this.userService.updateApt(user.getApt_num());
        }
    }

    public Users getCurrentUser(@AuthenticationPrincipal Users users) {
        return users;
    }

    @PostMapping(path = "/roleid", consumes = MediaType.APPLICATION_JSON_VALUE)
    public int getRoleId(@RequestBody Users user){
        return this.userRepository.viewRole(user.getUsername());
    }

    @PostMapping(path = "/userid", consumes = MediaType.APPLICATION_JSON_VALUE)
    public int getUserId(@RequestBody Users user){
        return this.userRepository.viewUserId(user.getUsername());
    }

    @PreAuthorize("hasAuthority('view_users')")
    @GetMapping("/findall")
    public List<Users> findAll(){
        return this.userService.findAll();
    }
}
