package org.project2.repository;

import org.project2.pojos.Payment;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Repository
public class PaymentRepositoryImpl implements PaymentRepository {


    @PersistenceContext
    EntityManager entityManager;

    @Override
    public List<Payment> findAll() {

        Query query = entityManager.createNativeQuery("SELECT * from pretense.payemt");

        if(!query.getResultList().isEmpty()){
            List<Payment> payments = (List<Payment>) query.getResultList();
            return payments;
        }

            return null;
    }

    @Override
    public List<Payment> findByAuthor(int author) {

        Query query = entityManager.createNativeQuery("select * from pretense.payment where author = ?;");
        query.setParameter(1, author);

        if(!query.getResultList().isEmpty()){
            List<Payment> payments = (List<Payment>) query.getResultList();
            return payments;
        }


        return null;
    }
}
