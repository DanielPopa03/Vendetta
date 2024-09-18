package com.application.vendetta.repositories;

import com.application.vendetta.entities.TypeOfMarker;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeOfMarkerRepositary extends CrudRepository<TypeOfMarker, Long> {

}
