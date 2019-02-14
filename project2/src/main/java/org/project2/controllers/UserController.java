package org.project2.controllers;

import org.project2.repository.ApplicationUserRepository;
import org.project2.pojos.Users;
import org.project2.repository.UserRepository;
import org.project2.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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
    }

    @PostMapping("/sign-up")
    public void signUp(@RequestBody Users user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        applicationUserRepository.save(user);
    }

    public Users getCurrentUser(@AuthenticationPrincipal Users users) {
        return users;
    }

    @GetMapping("/roleid")
    public int getRoleId(@RequestParam(name = "username") String username){
        return this.userRepository.viewRole(username);
    }

    @GetMapping("/userid")
    public int getUserId(@RequestParam(name = "username") String username){
        return this.userRepository.viewUserId(username);
    }

    @GetMapping("/findall")
    public List<Users> findAll(){
        return this.userService.findAll();
    }
}
