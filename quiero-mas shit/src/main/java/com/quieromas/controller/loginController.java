package com.quieromas.controller;

import com.quieromas.entity.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class loginController {

    @RequestMapping("/")
    @ResponseBody
    public User loginResponse() {
        User user = new User("Pota", "Miaw");

        return user;
    }
}
