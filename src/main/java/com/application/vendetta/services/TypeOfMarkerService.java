package com.application.vendetta.services;

import com.application.vendetta.entities.TypeOfMarker;
import com.application.vendetta.repositories.TypeOfMarkerRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeOfMarkerService {

    @Autowired
    private TypeOfMarkerRepositary typeOfMarkerRepositary;

    public List<TypeOfMarker> findAllTypeOfMarkers() {return (List<TypeOfMarker>) typeOfMarkerRepositary.findAll();}

    public TypeOfMarker findTypeOfMarkerById(Long id) {return typeOfMarkerRepositary.findById(id).orElse(null);}
}
