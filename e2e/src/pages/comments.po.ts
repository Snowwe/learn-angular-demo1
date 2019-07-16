import { by, element } from 'protractor';

export class CommentsPo {
    getCountComment() {
        return element.all(by.css('.comment-card')).count();
    }
}
