package in.ojaskumar.MyMart.service;

import in.ojaskumar.MyMart.Dao.UserRepository;
import in.ojaskumar.MyMart.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUserName(username);

        if(user == null){
            throw new UsernameNotFoundException("User Not Found with userName "+username);
        }
        return user;
    }
}
