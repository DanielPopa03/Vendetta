package com.application.vendetta.services;

import com.application.vendetta.entities.Comments;
import com.application.vendetta.entities.Markers;
import com.application.vendetta.repositories.CommentsRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentsService {

    @Autowired
    private CommentsRepositary commentsRepositary;

    public Comments saveComment(Comments comment) {return commentsRepositary.save(comment);}

    public List<Comments> findAllComments() {return commentsRepositary.findAll();}

    public List<Comments> findAllCommentsByMarker(Markers marker){return commentsRepositary.findAllByMarker(marker);}
}

