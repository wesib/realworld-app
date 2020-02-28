import { HandleNavLinks, HierarchyContext, Navigation } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../common';
import { PageUserProfileParam } from '../profile/page-user-profile-param';
import { CurrentArticle } from './current-article';

@Component(
    ['article-author', Conduit__NS],
    HandleNavLinks(),
)
export class ArticleAuthorComponent {

  @StateProperty()
  private article: CurrentArticle = {};

  constructor(private readonly _context: ComponentContext) {

    const hierarchy = _context.get(HierarchyContext);

    _context.whenOn(supply => {
      hierarchy.get(CurrentArticle).tillOff(supply)(article => this.article = article);
    });
  }

  @Render()
  render(): ElementRenderer {

    const navigation = this._context.get(Navigation);
    const { document } = this._context.get(BootstrapWindow);
    const { contentRoot }: { contentRoot: Node } = this._context;
    const fragment = document.createDocumentFragment();
    const authorImgLink = fragment.appendChild(document.createElement('a'));
    const info = fragment.appendChild(document.createElement('div'));

    info.className = 'info';

    const authorLink = info.appendChild(document.createElement('a'));

    authorLink.className = 'author';

    const time = info.appendChild(document.createElement('time'));

    time.className = 'date';

    contentRoot.appendChild(fragment);

    return () => {

      const article = this.article;

      let profileURL = '';
      let profileImage = '';
      let username = '';
      let timestamp = '';
      let postDate = '';

      if (article.slug) {

        const { author } = article;

        profileURL = navigation.with(
            PageUserProfileParam,
            { author: author.username },
        ).pretend('profile')?.url?.href || '';
        profileImage = author.image ? `<img src="${encodeURI(author.image)}"/>` : '';
        username = author.username;
        timestamp = article.createdAt;
        postDate = formatArticleDate(new Date(article.createdAt));
      }

      authorImgLink.href = profileURL;
      authorImgLink.innerHTML = profileImage;
      authorLink.href = profileURL;
      authorLink.innerText = username;
      time.innerText = postDate;
      if (timestamp) {
        time.setAttribute('datetime', timestamp);
      } else {
        time.removeAttribute('datetime');
      }
    };
  }

}

const thisYearDateFormat = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' });
const otherYearFateFormat = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

function formatArticleDate(date: Date): string {

  const now = new Date();
  const format = now.getFullYear() === date.getFullYear() ? thisYearDateFormat : otherYearFateFormat;

  return format.format(date);
}
