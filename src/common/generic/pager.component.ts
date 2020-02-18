import { Attribute, BootstrapWindow, Component, ComponentContext, ElementRender, Render } from '@wesib/wesib';
import { DomEventDispatcher } from 'fun-events/dom';
import { Conduit__NS } from '../conduit.ns';
import { PagerEvent } from './pager-event';

@Component(['pager', Conduit__NS])
export class PagerComponent {

  @Attribute('current-page')
  currentPage?: string;

  @Attribute('total-pages')
  totalPages?: string;

  @Attribute('visible-pages')
  visiblePages?: string;

  constructor(private readonly _context: ComponentContext) {
  }

  @Render()
  render(): ElementRender {

    const { contentRoot } = this._context;
    const { document } = this._context.get(BootstrapWindow);

    return () => {

      const totalPages = this.totalPages && parseInt(this.totalPages, 10) || 0;
      const range = contentRange();

      range.deleteContents();
      if (totalPages <= 1) {
        return; // No paging required
      }

      const visiblePages = Math.max(1, this.visiblePages && parseInt(this.visiblePages, 10) || 5);
      const currentPage = this.currentPage && parseInt(this.currentPage, 10) || 0;

      const ul = document.createElement('ul');

      ul.className = 'pagination';

      let startPage = Math.max(0, currentPage - (visiblePages >> 1));
      let endPage = startPage + visiblePages;

      if (endPage > totalPages) {
        startPage = Math.max(0, startPage - (endPage - totalPages));
        endPage = totalPages;
      }

      ul.appendChild(pageItem('<<', 0, currentPage > 0));
      ul.appendChild(pageItem('<', currentPage - 1, currentPage > 0));
      for (let page = startPage; page < endPage; ++page) {
        ul.appendChild(pageItem(String(page + 1), page, true, currentPage === page));
      }
      ul.appendChild(pageItem('>', currentPage + 1, currentPage + 1 < totalPages));
      ul.appendChild(pageItem('>>', totalPages - 1, currentPage + 1 < totalPages));

      range.insertNode(ul);
    };

    function contentRange(): Range {

      const range = document.createRange();

      range.selectNodeContents(contentRoot);

      return range;
    }

    function pageItem(
        text: string,
        page: number,
        enabled: boolean,
        active = false,
    ): HTMLLIElement {

      const li = document.createElement('li');

      li.className = 'page-item';

      let link: HTMLElement;

      if (enabled && !active) {
        link = document.createElement('a');
        link.setAttribute('href', '');
        new DomEventDispatcher(li).on('click').capture.instead(event => {
          event.preventDefault();
          li.dispatchEvent(new PagerEvent('conduit:pager', { cancelable: true, bubbles: true, detail: page }));
        });
      } else {
        li.classList.add(active ? 'active' : 'disabled');
        link = document.createElement('span');
      }
      link.className = 'page-link';
      link.innerHTML = text;
      li.appendChild(link);

      return li;
    }
  }

}
