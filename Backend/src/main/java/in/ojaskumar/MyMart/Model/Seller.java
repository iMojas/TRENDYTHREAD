package in.ojaskumar.MyMart.Model;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Seller extends User{
    @OneToMany
    List<Product> products = new ArrayList<>();
}
