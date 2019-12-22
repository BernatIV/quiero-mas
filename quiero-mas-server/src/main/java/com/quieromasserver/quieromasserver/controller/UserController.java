package com.quieromasserver.quieromasserver.controller;

import com.fasterxml.jackson.databind.node.ObjectNode;
import com.quieromasserver.quieromasserver.business.LoginService;
import com.quieromasserver.quieromasserver.business.UserService;
import com.quieromasserver.quieromasserver.model.BalanceTransactions;
import com.quieromasserver.quieromasserver.model.User;
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
     * Retrieves the user if password and username are wright.
     * @param user
     * @return
     */
    @RequestMapping(value = "/getLogin/", method = RequestMethod.POST, headers = {"Accept=application/json"}, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public User getLogin(@RequestBody User user) {

        return getLoginService().getLogin(user);
    }

    /**
     * Creates a user when user signs up
     * @param user object that we are creating
     * @return
     */
    @RequestMapping(value = "/createUser/", method = RequestMethod.POST, headers = {"Accept=application/json"}, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public User createUser(@RequestBody User user) {

        return getLoginService().createUser(user);
    }

    /**
     * When waiter scans QR code of a user, he calls this method to retieve its information
     * @param json
     * @return
     */
    @RequestMapping(value = "/getUserScanned/", method = RequestMethod.POST, headers = {"Accept=application/json"}, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public User getUserScanned(@RequestBody ObjectNode json) {

        return getLoginService().getUserScanned(json.get("userQrCode").asText());
    }


    /**
     * Waiter calls this method after scanning QR code of a user. It discount an amount from its balance.
     * @param balanceTransactions
     * @return
     */
    @RequestMapping(value = "/discountUserBalance/", method = RequestMethod.POST, headers = {"Accept=application/json"}, produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public User discountUserBalance(@RequestBody BalanceTransactions balanceTransactions) {

        return getLoginService().discountUserBalance(balanceTransactions);
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
