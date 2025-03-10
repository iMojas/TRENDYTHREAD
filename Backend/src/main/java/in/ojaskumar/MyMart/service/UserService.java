package in.ojaskumar.MyMart.service;

import in.ojaskumar.MyMart.dto.requests.NewUserRequest;

public interface UserService {
    public String createNewAccount(NewUserRequest newUserRequest);
    public String updateUserRecord(NewUserRequest newUserRequest, int userId);
}
