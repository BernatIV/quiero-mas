package com.quieromasserver.quieromasserver.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.quieromasserver.quieromasserver.entity.LoginResponse;
import com.quieromasserver.quieromasserver.entity.User;
import com.quieromasserver.quieromasserver.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller

public class UserController {

    @Autowired
    UserRepository userRepository;

    @RequestMapping("/")
    @ResponseBody
    public User loginResponse() {
        User user = new User("Pota", "Miaw");

        return user;
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST, headers = {"Accept=application/json"}, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public LoginResponse getLogin(@RequestBody ObjectNode json) {

        String username = json.get("username").asText();
        String password = json.get("password").asText();

        LoginResponse loginResponse = new LoginResponse(true, username);

        return loginResponse;
    }
}
