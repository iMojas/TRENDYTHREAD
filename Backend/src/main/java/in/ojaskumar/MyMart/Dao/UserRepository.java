package in.ojaskumar.MyMart.Dao;

import in.ojaskumar.MyMart.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUserName(String username);
}
