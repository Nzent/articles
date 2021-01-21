import { createSelector } from 'reselect'

const articleIdsSelector = state => article.ids;
const articlesSelector = state => article.titles;


export const hasMoreArticlesSelector = createSelector(
    articleIdsSelector,
    articlesSelector,
    (ids, titles) => ids.length > titles.length
)