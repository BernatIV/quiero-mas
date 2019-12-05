package com.quieromasserver.quieromasserver.entity;

public class LoginResponse {

    private boolean status;
    private String username;

    public LoginResponse(boolean status, String username) {
        this.status = status;
        this.username = username;
    }
}
