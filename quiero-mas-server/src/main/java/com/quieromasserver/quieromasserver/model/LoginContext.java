package com.quieromasserver.quieromasserver.model;

import javax.persistence.*;

@Entity
@Table(name = "LOGIN_CONTEXT", schema="quiero_mas")
public class LoginContext {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long id;

    @Column(name = "CONTEXT", unique = true)
    private String context;

    public LoginContext() {
    }

    public LoginContext(String context) {
        this.context = context;
    }

    public Long getId() {
        return id;
    }

    public String getContext() {
        return context;
    }

    public void setContext(String context) {
        this.context = context;
    }
}
