package com.quieromasserver.quieromasserver.entity;

import javax.persistence.*;

@Entity
@Table(name="LOGIN", schema="quiero_mas")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long id;

    @Column(name = "USERNAME", unique = true)
    private String username;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "CURRENT_BALANCE")
    private Double currentBalance;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "CONTEXT_ID")
    private LoginContext loginContext;

    public User() {}

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public User(String username, String password, LoginContext loginContext) {
        this.username = username;
        this.password = password;
        this.loginContext = loginContext;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Double getCurrentBalance() {
        return currentBalance;
    }

    public void setCurrentBalance(Double currentBalance) {
        this.currentBalance = currentBalance;
    }

    public LoginContext getLoginContext() {
        return loginContext;
    }

    public void setLoginContext(LoginContext loginContext) {
        this.loginContext = loginContext;
    }
}
