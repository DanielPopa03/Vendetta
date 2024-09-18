package com.application.vendetta.controllers;

import com.application.vendetta.dtos.MessageDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200")
public class PublicController {

    @GetMapping("/public/messages")
    public ResponseEntity<MessageDto> publicMessages() {
        return ResponseEntity.ok(new MessageDto("public content"));
    }
}
