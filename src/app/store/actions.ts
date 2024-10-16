import { createAction, props } from '@ngrx/store';
import { IBlogItem } from '../types/blog';

export const updateBlog = createAction('[Counter Component] Update',props<{item:IBlogItem}>());
