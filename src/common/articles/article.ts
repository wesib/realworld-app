import { nextSkip } from 'call-thru';
import { EventSender, OnEvent, OnEvent__symbol, onEventBy, trackValue } from 'fun-events';
import { UserProfile } from '../users';
import * as marked from 'marked';

export class Article implements EventSender<[string]> {

  private readonly _html = trackValue<string>();
  private _onHtml?: OnEvent<[string]>;

  constructor(readonly data: Article.Data) {
  }

  get createdAt(): Date {
    return new Date(this.data.createdAt);
  }

  get updatedAt(): Date {
    return new Date(this.data.updatedAt);
  }

  get [OnEvent__symbol](): OnEvent<[string]> {
    return this.onHtml;
  }

  get onHtml(): OnEvent<[string]> {
    return onEventBy(receiver => {
      if (this._onHtml) {
        this._onHtml(receiver);
        return;
      }
      this._onHtml = this._html.read.thru_(html => html != null ? html : nextSkip);
      marked(this.data.body, (error, html) => {
        if (error != null) {
          this._html.done(error); // Failed to parse Markdown
        } else {
          this._html.it = html; // TODO: Sanitize HTML
        }
      });
    });
  }

}

export namespace Article {

  export interface Data {
    readonly slug: string;
    readonly title: string;
    readonly description: string;
    readonly body: string;
    readonly tagList: readonly string[];
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly favorited: boolean;
    readonly favoritesCount: number;
    readonly author: UserProfile;
  }

}
