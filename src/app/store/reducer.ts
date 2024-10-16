import { Action, createReducer, on } from '@ngrx/store';
import { updateBlog } from './actions';
import { BlogItems } from '../untils/draft_data/blog_list';
import { IBlogItem } from '../types/blog';

export const initState = BlogItems;

const _updateBlogReducer = createReducer(initState,

    on(updateBlog, (state, { item }) => {
        return state.map(i => i.id === item?.id ? item : i)
    })
)

export function blogReducer(state: IBlogItem[] | undefined,action: Action<string>){
    return _updateBlogReducer(state,action)
}