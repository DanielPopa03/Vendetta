package com.application.vendetta.services;

import com.application.vendetta.entities.Markers;
import com.application.vendetta.repositories.MarkersRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarkersService {

    @Autowired
    private MarkersRepositary markersRepositary;

    public Markers findById(Long id) {return markersRepositary.findById(id).orElse(null);}

    public List<Markers> findMarkersByEmailOfCreator(String email) {
        return markersRepositary.findMarkersByEmailOfCreator(email);
    }

    public List<Markers> findAllMarkers(){return (List<Markers>) markersRepositary.findAll();}

    public Markers findMarkersByTitle(String title) {return markersRepositary.findMarkersByTitle(title);}

    public Markers save(Markers marker){
        Markers savedMarker = markersRepositary.save(marker);
        return savedMarker;
    }
}
