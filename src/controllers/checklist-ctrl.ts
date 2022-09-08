import { RequestHandler } from "express";
import { ChecklistClass } from '../models/checklist-model';

const TODO: ChecklistClass[] = [];

export const createTODO: RequestHandler = (req, res, next) => {
  const text = req.body.text;
  const newTodo = new ChecklistClass(Math.random().toString(), text);

  TODO.push(newTodo);

  res.status(201).json({ message: "created", newOne: newTodo });
}

export const getTODOs: RequestHandler = (req, res, next) => {
  res.json({ todos: TODO })
}

export const updateTODO: RequestHandler<{id: string}> = (req, res, next) => {
  const id = req.params.id;
  const updatedText = req.body.text;
  const todoPos = TODO.findIndex(todo => todo.id === id);

  if (todoPos < 0) {
    throw new Error('Couldnt find record')
  }

  TODO[todoPos] = new ChecklistClass( TODO[todoPos].id, updatedText );

  res.json({ message: 'Update finished', updatedRecord: TODO[todoPos] })
}

export const deleteTODO: RequestHandler<{id: string}> = (req, res, next) => {
  const id = req.params.id;
  const todoPos = TODO.findIndex(todo => todo.id === id);

  if (todoPos < 0) {
    throw new Error('Couldnt find record')
  }

  TODO.slice(todoPos, 1);
  
  res.json({ message: 'Removing finished' })
}
