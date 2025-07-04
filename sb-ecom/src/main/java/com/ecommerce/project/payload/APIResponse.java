package com.ecommerce.project.payload;


public class APIResponse {
    public String message;
    private boolean status;

    public String getMessage() {
        return message;
    }

    public APIResponse() {
    }

    public APIResponse(String message, boolean status) {
        this.message = message;
        this.status = status;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
