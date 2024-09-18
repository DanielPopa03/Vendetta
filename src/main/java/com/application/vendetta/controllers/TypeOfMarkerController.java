package com.application.vendetta.controllers;

import com.application.vendetta.entities.TypeOfMarker;
import com.application.vendetta.services.TypeOfMarkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.OAuth2AuthenticatedPrincipal;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class TypeOfMarkerController {

    @Autowired
    private TypeOfMarkerService typeOfMarkerService;

    @GetMapping("/public/findTypeOfMarkerById/{id}")
    public TypeOfMarker findTypeOfMarkerById(@PathVariable Long id) {
        return typeOfMarkerService.findTypeOfMarkerById(id);
    }

    @GetMapping("/public/findAllTypeOfMarker")
    public List<TypeOfMarker> findAllTypeOfMarker() {return typeOfMarkerService.findAllTypeOfMarkers();}
}
