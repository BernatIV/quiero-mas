package com.quieromasserver.quieromasserver.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.quieromasserver.quieromasserver.business.LoginService;
import com.quieromasserver.quieromasserver.business.UserService;
import com.quieromasserver.quieromasserver.entity.User;
import com.quieromasserver.quieromasserver.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private LoginService loginService;

    /**
     * Retrieves the user if password and name are write.
     * @param user
     * @return
     */
    @RequestMapping(value = "/getLogin/", method = RequestMethod.POST, headers = {"Accept=application/json"}, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public User getLogin(@RequestBody User user) {

        return getLoginService().getLogin(user);
    }

    /**
     *
     * @param user object that we are creating
     * @return
     */
    @RequestMapping(value = "/createUser/", method = RequestMethod.POST, headers = {"Accept=application/json"}, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public User createUser(@RequestBody User user) {

        return getLoginService().createUser(user);
    }

    @RequestMapping(value = "/discountUserBalance/", method = RequestMethod.POST, headers = {"Accept=application/json"}, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public User discountUserBalance(@RequestBody ObjectNode json) {

        return getLoginService().discountUserBalance(json.get("userId").asInt());
    }


    /************************************************
     *               GETTERS AND SETTERS            *
     ************************************************/

    public UserRepository getUserRepository() {
        return userRepository;
    }

    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserService getUserService() {
        return userService;
    }

    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    public LoginService getLoginService() {
        return loginService;
    }

    public void setLoginService(LoginService loginService) {
        this.loginService = loginService;
    }
}
