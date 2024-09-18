package com.application.vendetta.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "comments")
public class Comments {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String text;
    private String emailOfCreator;
    @ManyToOne(fetch = FetchType.LAZY)
    private Markers marker;
}
