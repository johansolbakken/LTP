package no.johansolbakken.ltpbackend.controller;

import no.johansolbakken.ltpbackend.entity.User;
import no.johansolbakken.ltpbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/users")
    public String saveUser(@RequestBody User user) throws ExecutionException, InterruptedException {
        return userService.saveUser(user);
    }

    @GetMapping("/users/{username}")
    public User getUser(@PathVariable String username) throws ExecutionException, InterruptedException {
        return userService.getUser(username);
    }

    @PutMapping("/users")
    public String updateUser(@RequestBody User user) throws ExecutionException, InterruptedException {
        return userService.updateUser(user);
    }

    @DeleteMapping("/users/{username}")
    public String deleteUser(@PathVariable String username) {
        return userService.deleteUser(username);
    }



}
