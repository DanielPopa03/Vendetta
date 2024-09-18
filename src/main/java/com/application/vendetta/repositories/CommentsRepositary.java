package com.application.vendetta.repositories;

import com.application.vendetta.entities.Comments;
import com.application.vendetta.entities.Markers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentsRepositary extends JpaRepository<Comments, Long> {

    List<Comments> findAllByMarker(Markers marker);
}
