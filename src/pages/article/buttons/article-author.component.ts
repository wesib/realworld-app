import { HandleNavLinks, Navigation, PageHashURLSupport } from '@wesib/generic';
import { BootstrapWindow, Component, ComponentContext, ElementRenderer, Render, StateProperty } from '@wesib/wesib';
import { Conduit__NS } from '../../../core';
import { formatDate } from '../../../reusable';
import { PageUserProfileParam } from '../../profile/page-user-profile-param';
import { CurrentArticle, noArticle } from '../current-article';
import { CurrentArticleShare } from '../current-article.share';

@Component(
    ['article-author', Conduit__NS],
    {
      feature: {
        needs: PageHashURLSupport,
      },
    },
    HandleNavLinks(),
)
export class ArticleAuthorComponent {

  @StateProperty()
  private article: CurrentArticle = noArticle;

  constructor(private readonly _context: ComponentContext) {
    CurrentArticleShare.articleFor(_context)(article => {
      this.article = article;
    }).whenOff(() => {
      this.article = noArticle;
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
        ).pretend('profile/')?.url?.href || '';
        profileImage = author.image ? `<img src="${encodeURI(author.image)}"/>` : '';
        username = author.username;
        timestamp = article.createdAt;
        postDate = formatDate(new Date(article.createdAt));
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
