package com.application.vendetta.controllers;

import com.application.vendetta.entities.Comments;
import com.application.vendetta.entities.Markers;
import com.application.vendetta.services.CommentsService;
import com.application.vendetta.services.MarkersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
public class CommentsController {
    @Autowired
    private CommentsService commentsService;

    @Autowired
    private MarkersService markersService;

    @GetMapping("/public/findAllComments")
    public List<Comments> findAllComments(){return commentsService.findAllComments();}

    @PostMapping("/saveComment")
    public Comments saveComment(@RequestBody Comments comments){return commentsService.saveComment(comments);}

    @CrossOrigin("http://localhost:4200")
    @GetMapping("/public/findAllCommentsByMarker")
    public List<Comments> findAllCommentsByMarker(@RequestParam Long idMarker){
        Markers marker = markersService.findById(idMarker);
        return commentsService.findAllCommentsByMarker(marker);
    }
}
