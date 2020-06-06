import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const forbiddenArrayWords = ['spam', 'test22', 'php']

export function forbiddenWordsMiddleware ({dispatch}) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const found = forbiddenArrayWords.filter(word => action.payload.title.includes(word))
        if (found.length) {
          return dispatch(showAlert('Wrong word'))
        }
      }
      return next(action)
    }
  }
}
