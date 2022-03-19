import { createContext } from 'react';
import { Subject } from 'rxjs';

export const subject = new Subject();

export const EditorContext = createContext(subject);
