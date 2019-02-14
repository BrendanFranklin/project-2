package org.project2.controllers;

import org.project2.pojos.Payment;
import org.project2.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payment")
public class PaymentController {

    private PaymentService paymentService;

    public PaymentController(){}

    @Autowired
    public void setPaymentService(PaymentService paymentService){this.paymentService = paymentService;}

    @GetMapping(path = "/allPayments", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Payment> allPayments(){ return this.paymentService.findAll();}

    @PostMapping(path = "/paymentAuth", consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Payment> paymentByAuthor(@RequestBody Payment payment) {
        return this.paymentService.findByAuthor(payment.getUser_id());
    }
}
