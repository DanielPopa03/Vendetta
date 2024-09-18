package com.application.vendetta.controllers;

import com.application.vendetta.dtos.MessageDto;
import com.application.vendetta.services.MarkersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.OAuth2AuthenticatedPrincipal;
import org.springframework.web.bind.annotation.*;
import com.application.vendetta.entities.Markers;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class MarkersController {
    @Autowired
    private MarkersService markersService;

    @GetMapping("/findMarkersByEmailOfCreator")
    public ResponseEntity<List<Markers>> findMarkersByEmailOfCreator(@AuthenticationPrincipal OAuth2AuthenticatedPrincipal principal) {
        String email = principal.getAttribute("email").toString();
        List<Markers> markersOfUser = markersService.findMarkersByEmailOfCreator(email);
        return ResponseEntity.ok(markersOfUser);
    }

    @GetMapping("/public/getAllTitles")
    public ResponseEntity<List<String>> getAllTitles() {
        List<Markers> markers = markersService.findAllMarkers();
        List<String> titles = new ArrayList<>();
        for (Markers marker : markers) {
            titles.add(marker.getTitle());
        }
        return ResponseEntity.ok(titles);
    }

    @GetMapping("/public/findMarkerByTitle")
    public ResponseEntity<Markers> findMarkerByTitle(@RequestParam("title") String title) {
        Markers marker = markersService.findMarkersByTitle(title);
        return ResponseEntity.ok(marker);
    }

    @GetMapping("/public/findAllMarkers")
    public ResponseEntity<List<Markers>> findAllMarkers() {return ResponseEntity.ok(markersService.findAllMarkers());}

    @PostMapping("/saveMarker")
    public ResponseEntity<Markers> saveMarker(@AuthenticationPrincipal(expression = "name") String name,
                                              @RequestBody Markers marker ) {
        Markers savedMarker = markersService.save(marker);
        return ResponseEntity.ok(savedMarker);

    }
}
