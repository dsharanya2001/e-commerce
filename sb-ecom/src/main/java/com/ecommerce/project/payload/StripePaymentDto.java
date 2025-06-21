package com.ecommerce.project.payload;


public class StripePaymentDto {
    private Long amount;
    private String currency;

    public Long getAmount() {
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public StripePaymentDto(Long amount, String currency) {
        this.amount = amount;
        this.currency = currency;
    }

    public StripePaymentDto() {
    }
}
