package com.application.vendetta.repositories;

import com.application.vendetta.entities.Markers;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MarkersRepositary  extends CrudRepository<Markers, Long> {

    public List<Markers> findMarkersByEmailOfCreator(String email);

    @Query("Select m FROM Markers m WHERE m.title = :title")
    public Markers findMarkersByTitle(@Param("title") String title);
}
