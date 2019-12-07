package com.quieromasserver.quieromasserver.model;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="BALANCE_TRANSACTIONS", schema="quiero_mas")
public class BalanceTransactions {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long id;

    @Column(name = "TRANSACTION_AMOUNT")
    private double transactionAmount;

    @Column(name = "CURRENT_BALANCE")
    private double currentBalance;

    @Column(name = "FINAL_BALANCE")
    private double finalBalance;

    @Column(name = "VALUE_DATE")
    private Date valeDate;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "USER_ID")
    private User user;

    public BalanceTransactions() {
    }

    public BalanceTransactions(double transactionAmount, double currentBalance, double finalBalance, Date valeDate, User user) {
        this.transactionAmount = transactionAmount;
        this.currentBalance = currentBalance;
        this.finalBalance = finalBalance;
        this.valeDate = valeDate;
        this.user = user;
    }

    public long getId() {
        return id;
    }

    public double getTransactionAmount() {
        return transactionAmount;
    }

    public void setTransactionAmount(double transactionAmount) {
        this.transactionAmount = transactionAmount;
    }

    public double getCurrentBalance() {
        return currentBalance;
    }

    public void setCurrentBalance(double currentBalance) {
        this.currentBalance = currentBalance;
    }

    public double getFinalBalance() {
        return finalBalance;
    }

    public void setFinalBalance(double finalBalance) {
        this.finalBalance = finalBalance;
    }

    public Date getValeDate() {
        return valeDate;
    }

    public void setValeDate(Date valeDate) {
        this.valeDate = valeDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
