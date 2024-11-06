package in.ojaskumar.MyMart.Dao;

import in.ojaskumar.MyMart.Model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {
}
