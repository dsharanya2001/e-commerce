package com.ecommerce.project.payload;



import java.util.ArrayList;
import java.util.List;


public class CartDTO {
    private Long cartId;
    private Double totalPrice = 0.0;
    private List<ProductDTO> products = new ArrayList<>();

    public Long getCartId() {
        return cartId;
    }

    public CartDTO(Long cartId, List<ProductDTO> products, Double totalPrice) {
        this.cartId = cartId;
        this.products = products;
        this.totalPrice = totalPrice;
    }

    public CartDTO() {
    }

    public void setCartId(Long cartId) {
        this.cartId = cartId;
    }

    public List<ProductDTO> getProducts() {
        return products;
    }

    public void setProducts(List<ProductDTO> products) {
        this.products = products;
    }

    public Double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
