---
layout: post
title: Object-Oriented Design Study Notes
---
This article is the study note for <b> Programming Foundations: Object-Oriented Design</b> by Olivia Chiu Stone and Barron Stone. It helps me to understand how to design the architecture of the software.

### 1. Object-oriented thinking
APIE stands for Abstraction, Polymorphism, Inheritance and Encapsulation.

### 2. Analysis, Design and programming
1. Gather requirements
2. Describe the app
3. Identify the main objects
4. Describe the interactions
5. Create a class diagram 

### 3. Designing the requirements
1. Functional Requirement
    The system must do ...

    The app must do ...
2. Non-functional Requirements

    The system should be ...

    The application should be ...

>  FURPS plus:Functionality, Usability, Reliability, Performance, and Supportability

### 4. Use Cases and User Storeis

1. Identify the actors
2. Identify the scenarios 

    Use User-focused goals 
    * Cook meal.
    * Generate reports
    * Change settings.
    * Order supplies.

> Use Active Voice: Omit Neddles Words, Avoid "screen, click , button, select". Focus on the <b>Intention</b> eg., Astronauts inserts meal package.

#### User Story
As a ( type of user ), I want ( goal ), so that ( reason )

> PS: User stories can be informal while use cases can be casual to very formal

### 5. Domain Modelling
Pick up the nouns when identifying the objects. 

* Conceptual Object Model

* CRC CARD: class, responsibility and collaboration.
![crc card](../../../assets/images/2020-09-08-Object-Oriented-Design/crc.png)

* CRH CARD: component, responsibilities, helper

#### Conceptual Model
1. Picking Out Nouns
![Use Case Scenario](../../../assets/images/2020-09-08-Object-Oriented-Design/useCaseScenario.png)
2. Identifying the Possible Objects
User, Library, Album, Song, Queue, Admin
3. Picking Out Verb Phrases
Add song to queue, Play song from the queue, cancel song in queue, identify the user

### 6. UML Class Diagram

| Name      | 
| :---------| 
| Attribute | 
| Methods   | 

<br>

![class diagram](../../../assets/images/2020-09-08-Object-Oriented-Design/class.png)

![relathionship](../../../assets/images/2020-09-08-Object-Oriented-Design/line.png)

#### Symbols for Access Modifiers

|Access Modifiers| Symbols|
|:---------------|--------|
| public         | +      |
| protected      | #      |
| internal       | ~      |
| private        | -      |