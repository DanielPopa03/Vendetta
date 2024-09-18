package com.application.vendetta.dtos;

import lombok.Setter;
import org.springframework.web.bind.annotation.GetMapping;

public record UserInfo(
        String sub,
        String name,
        String given_name,
        String family_name,
        String picture,
        String email,
        boolean email_verified,
        String locale
) { }
