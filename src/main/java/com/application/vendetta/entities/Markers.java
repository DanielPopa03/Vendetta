package com.application.vendetta.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
@Entity
@Table(name = "markers")
public class Markers {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String emailOfCreator;
    private String creationDate;
    private String description;
    @Column(unique=true)
    private String title;
    @Column(unique=true)
    private double lat;
    @Column(unique=true)
    private double lng;
    @ManyToOne
    private TypeOfMarker typeOfMarker;


}
