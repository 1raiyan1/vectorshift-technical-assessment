Visual workflow builder

A visual workflow builder built using React, ReactFlow, Zustand, and FastAPI.

## Features

* Reusable BaseNode abstraction for scalable node creation
* 9 workflow node types (Input, Output, LLM, Text, API, Email, Database, Condition, Delay)
* Dynamic text variable detection using `{{variable}}` syntax
* Automatic Text Node resizing
* Dark-themed workflow builder UI
* Backend integration with FastAPI
* Pipeline analysis including:

  * Node count
  * Edge count
  * DAG validation
* Custom results modal for workflow analysis

## Tech Stack

### Frontend

* React
* ReactFlow
* Zustand

### Backend

* FastAPI
* Python

## DAG Validation

The backend validates whether a workflow forms a Directed Acyclic Graph (DAG) using Kahn's Algorithm to detect cycles and prevent invalid workflow execution paths.

## Run Locally

### Frontend

```bash
npm install
npm start
```

### Backend

```bash
uvicorn main:app --reload
```
