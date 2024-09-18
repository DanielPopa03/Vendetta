package com.application.vendetta.controllers;


import com.application.vendetta.dtos.MessageDto;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.OAuth2AuthenticatedPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
public class PrivateController {

    @GetMapping("/messages")
    public ResponseEntity<MessageDto> privateMessages(@AuthenticationPrincipal(expression = "name") String name) {
        return ResponseEntity.ok(new MessageDto("private content " + name));
    }

    @GetMapping("/email")
    public ResponseEntity<MessageDto> getEmail(@AuthenticationPrincipal OAuth2AuthenticatedPrincipal principal) {
        String email = principal.getAttribute("email").toString();
        return ResponseEntity.ok(new MessageDto(email));
    }

}
